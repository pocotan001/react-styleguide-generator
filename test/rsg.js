const path = require('path')
const fs = require('fs-extra')
const test = require('ava')
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
        'add-module-exports',
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

test.after(() => {
  fs.removeSync(TMP_DIR)
})

test('should throw an exception when the value is not present', t => {
  t.throws(RSG.bind(), Error)
})

test('should be an array', t => {
  const rsg = RSG(INPUT_FILE)
  t.true(Array.isArray(rsg.input))
})

test('should be a realpath', t => {
  const rsg = RSG(INPUT_FILE)
  t.true(rsg.input.every(file => getRealPath(file)))
})

test('should default to "styleguide"', t => {
  const rsg = RSG(INPUT_FILE, { output: undefined })
  t.is(rsg.opts.output, getRealPath('styleguide'))
})

test('should be a "Foo"', t => {
  const rsg = RSG(INPUT_FILE, { output: 'Foo' })
  t.is(rsg.opts.output, getRealPath('Foo'))
})

test('should default to "Style Guide"', t => {
  const rsg = RSG(INPUT_FILE, { title: undefined })
  t.is(rsg.opts.title, 'Style Guide')
})

test('should be a "Foo"', t => {
  const rsg = RSG(INPUT_FILE, { title: 'Foo' })
  t.is(rsg.opts.title, 'Foo')
})

test('should default to null', t => {
  const rsg = RSG(INPUT_FILE, { root: undefined })
  t.is(rsg.opts.root, null)
})

test('should be a "foo"', t => {
  const rsg = RSG(INPUT_FILE, { root: 'foo' })
  t.is(rsg.opts.root, '/foo')
})

test('should default to false', t => {
  const rsg = RSG(INPUT_FILE, { pushstate: undefined })
  t.false(rsg.opts.pushstate)
})

test('should be a true', t => {
  const rsg = RSG(INPUT_FILE, { pushstate: true })
  t.true(rsg.opts.pushstate)
})

test('should default to []', t => {
  const rsg = RSG(INPUT_FILE, { files: undefined })
  t.deepEqual(rsg.opts.files, [])
})

test('should be the files', t => {
  const files = ['a.css', 'a.js']
  const rsg = RSG(INPUT_FILE, { files: files })
  t.deepEqual(rsg.opts.files, files)
})

test('should default to null', t => {
  const rsg = RSG(INPUT_FILE, { babelConfig: undefined })
  t.is(rsg.opts.babelConfig, null)
})

test('should be an object', t => {
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
  t.deepEqual(rsg.opts.babelConfig, babelConfig)
})

test('should default to { standalone: \'Contents\', debug: true }', t => {
  const browserifyConfig = {
    debug: true,
    standalone: 'Contents'
  }
  const rsg = RSG(INPUT_FILE, {
    browserifyConfig
  })
  t.deepEqual(rsg.opts.browserifyConfig, browserifyConfig)
})

test('should merge with defaults', t => {
  const browserifyMergedConfig = {
    debug: true,
    standalone: 'Contents',
    extensions: ['', '.js', '.jsx']
  }
  const rsg = RSG(INPUT_FILE, {
    browserifyConfig: {
      extensions: ['', '.js', '.jsx']
    }
  })
  t.deepEqual(rsg.opts.browserifyConfig, browserifyMergedConfig)
})

test('should load styleguide.json', t => {
  const rsg = RSG(INPUT_FILE, {
    config: undefined
  })
  t.is(rsg.opts.title, 'React Style Guide')
})

test('should be overwritten', t => {
  const rsg = RSG(INPUT_FILE, {
    config: undefined,
    title: 'foo'
  })
  t.is(rsg.opts.title, 'foo')
})

test('should custom config file', t => {
  const src = TMP_DIR + '/foo.json'
  fs.outputFileSync(src, '{ "title": "foo" }')

  const rsg = RSG(INPUT_FILE, {
    config: src
  })
  t.is(rsg.opts.title, 'foo')
  fs.removeSync(src)
})

test('files should exist', async t => {
  const rsg = RSG(INPUT_FILE, {
    files: [
      '//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css',
      'example/example.css'
    ]
  })
  await rsg.generate()

  const files = [
    'index.html',
    'src/contents.js',
    'src/contents-inter.js',
    'src/react_' + rsg.reactVersion + '.js',
    'files/example.css'
  ].map(file => getRealPath(TMP_DIR + '/' + file))

  t.true(files.every(file => fs.existsSync(file)))
})
