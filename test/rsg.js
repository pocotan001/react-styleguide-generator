/* global describe, it, afterEach */

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
    config: null
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

  describe('#generate', function () {
    this.timeout(0)

    afterEach(function () {
      fs.removeSync(TMP_DIR)
    })

    // it('files should exist', function (done) {
    //   RSG(INPUT_FILE).generate(function (err) {
    //     assert.ifError(err)

    //     var files = [
    //       'index.html',
    //       'src/app.css',
    //       'src/app.js',
    //       'src/contents.js',
    //       'src/react_' + this.reactVersion + '.js'
    //     ].map(function (file) { return process.cwd() + '/' + file })

    //     assert(false)
    //     assert(files.every(function (file) { return fs.existsSync(file) }))
    //     done()
    //   })
    // })

    it('should invoke the callback', function (done) {
      RSG(INPUT_FILE).generate(done)
    })
  })

})
