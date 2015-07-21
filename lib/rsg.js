require('babel/register')

var path = require('path')
var fs = require('fs-extra')
var assign = require('object-assign')
var browserify = require('browserify')
var babelify = require('babelify')
var glob = require('glob')
var mustache = require('mustache')
var reactDocGen = require('react-docgen')
var watchify = require('watchify')

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
function RSG (input, opts) {
  opts = opts || {}

  var config

  // If feeding in a direct config object
  if (typeof opts.config === 'object') {
    config = opts.config
  } else {
    config = this.readConfig(opts.config)
  }

  opts = assign(config, opts)

  opts.output = path.resolve(process.cwd(), (opts.output || 'styleguide').replace(/\/+$/, ''))
  opts.title = opts.title || 'Style Guide'
  opts.root = opts.root ? path.normalize('/' + opts.root.replace(/\/+$/, '')) : null
  opts.pushstate = opts.pushstate || false
  opts.files = opts.files || []
  opts.babelConfig = opts.babelConfig || null
  opts.browserifyConfig = assign(opts.browserifyConfig || {}, { standalone: 'Contents', debug: true })

  this.input = glob.sync(input, { realpath: true })

  opts['reactDocgen'] = opts['reactDocgen'] || {}

  if (!opts['reactDocgen'].files) {
    opts['reactDocgen'].files = [input]
  }

  this.opts = opts
  this.reactVersion = require('react').version

  // stores prop documentation generated from react-docgen
  this.reactPropMetas = {}

  this.log = require('./logger')('rsg-lib', { debug: opts.verbose || false })

}

/**
 * @param {string=} file
 * @returns {Object}
 */
RSG.prototype.readConfig = function (file) {

  file = file === undefined ? 'styleguide.json' : file
  if (!file) { return {} }

  var src = process.cwd() + '/' + file

  return fs.existsSync(src) ? fs.readJsonSync(src) : {}
}

/**
 * Generates propType metadata using react-docgen
 * @returns {Promise}
 */
RSG.prototype.genReactPropDoc = function () {
  var self = this

  return new Promise(function (resolve, reject) {

    if (self.opts['reactDocgen'].enabled) {
      var files = self.opts['reactDocgen'].files
      var fileList = []

      files.forEach(function (file) {
        fileList = fileList.concat(glob.sync(file, { realpath: true }))
      })

      // remove dupes
      var uniqueFiles = fileList.filter(function (elem, pos) {
        return fileList.indexOf(elem) === pos
      })

      uniqueFiles.forEach(function (file) {
        try {
          var srcData = fs.readFileSync(file)

          // used to get the displayName
          // @todo: figure out a faster way to extract displayName
          var component = require(file)

          var propMetadata = reactDocGen.parse(srcData)

          var displayName = component.displayName

          if (displayName) {
            if (self.reactPropMetas[displayName]) {
              reject(new Error('displayName already exists: ' + displayName))
            } else {
              self.reactPropMetas[displayName] = propMetadata
            }
          }

        } catch (e) {
          self.log.error(e, 'react-gendoc error')
          reject(e)
        }
      })
    }

    resolve()
  })
}

/**
 * @param {string} src
 * @param {string} dest
 * @returns {Promise}
 */
RSG.prototype.copy = function (src, dest) {
  return new Promise(function (resolve, reject) {
    fs.copy(src, dest, function (err) {
      if (err) { return reject(err) }
      resolve()
    })
  })
}

/**
 * @returns {Promise}
 */
RSG.prototype.copyAppFiles = function () {
  var src = path.resolve(__dirname, '../dist')
  var dest = this.opts.output + '/src'

  return this.copy(src, dest)
}

/**
 * @returns {Promise}
 */
RSG.prototype.copyOptsFiles = function () {
  var copy = this.copy
  var output = this.opts.output

  var files = this.opts.files.filter(function (file) {
    return fs.existsSync(file)
  })

  return Promise.all(
    files.map(function (file) {
      var dest = output + '/files/' + path.basename(file)
      return copy(file, dest)
    })
  )
}

/**
 * @param {string} ext
 * @returns {string[]}
 */
RSG.prototype.extractFiles = function (ext) {
  return this.opts.files
    .filter(function (file) { return path.extname(file) === ext })
    .map(function (file) {

      // linter had issues with a ternary operator
      // resulting in 'Infix operators must be spaced'
      // unsure how it passed on master
      if (fs.existsSync(file)) {
        return ('files/' + path.basename(file))
      }

      return file
    })
}

/**
 * @returns {Promise}
 */
RSG.prototype.createHtmlFile = function () {
  this.genReactPropDoc().then(function () {
    var data = assign({}, this.opts, {
      hashbang: this.opts.pushstate ? 'false' : 'true',
      reactVersion: this.reactVersion,
      cssFils: this.extractFiles('.css'),
      jsFils: this.extractFiles('.js'),
      propMetas: JSON.stringify(this.reactPropMetas)
    })

    var dest = this.opts.output + '/index.html'
    var template = path.resolve(__dirname, './fixtures/index.html.mustache')
    var rendered = mustache.render(fs.readFileSync(template, 'utf-8'), data)

    return new Promise(function (resolve, reject) {
      fs.outputFile(dest, rendered, function (err) {
        if (err) { return reject(err) }
        resolve()
      })
    })
  }.bind(this))
}

/**
 * @returns {Promise}
 */
RSG.prototype.createReactFile = function () {
  var dest = this.opts.output + '/src/react_' + this.reactVersion + '.js'

  if (fs.existsSync(dest)) { return Promise.resolve() }

  var b = browserify({ debug: true })
    .require('react')
    .require('react/addons')

  return new Promise(function (resolve, reject) {
    b.bundle(function (err, buffer) {
      if (err) { return reject(err) }

      fs.outputFile(dest, buffer, function (outputFileErr) {
        if (outputFileErr) { return reject(outputFileErr) }
        resolve()
      })
    })
  })
}

/**
 * @returns {Promise}
 */
RSG.prototype.createContentsFile = function () {
  var self = this
  var contentsInter = this.opts.output + '/src/contents-inter.js'
  var dest = this.opts.output + '/src/contents.js'
  var data = this.input.map(function (file) { return "require('" + file + "')" })

  data = 'module.exports = [' + data.join(',') + ']'
  fs.outputFileSync(contentsInter, data)

  var b = browserify(contentsInter, self.opts.browserifyConfig)

  function distContentsFile () {
    return new Promise(function (resolve, reject) {

      b.transform(babelify.configure(self.opts.babelConfig))
        .external('react')
        .external('react/addons')

      b.bundle(function (err, buffer) {
        if (err) { return reject(err) }

        fs.outputFile(dest, buffer, function (outputFileErr) {
          if (outputFileErr) { return reject(outputFileErr) }
          resolve()
        })

      })
    })
  }

  if (self.opts.watch) {

    b = watchify(b)

    b.on('update', function () {
      Promise.all([
        self.createHtmlFile(),
        distContentsFile()
      ]).then(function () {
        self.log.info('styleguide updated')
      }).catch(function (err) {
        self.log.error(err, 'browserify update error')
      })
    })

    b.on('error', function (err) {
      self.log.error(err, 'browserify error')
    })

    b.on('time', function (time) {
      self.log.info('styleguide rebundled in ' + time + 'ms')
    })

  }

  return distContentsFile()

}

/**
 * @param {Function=} cb
 * @returns {Promise}
 */
RSG.prototype.generate = function (cb) {
  cb = cb ? cb.bind(this) : function () {}

  return Promise
    .all([
      this.copyAppFiles(),
      this.copyOptsFiles(),
      this.createHtmlFile(),
      this.createReactFile(),
      this.createContentsFile()
    ])
    .then(function () { cb() })
    .catch(function (err) {
      this.log.error(err)
      cb(err)
    }.bind(this))
}

module.exports = function (input, opts) {
  return new RSG(input, opts)
}
