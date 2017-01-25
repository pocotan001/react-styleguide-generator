/* global describe, it, after */

const assert = require('assert')
const path = require('path')
const fs = require('fs-extra')
const rsg = require('../lib/rsg').rsg

const INPUT_FILE = 'example/components/**/*.js'
const TMP_DIR = 'tmp'

/**
 * @param {string} input
 * @param {Object=} opts
 */
function RSG (input, opts) {
  return rsg(input, Object.assign({
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
  }, opts))
}

/**
 * @param {string} file
 * @returns {string}
 */
function getRealPath (file) {
  return path.resolve(process.cwd(), file)
}

describe('RSG', function () {
  after(() => {
    fs.removeSync(TMP_DIR)
  })

  describe('input', function () {
    it('should throw an exception when the value is not present', () => {
      assert.throws(RSG.bind(), Error)
    })

    it('should be an array', () => {
      const rsg = RSG(INPUT_FILE)
      assert(Array.isArray(rsg.input))
    })

    it('should be a realpath', () => {
      const rsg = RSG(INPUT_FILE)
      assert(rsg.input.every(file => getRealPath(file)))
    })
  })

  describe('opts.output', function () {
    it('should default to "styleguide"', () => {
      const rsg = RSG(INPUT_FILE, { output: undefined })
      assert.equal(rsg.opts.output, getRealPath('styleguide'))
    })

    it('should be a "Foo"', () => {
      const rsg = RSG(INPUT_FILE, { output: 'Foo' })
      assert.equal(rsg.opts.output, getRealPath('Foo'))
    })
  })

  describe('opts.title', function () {
    it('should default to "Style Guide"', () => {
      const rsg = RSG(INPUT_FILE, { title: undefined })
      assert.equal(rsg.opts.title, 'Style Guide')
    })

    it('should be a "Foo"', () => {
      const rsg = RSG(INPUT_FILE, { title: 'Foo' })
      assert.equal(rsg.opts.title, 'Foo')
    })
  })

  describe('opts.root', function () {
    it('should default to null', () => {
      const rsg = RSG(INPUT_FILE, { root: undefined })
      assert.equal(rsg.opts.root, null)
    })

    it('should be a "foo"', () => {
      const rsg = RSG(INPUT_FILE, { root: 'foo' })
      assert.equal(rsg.opts.root, '/foo')
    })
  })

  describe('opts.pushstate', function () {
    it('should default to false', () => {
      const rsg = RSG(INPUT_FILE, { pushstate: undefined })
      assert.equal(rsg.opts.pushstate, false)
    })

    it('should be a true', () => {
      const rsg = RSG(INPUT_FILE, { pushstate: true })
      assert.equal(rsg.opts.pushstate, true)
    })
  })

  describe('opts.files', function () {
    it('should default to []', () => {
      const rsg = RSG(INPUT_FILE, { files: undefined })
      assert.deepEqual(rsg.opts.files, [])
    })

    it('should be the files', () => {
      const files = ['a.css', 'a.js']
      const rsg = RSG(INPUT_FILE, { files: files })
      assert.deepEqual(rsg.opts.files, files)
    })
  })

  describe('opts.babelConfig', function () {
    it('should default to null', () => {
      const rsg = RSG(INPUT_FILE, { babelConfig: undefined })
      assert.equal(rsg.opts.babelConfig, null)
    })

    it('should be an object', () => {
      const babelConfig = {
        presets: [
          'es2015',
          'react'
        ],
        plugins: [
          'transform-class-properties'
        ]
      }
      const rsg = RSG(INPUT_FILE, { babelConfig })
      assert.deepEqual(rsg.opts.babelConfig, babelConfig)
    })
  })

  describe('opts.browserifyConfig', function () {
    it('should default to { standalone: \'Contents\', debug: true }', () => {
      const browserifyConfig = {
        standalone: 'Contents',
        debug: true
      }
      const rsg = RSG(INPUT_FILE, {
        browserifyConfig
      })
      assert.deepEqual(rsg.opts.browserifyConfig, browserifyConfig)
    })

    it('should merge with defaults', function () {
      const browserifyMergedConfig = {
        standalone: 'Contents',
        debug: true,
        extensions: ['', '.js', '.jsx']
      }
      const rsg = RSG(INPUT_FILE, {
        browserifyConfig: {
          extensions: ['', '.js', '.jsx']
        }
      })
      assert.deepEqual(rsg.opts.browserifyConfig, browserifyMergedConfig)
    })
  })

  describe('opts.config', function () {
    it('should load styleguide.json', function () {
      const rsg = RSG(INPUT_FILE, {
        config: undefined
      })
      assert.equal(rsg.opts.title, 'React Style Guide')
    })

    it('should be overwritten', () => {
      const rsg = RSG(INPUT_FILE, {
        config: undefined,
        title: 'foo'
      })
      assert.equal(rsg.opts.title, 'foo')
    })

    it('should custom config file', () => {
      const src = TMP_DIR + '/foo.json'
      fs.outputFileSync(src, '{ "title": "foo" }')

      const rsg = RSG(INPUT_FILE, {
        config: src
      })
      assert.equal(rsg.opts.title, 'foo')
      fs.removeSync(src)
    })
  })

  describe('#generate', function () {
    // this test is too heavy...
    this.timeout(60000)

    const opts = {
      files: [
        '//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css',
        'example/example.css'
      ]
    }

    const rsg = RSG(INPUT_FILE, opts)
    const generated = rsg.generate()

    it('files should exist', done => {
      const files = [
        'index.html',
        'src/contents.js',
        'src/contents-inter.js',
        'src/react_' + rsg.reactVersion + '.js',
        'files/example.css'
      ].map(file => getRealPath(TMP_DIR + '/' + file))

      generated.then(() => {
        assert(files.every(file => fs.existsSync(file)))
        done()
      }).catch(done)
    })
  })
})
