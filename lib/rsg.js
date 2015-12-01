require('babel/register')

var path = require('path')
var fs = require('fs-extra')
var assign = require('object-assign')
var webpack = require('webpack')
var glob = require('glob')
var mustache = require('mustache')
var slash = require('slash')
var hmrServer = require('./hmr-server')
var DistStyleguidePlugin = require('./webpack-plugins/DistStyleguidePlugin')
var DocgenPlugin = require('./webpack-plugins/ReactDocgenPlugin')

/**
 * React Styleguide Generator
 *
 * @class
 * @param {string} input
 * @param {Object} opts
 * @param {string} opts.output
 * @param {string} opts.title
 * @param {string|Object} opts.config
 * @param {string} opts.root
 * @param {boolean} opts.pushstate
 * @param {string[]} opts.files
 * @param {Object} opts.babelConfig
 * @param {Object} opts.reactDocgen
 */
function RSG (input, opts) {
  opts = opts || {}

  this.log = require('./logger')('rsg-lib', {debug: opts.verbose || false})

  var config

  // If feeding in a direct config object
  if (opts.config !== null && typeof opts.config === 'object') {
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

  // Run on port 3000 if mode enabled but port not specified
  if (opts.dev && opts.dev === true) {
    opts.dev = 3000
  } else if (!opts.dev) {
    opts.dev = false
  }

  this.input = glob.sync(input, {realpath: true})

  opts['reactDocgen'] = opts['reactDocgen'] || {}

  if (!opts['reactDocgen'].files) {
    opts['reactDocgen'].files = [input]
  }

  this.opts = opts

  // files to parse for react-docgen
  this.reactDocGenFiles = this.getReactPropDocFiles()

  // Cached files to include into the styleguide app
  this.cssFiles = this.extractFiles('.css')
  this.jsFiles = this.extractFiles('.js')

  this.appTemplate = fs.readFileSync(path.resolve(__dirname, './fixtures/index.html.mustache'), 'utf-8')

  this.stageDir = path.resolve(__dirname, '../rsg-tmp')
}

RSG.prototype.cleanStageDir = function () {
  fs.ensureDirSync(this.stageDir)
  fs.removeSync(this.stageDir)
  fs.ensureDirSync(this.stageDir)
}

RSG.prototype.cleanOutDir = function () {
  fs.ensureDirSync(this.opts.output)
  fs.removeSync(this.opts.output)
  fs.ensureDirSync(this.opts.output)
}

/**
 * @param {string=} file
 * @returns {Object}
 */
RSG.prototype.readConfig = function (file) {
  file = file === undefined ? 'styleguide.json' : file

  if (!file) {
    return {}
  }

  var src = process.cwd() + '/' + file

  this.log.info({configFile: src}, 'Reading config file')

  return fs.existsSync(src) ? fs.readJsonSync(src) : {}
}

/**
 * Generates the files to process for react-docgen
 */
RSG.prototype.getReactPropDocFiles = function () {
  var files = this.opts['reactDocgen'].files
  var fileList = []

  files.forEach(function (file) {
    fileList = fileList.concat(glob.sync(file, {realpath: true}))
  })

  // remove dupes
  return fileList.filter(function (elem, pos) {
    return fileList.indexOf(elem) === pos
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
      if (err) {
        return reject(err)
      }
      resolve()
    })
  })
}

/**
 * @returns {Promise}
 */
RSG.prototype.copyOptsFiles = function () {
  var copy = this.copy
  var output = path.join(this.stageDir, 'dist/files/')

  var files = this.opts.files.filter(function (file) {
    return fs.existsSync(file)
  })

  return Promise.all(
    files.map(function (file) {
      var dest = path.join(output, path.basename(file))
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
    .filter(function (file) {
      return path.extname(file) === ext
    })
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
  var data = assign({}, this.opts, {
    hashbang: this.opts.pushstate ? 'false' : 'true',
    cssFils: this.cssFiles,
    jsFils: this.jsFiles
  })

  var dest = path.join(this.stageDir, 'dist/index.html')
  var rendered = mustache.render(this.appTemplate, data)

  return new Promise(function (resolve, reject) {
    fs.outputFile(dest, rendered, function (err) {
      if (err) {
        return reject(err)
      }
      resolve()
    })
  })
}

/**
 * @returns {Promise}
 */
RSG.prototype.createContentsFile = function () {
  var self = this

  var contentsInter = path.join(this.stageDir, '/component-requires.js')

  var data = this.input.map(function (file) {
    self.log.debug({file: file}, 'styleguide input file')
    return "require('" + slash(file) + "')"
  })

  data = 'module.exports = [' + data.join(',') + ']'
  fs.outputFileSync(contentsInter, data)

  function distContentsFile () {
    return new Promise(function (resolve, reject) {
      webpack(self.getWebpackConfig(), function (err, stats) {
        if (err) {
          return reject(err)
        }

        var jsonStats = stats.toJson()

        if (jsonStats.errors.length > 0) {
          return reject(jsonStats.errors)
        }

        if (jsonStats.warnings.length > 0) {
          self.log.warn(jsonStats.warnings)
        }
        resolve()
      })
    })
  }

  if (self.opts.dev) {
    hmrServer(self.getWebpackConfig(), self.opts.dev, self.log, path.join(self.stageDir, 'dist'))
  } else {
    return distContentsFile()
  }
}

RSG.prototype.getWebpackConfig = function () {
  var appDir = path.resolve(__dirname, '../app')
  var self = this

  var loaders = [
    {
      test: /\.jsx?$/,
      loader: 'babel-loader?optional[]=runtime&stage=0',
      exclude: new RegExp(path.resolve(self.opts.output) + '|' + path.resolve(process.cwd(), 'node_modules'))
    },
    {
      // for when rsg is included in another project
      test: /rsg-alt\/app\/(.*)\.js?$/,
      loader: 'babel-loader?optional[]=runtime&stage=0'
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader!cssnext-loader',
      include: [appDir]
    }
  ]

  // custom rule for transpiling files
  this.opts.transpileIncludes && this.opts.transpileIncludes.forEach((rule) => {
    loaders.push({
      test: /\.jsx?$/,
      loader: 'babel-loader?optional[]=runtime&stage=0',
      include: rule
    })
  })

  return {
    entry: [
      path.resolve(__dirname, '../app/index.js')
    ].concat(self.opts.dev ? [
      'webpack-hot-middleware/client'
    ] : []),
    output: {
      path: path.join(self.stageDir, 'dist/src'),
      filename: 'bundle.js',
      publicPath: '/src/'
    },
    plugins: [
      new DocgenPlugin({
        files: self.reactDocGenFiles,
        stageDir: self.stageDir,
        log: self.log
      }),
      new webpack.optimize.OccurenceOrderPlugin()
    ].concat(process.env.NODE_ENV === 'production' ? [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      })
    ] : [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]).concat(!self.opts.dev ? [
      // Distribute out assets to out dir only in non-dev mode
      new DistStyleguidePlugin({
        outDir: self.opts.output,
        stageDir: self.stageDir,
        log: self.log
      })
    ] : []),
    module: {
      loaders: loaders
    }
  }
}

/**
 * @param {Function=} cb
 * @returns {Promise}
 */
RSG.prototype.generate = function (cb) {
  var self = this
  cb = cb ? cb.bind(this) : function () {
  }

  this.cleanStageDir()

  return Promise
    .all([
      this.copyOptsFiles(),
      this.createHtmlFile()
    ])
    .then(function () {
      return self.createContentsFile()
    })
    .then(function () {
      if (!self.opts.dev) {
        fs.removeSync(self.stageDir)
      }
      cb()
    })
    .catch(function (err) {
      this.log.error(err)
      cb(err)
    }.bind(this))
}

module.exports = function (input, opts) {
  return new RSG(input, opts)
}
