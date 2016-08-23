/* global describe, it, after */

var assert = require('assert')
var path = require('path')
var fs = require('fs-extra')
var assign = require('object-assign')
var _RSG = require('../lib/rsg')

var INPUT_FILE = 'example/components/**/*.js'
var TMP_DIR = 'tmp'

/**
 * @param {string} input
 * @param {Object=} opts
 */
function RSG (input, opts) {
  var baseOpts = {
    output: TMP_DIR,
    config: null,
    babelConfig: {
      presets: [
        'es2015',
        'react'
      ],
      plugins: [
        'transform-class-properties'
      ]
    },
    browserifyConfig: {
      standalone: 'Contents',
      debug: true
    }
  }

  return _RSG(input, assign(baseOpts, opts))
}

/**
 * @param {string} file
 * @returns {string}
 */
function getRealPath (file) {
  return path.resolve(process.cwd(), file)
}

describe('RSG', function () {
  after(function () {
    fs.removeSync(TMP_DIR)
  })

  describe('input', function () {
    it('should throw an exception when the value is not present', function () {
      assert.throws(RSG.bind(), Error)
    })

    it('should be an array', function () {
      var rsg = RSG(INPUT_FILE)
      assert(Array.isArray(rsg.input))
    })

    it('should be a realpath', function () {
      var rsg = RSG(INPUT_FILE)
      assert(rsg.input.every(function (file) { return getRealPath(file) }))
    })
  })

  describe('opts.output', function () {
    it('should default to "styleguide"', function () {
      var rsg = RSG(INPUT_FILE, { output: undefined })
      assert.equal(rsg.opts.output, getRealPath('styleguide'))
    })

    it('should be a "Foo"', function () {
      var rsg = RSG(INPUT_FILE, { output: 'Foo' })
      assert.equal(rsg.opts.output, getRealPath('Foo'))
    })
  })

  describe('opts.title', function () {
    it('should default to "Style Guide"', function () {
      var rsg = RSG(INPUT_FILE, { title: undefined })
      assert.equal(rsg.opts.title, 'Style Guide')
    })

    it('should be a "Foo"', function () {
      var rsg = RSG(INPUT_FILE, { title: 'Foo' })
      assert.equal(rsg.opts.title, 'Foo')
    })
  })

  describe('opts.root', function () {
    it('should default to null', function () {
      var rsg = RSG(INPUT_FILE, { root: undefined })
      assert.equal(rsg.opts.root, null)
    })

    it('should be a "foo"', function () {
      var rsg = RSG(INPUT_FILE, { root: 'foo' })
      assert.equal(rsg.opts.root, '/foo')
    })
  })

  describe('opts.pushstate', function () {
    it('should default to false', function () {
      var rsg = RSG(INPUT_FILE, { pushstate: undefined })
      assert.equal(rsg.opts.pushstate, false)
    })

    it('should be a true', function () {
      var rsg = RSG(INPUT_FILE, { pushstate: true })
      assert.equal(rsg.opts.pushstate, true)
    })
  })

  describe('opts.files', function () {
    it('should default to []', function () {
      var rsg = RSG(INPUT_FILE, { files: undefined })
      assert.deepEqual(rsg.opts.files, [])
    })

    it('should be the files', function () {
      var files = ['a.css', 'a.js']
      var rsg = RSG(INPUT_FILE, { files: files })
      assert.deepEqual(rsg.opts.files, files)
    })
  })

  describe('opts.babelConfig', function () {
    it('should default to null', function () {
      var rsg = RSG(INPUT_FILE, { babelConfig: undefined })
      assert.equal(rsg.opts.babelConfig, null)
    })

    it('should be an object', function () {
      var babelConfig = {
        presets: [
          'es2015',
          'react'
        ],
        plugins: [
          'transform-class-properties'
        ]
      }
      var rsg = RSG(INPUT_FILE, { babelConfig: babelConfig })
      assert.deepEqual(rsg.opts.babelConfig, babelConfig)
    })
  })

  describe('opts.browserifyConfig', function () {
    it('should default to { standalone: \'Contents\', debug: true }', function () {
      var browserifyConfig = { standalone: 'Contents', debug: true }
      var rsg = RSG(INPUT_FILE, { browserifyConfig: undefined })
      assert.deepEqual(rsg.opts.browserifyConfig, browserifyConfig)
    })

    it('should merge with defaults', function () {
      var browserifyMergedConfig = { standalone: 'Contents', debug: true, extensions: ['', '.js', '.jsx'] }
      var rsg = RSG(INPUT_FILE, { browserifyConfig: { extensions: ['', '.js', '.jsx'] } })
      assert.deepEqual(rsg.opts.browserifyConfig, browserifyMergedConfig)
    })
  })

  describe('opts.config', function () {
    it('should load styleguide.json', function () {
      var rsg = RSG(INPUT_FILE, { config: undefined })
      assert.equal(rsg.opts.title, 'React Style Guide')
    })

    it('should be overwritten', function () {
      var rsg = RSG(INPUT_FILE, { config: undefined, title: 'foo' })
      assert.equal(rsg.opts.title, 'foo')
    })

    it('should custom config file', function () {
      var src = TMP_DIR + '/foo.json'
      fs.outputFileSync(src, '{ "title": "foo" }')

      var rsg = RSG(INPUT_FILE, { config: src })
      assert.equal(rsg.opts.title, 'foo')
      fs.removeSync(src)
    })
  })

  describe('#generate', function () {
    // this test is too heavy...
    this.timeout(60000)

    var opts = {
      files: [
        '//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css',
        'example/example.css'
      ]
    }

    var rsg = RSG(INPUT_FILE, opts)
    var generated = rsg.generate()

    it('files should exist', function (done) {
      var files = [
        'index.html',
        'src/contents.js',
        'src/contents-inter.js',
        'src/react_' + rsg.reactVersion + '.js',
        'files/example.css'
      ].map(function (file) { return getRealPath(TMP_DIR + '/' + file) })

      generated.then(function () {
        assert(files.every(function (file) { return fs.existsSync(file) }))
        done()
      }).catch(done)
    })
  })
})
