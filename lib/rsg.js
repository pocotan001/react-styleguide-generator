require('es6-promise').polyfill()

var path = require('path')
var fs = require('fs-extra')
var assign = require('object-assign')
var browserify = require('browserify')
var babelify = require('babelify')
var glob = require('glob')
var mustache = require('mustache')
var reactDocGen = require('react-docgen')

/**
 * React Styleguide Generator
 *
 * @class
 * @param {string} input
 * @param {Object} opts
 * @param {string=} opts.output
 * @param {string=} opts.title
 * @param {string=} opts.config
 * @param {string=} opts.root
 * @param {boolean=} opts.pushstate
 * @param {string[]=} opts.files
 * @param {Object=} opts.babelConfig
 * @param {Object=} opts.browserifyConfig
 */
function RSG (input, opts) {
  opts = opts || {}
  opts = assign(this.readConfig(opts.config), opts)

  opts.output = path.resolve(process.cwd(), (opts.output || 'styleguide').replace(/\/+$/, ''))
  opts.title = opts.title || 'Style Guide'
  opts.root = opts.root ? path.normalize('/' + opts.root.replace(/\/+$/, '')) : null
  opts.pushstate = opts.pushstate || false
  opts.files = opts.files || []
  opts.babelConfig = opts.babelConfig || null
  opts.browserifyConfig = assign(opts.browserifyConfig || {}, { standalone: 'Contents', debug: true })

  this.input = glob.sync(input, { realpath: true })

  opts['react-docgen'] = opts['react-docgen'] || {}

  if (!opts['react-docgen'].files) {
    opts['react-docgen'].files = [input]
  }

  this.opts = opts
  this.reactVersion = require('react').version
}

/**
 * @param {string=} file
 * @returns {Object}
 */
RSG.prototype.readConfig = function (file) {
  file = file === undefined ? 'styleguide.json' : file
  if (!file) { return {} }

  var src = process.cwd() + '/' + file
  var config = fs.existsSync(src) ? fs.readJsonSync(src) : {}

  return config
}

RSG.prototype.genReactPropDocFiles = function () {
  var self = this

  return new Promise(function (resolve, reject) {

    if (self.opts['react-docgen'].enabled) {
      var files = self.opts['react-docgen'].files
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
          var basePath = path.relative(process.cwd(), path.dirname(file))
          var filename = path.basename(file, path.extname(file))
          var dest = path.join(path.resolve(__dirname, '../dist'), '/react-docgen/', basePath, filename + '.json')

          try {
            var propMetadata = reactDocGen.parse(srcData)
            fs.outputJsonSync(dest, propMetadata)
          } catch (e) {

            console.error('[err] (react-docgen) ' + path.basename(file) + ': ' + e.message)
            // don't want to reject, continue instead to the next
          }

        } catch (e) {
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
      return fs.existsSync(file) ? ('files/' + path.basename(file)) : file
    })
}

/**
 * @returns {Promise}
 */
RSG.prototype.createHtmlFile = function () {
  this.genReactPropDocFiles().then(function () {
    var data = assign({}, this.opts, {
      hashbang: this.opts.pushstate ? 'false' : 'true',
      reactVersion: this.reactVersion,
      cssFils: this.extractFiles('.css'),
      jsFils: this.extractFiles('.js')
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
  var dest = this.opts.output + '/src/contents.js'
  var data = this.input.map(function (file) { return "require('" + file + "')" })

  data = 'module.exports = [' + data.join(',') + ']'
  fs.outputFileSync(dest, data)

  var b = browserify(dest, this.opts.browserifyConfig)
    .transform(babelify.configure(this.opts.babelConfig))
    .external('react')
    .external('react/addons')

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
    .catch(cb)
}

module.exports = function (input, opts) {
  return new RSG(input, opts)
}
