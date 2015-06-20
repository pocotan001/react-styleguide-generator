var path = require('path')
var fs = require('fs-extra')
var assign = require('object-assign')
var browserify = require('browserify')
var babelify = require('babelify')
var glob = require('glob')
var mustache = require('mustache')

/**
 * React Styleguide Generator
 *
 * @class
 * @param {Object} opts
 * @param {glob} opts.input
 * @param {string=} opts.output
 * @param {string=} opts.title
 * @param {string=} opts.config
 * @param {string=} opts.root
 * @param {boolean=} opts.pushstate
 * @param {string[]=} opts.files
 * @param {Object=} opts.babelConfig
 */
function RSG (opts) {
  opts = assign(this.readConfig(opts.config), opts)
  opts.input = glob.sync(opts.input, { realpath: true })
  opts.output = path.resolve(process.cwd(), (opts.output || 'styleguide').replace(/\/+$/, ''))
  opts.title = opts.title || 'Style Guide'
  opts.root = opts.root ? path.normalize('/' + opts.root.replace(/\/+$/, '')) : null
  opts.pushstate = opts.pushstate || false
  opts.files = opts.files || null
  opts.babelConfig = opts.babelConfig || null

  this.opts = opts
  this.reactVersion = require('react').version
}

/**
 * @returns {string=} file
 */
RSG.prototype.readConfig = function (file) {
  var src = process.cwd() + '/' + (file || 'styleguide.json')
  var config = fs.readJsonSync(src) || {}

  return config
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
  var dest = this.opts.output + '/file'
  var copy = this.copy

  var files = this.opts.files.filter(function (file) {
    return fs.existsSync(file)
  })

  return Promise.all(files.map(function (file) {
    return copy(file, dest)
  }))
}

/**
 * @param {string} ext
 * @returns {string[]}
 */
RSG.prototype.extractFiles = function (ext) {
  var output = this.opts.output

  return this.opts.files
    .filter(function (file) { return path.extname(file) === ext })
    .map(function (file) {
      var base = path.basename(file)
      var expect = fs.existsSync(output + '/file/' + base)

      return expect ? ('file/' + base) : file
    })
}

/**
 * @returns {Promise}
 */
RSG.prototype.createHtmlFile = function () {
  var data = assign({}, this.opts, {
    hashbang: this.opts.pushstate ? 'false' : 'true',
    reactVersion: this.reactVersion,
    cssFils: this.opts.files && this.extractFiles('.css'),
    jsFils: this.opts.files && this.extractFiles('.js')
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
  var data = this.opts.input.map(function (file) { return "require('" + file + "')" })

  data = 'module.exports = [' + data.join(',') + ']'
  fs.outputFileSync(dest, data)

  var b = browserify(dest, { standalone: 'Contents', debug: true })
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
  cb = cb.bind(this) || function () {}

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

module.exports = function (opts) {
  return new RSG(opts)
}
