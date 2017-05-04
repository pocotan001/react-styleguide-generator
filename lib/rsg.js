require('babel-register')

const path = require('path')
const fs = require('fs-extra')
const browserify = require('browserify')
const babelify = require('babelify')
const glob = require('glob')
const mustache = require('mustache')
const reactDocGen = require('react-docgen')
const watchify = require('watchify')
const slash = require('slash')
const logger = require('./logger')

class RSG {
  /**
   * React Styleguide Generator
   *
   * @class
   * @param {string} input
   * @param {Object} opts
   * @param {string=} opts.output
   * @param {string=} opts.title
   * @param {string=|Object} opts.config
   * @param {string=} opts.root
   * @param {boolean=} opts.pushstate
   * @param {string[]=} opts.files
   * @param {Object=} opts.babelConfig
   * @param {Object=} opts.browserifyConfig
   * @param {Object=} opts.reactDocgen
   */
  constructor (input, opts = {}) {
    this.log = logger('rsg-lib', { debug: opts.verbose || false })

    let config

    // If feeding in a direct config object
    if (opts.config !== null && typeof opts.config === 'object') {
      config = opts.config
    } else {
      config = this.readConfig(opts.config)
    }

    opts = Object.assign(config, opts)

    opts.output = path.resolve(process.cwd(), (opts.output || 'styleguide').replace(/\/+$/, ''))
    opts.title = opts.title || 'Style Guide'
    opts.root = opts.root ? path.normalize('/' + opts.root.replace(/\/+$/, '')) : null
    opts.pushstate = opts.pushstate || false
    opts.files = opts.files || []
    opts.babelConfig = opts.babelConfig || null
    opts.browserifyConfig = Object.assign({ debug: true }, opts.browserifyConfig, { standalone: 'Contents' })

    this.input = glob.sync(input, { realpath: true })

    opts['reactDocgen'] = opts['reactDocgen'] || {}

    if (!opts['reactDocgen'].files) {
      opts['reactDocgen'].files = [input]
    }

    this.opts = opts
    this.reactVersion = require('react').version

    // stores prop documentation generated from react-docgen
    this.reactPropMetas = {}

    // files to parse for react-docgen
    this.reactDocGenFiles = this.getReactPropDocFiles()

    // Cache of file modification times so we're not re-parsing
    // files that have not changed in react-docgen for perf
    this.reactDocGenCache = {}

    // has the first-pass of parsing happened?
    this.reactDocGenInit = false

    // Cached files to include into the styleguide app
    this.cssFiles = this.extractFiles('.css')
    this.jsFiles = this.extractFiles('.js')

    this.appTemplate = fs.readFileSync(path.resolve(__dirname, './fixtures/index.html.mustache'), 'utf-8')
  }

  /**
   * @param {string=} file
   * @returns {Object}
   */
  readConfig (file = 'styleguide.json') {
    if (!file) { return {} }

    const src = process.cwd() + '/' + file

    this.log.info({ configFile: src }, 'Reading config file')

    return fs.existsSync(src) ? JSON.parse(fs.readFileSync(src)) : {}
  }

  /**
   * Generates the files to process for react-docgen
   */
  getReactPropDocFiles () {
    const files = this.opts['reactDocgen'].files
    const fileList = []

    files.forEach(file => {
      glob.sync(file, { realpath: true }).forEach(f => fileList.push(f))
    })

    // remove dupes
    return fileList.filter((elem, pos) => fileList.indexOf(elem) === pos)
  }

  /**
   * Generates propType metadata using react-docgen
   * @returns {Promise}
   */
  genReactPropDoc () {
    return new Promise((resolve, reject) => {
      this.reactDocGenFiles.forEach(file => {
        try {
          const fileStat = fs.statSync(file)
          const docGenCache = this.reactDocGenCache[file]

          // If we do not have the file in our cache, or the mod time has changed, parse the file
          if (!docGenCache || docGenCache !== fileStat.mtime) {
            const srcData = fs.readFileSync(file)
            const propMetadata = reactDocGen.parse(srcData)
            const displayName = propMetadata.displayName

            if (displayName) {
              // only check for duplicate displayNames on the first pass
              // subsequent passes, we can assume we're regenerating the prop information
              if (this.reactPropMetas[displayName] && !this.reactDocGenInit) {
                reject(new Error(`displayName already exists: ${displayName}`))
              } else {
                this.reactPropMetas[displayName] = propMetadata
              }
            }

            this.reactDocGenCache[file] = fileStat.mtime
          }
        } catch (e) {
          // this.log.error(e, 'react-docgen error processing: %s', file)
        }
      })

      this.reactDocGenInit = true

      resolve()
    })
  }

  /**
   * @returns {Promise}
   */
  copyAppFiles () {
    const src = path.resolve(__dirname, '../dist')
    const dest = this.opts.output + '/src'

    return fs.copy(src, dest)
  }

  /**
   * @returns {Promise}
   */
  copyOptsFiles () {
    const output = this.opts.output
    const files = this.opts.files.filter(file => fs.existsSync(file))

    return Promise.all(
      files.map(file => fs.copy(file, `${output}/files/${path.basename(file)}`))
    )
  }

  /**
   * @param {string} ext
   * @returns {string[]}
   */
  extractFiles (ext) {
    return this.opts.files
      .filter(file => path.extname(file) === ext)
      .map(file => {
        // linter had issues with a ternary operator
        // resulting in 'Infix operators must be spaced'
        // unsure how it passed on master
        if (fs.existsSync(file)) {
          return `files/${path.basename(file)}`
        }

        return file
      })
  }

  /**
   * @returns {Promise}
   */
  createHtmlFile () {
    this.genReactPropDoc().then(() => {
      const data = Object.assign({}, this.opts, {
        hashbang: this.opts.pushstate ? 'false' : 'true',
        reactVersion: this.reactVersion,
        cssFils: this.cssFiles,
        jsFils: this.jsFiles,
        propMetas: JSON.stringify(this.reactPropMetas)
      })

      const dest = this.opts.output + '/index.html'
      const rendered = mustache.render(this.appTemplate, data)

      return new Promise((resolve, reject) => {
        fs.writeFile(dest, rendered, err => {
          if (err) {
            reject(err)
          } else {
            resolve()
          }
        })
      })
    })
  }

  /**
   * @returns {Promise}
   */
  createReactFile () {
    const dest = `${this.opts.output}/src/react_${this.reactVersion}.js`

    if (fs.existsSync(dest)) {
      return Promise.resolve()
    }

    const b = browserify({ debug: true })
      .require('react')
      .require('react-dom')

    return new Promise((resolve, reject) => {
      b.bundle((err, buffer) => {
        if (err) {
          return reject(err)
        }

        fs.writeFile(dest, buffer, outputFileErr => {
          if (outputFileErr) {
            reject(outputFileErr)
          } else {
            resolve()
          }
        })
      })
    })
  }

  /**
   * @returns {Promise}
   */
  createContentsFile () {
    const contentsInter = `${this.opts.output}/src/contents-inter.js`
    const dest = `${this.opts.output}/src/contents.js`
    let data = this.input.map(file => {
      this.log.debug({ file: file }, 'styleguide input file')
      return `require('${slash(file)}')`
    })

    data = 'module.exports = [' + data.join(',') + ']'
    fs.writeFileSync(contentsInter, data)

    let b = browserify(contentsInter, this.opts.browserifyConfig)

    b.transform(babelify.configure(this.opts.babelConfig))
      .external('react')
      .external('react-dom')

    function distContentsFile () {
      return new Promise((resolve, reject) => {
        b.bundle((err, buffer) => {
          if (err) {
            return reject(err)
          }

          fs.writeFile(dest, buffer, outputFileErr => {
            if (outputFileErr) {
              reject(outputFileErr)
            } else {
              resolve()
            }
          })
        })
      })
    }

    if (this.opts.watch) {
      this.log.info('styleguide watch mode enabled')

      b = watchify(b)

      b.on('update', () => {
        this.log.info('styleguide updating')

        Promise.all([
          this.createHtmlFile(),
          distContentsFile()
        ]).catch(err => {
          this.log.error(err, 'browserify update error')
        })
      })

      b.on('error', err => {
        this.log.error(err, 'browserify error')
      })

      b.on('time', time => {
        this.log.info(`styleguide rebundled in ${time}ms`)
      })
    }

    return distContentsFile()
  }

  /**
   * @returns {Promise}
   */
  generate () {
    return Promise.all([
      this.copyAppFiles(),
      this.copyOptsFiles(),
      this.createHtmlFile(),
      this.createReactFile(),
      this.createContentsFile()
    ])
  }
}

module.exports = RSG

module.exports.rsg = (input, opts) => {
  return new RSG(input, opts)
}
