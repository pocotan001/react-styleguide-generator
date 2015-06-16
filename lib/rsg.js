var fs = require('fs');
var path = require('path');
var assign = require('object-assign');
var browserify = require('browserify');
var babelify = require('babelify');
var glob = require('glob');
var isUrl = require('is-url');
var mkdirp = require('mkdirp');
var mustache = require('mustache');

var TEMPLATE_PATH = path.resolve(__dirname, './fixtures/index.html.mustache');
var SRC_PATHS = [path.resolve(__dirname, '../dist/_sg.css'), path.resolve(__dirname, '../dist/_sg.js')];

/**
 * @param {string} dir
 * @returns {string}
 */
function getRealDir(dir) {
  return path.resolve(process.cwd(), dir.replace(/\/+$/, ''));
}

/**
 * @param {string} root
 * @returns {string}
 */
function normalizeRootPath(root) {
  return path.normalize('/' + root.replace(/\/+$/, ''));
}

/**
 * @param {string} file
 * @returns {Object}
 */
function readFile(file) {
  file = process.cwd() + '/' + file;
  return fs.existsSync(file) && JSON.parse(fs.readFileSync(file, 'utf8'));
}

/**
 * @param {string[]} files
 * @param {string} ext
 * @returns {string[]}
 */
function extractFiles(files, ext) {
  return files
    .filter(function(file) { return path.extname(file) === ext; })
    .map(function(file) { return isUrl(file) ? file : 'src/' + path.basename(file); });
}

/**
 * @param {Object} opts
 * @param {glob} opts.input
 * @param {string=} opts.output
 * @param {string=} opts.title
 * @param {string=} opts.root
 * @param {boolean=} opts.pushstate
 * @param {string[]=} opts.files
 * @param {Object=} opts.babelConfig
 */
function RSG(opts) {
  opts.input = glob.sync(opts.input, { realpath: true });
  opts.output = getRealDir(opts.output || 'styleguide');
  opts.title = opts.title || 'Style Guide';
  opts.root = opts.root ? normalizeRootPath(opts.root) : null;
  opts.pushstate = !!opts.pushstate;
  opts.files = opts.files || null;
  opts.babelConfig = opts.babelConfig || {};
  this.opts = opts;
}

/**
 * @param {string} input
 * @returns {promise}
 */
RSG.prototype.copy = function(input) {
  var outFile = this.opts.output + '/src/' + path.basename(input);
  var readStream = fs.createReadStream(input);
  var writeStream = fs.createWriteStream(outFile);

  return new Promise(function(resolve, reject) {
    readStream.on('error', reject);

    writeStream
      .on('error', reject)
      .on('open', function() { readStream.pipe(writeStream); })
      .once('finish', function() { resolve(); });
  });
};

/**
 * @returns {promise}
 */
RSG.prototype.copyFiles = function() {
  var copy = this.copy.bind(this);
  var input = SRC_PATHS
    .concat(this.opts.files)
    .filter(function(file) { return fs.existsSync(file); });

  return Promise.all(input.map(function(file) { return copy(file); }));
};

/**
 * @returns {promise}
 */
RSG.prototype.createHtmlFile = function() {
  var data = {
    title: this.opts.title,
    root: this.opts.root,
    hashbang: this.opts.pushstate ? 'false' : 'true',
    cssFils: this.opts.files && extractFiles(this.opts.files, '.css'),
    jsFils: this.opts.files && extractFiles(this.opts.files, '.js')
  };

  var rendered = mustache.render(fs.readFileSync(TEMPLATE_PATH, 'utf-8'), data);
  var outFile = this.opts.output + '/index.html';

  return new Promise(function(resolve, reject) {
    fs.writeFile(outFile, rendered, function(err) {
      if (err) { return reject(err); }
      resolve();
    });
  });
};

/**
 * @returns {promise}
 */
RSG.prototype.createReactFile = function() {
  var outFile = this.opts.output + '/src/_react.js';
  var b = browserify();

  b.require('react');
  b.require('react/addons');

  return new Promise(function(resolve, reject) {
    b.bundle(function(err, buffer) {
      if (err) { return reject(err); }

      fs.writeFile(outFile, buffer, function (writeFileErr) {
        if (writeFileErr) { return reject(writeFileErr); }
        resolve();
      });
    });
  });
};

/**
 * @returns {promise}
 */
RSG.prototype.createContentsFile = function() {
  var outFile = this.opts.output + '/src/_contents.js';
  var data = this.opts.input.map(function(file) { return 'require(\'' + file + '\')'; });
  var b;

  data = 'module.exports = [' + data.join(',') + ']';
  fs.writeFileSync(outFile, data);

  b = browserify(outFile, { standalone: 'Contents', debug: true });
  b.transform(babelify.configure(this.opts.babelConfig));
  b.external('react');
  b.external('react/addons');

  return new Promise(function(resolve, reject) {
    b.bundle(function(err, buffer) {
      if (err) { return reject(err); }

      fs.writeFile(outFile, buffer, function (writeFileErr) {
        if (writeFileErr) { return reject(writeFileErr); }
        resolve();
      });
    });
  });
};

/**
 * @param {Function=} callback
 * @returns {promise}
 */
RSG.prototype.generate = function(callback) {
  callback = callback.bind(this) || function() {};
  mkdirp.sync(this.opts.output + '/src');

  return Promise
    .all([
      this.copyFiles(),
      this.createHtmlFile(),
      this.createReactFile(),
      this.createContentsFile()
    ])
    .then(function() { callback(); })
    .catch(callback);
};

module.exports = function(opts) {
  var config = readFile(opts.config || 'styleguide.json') || {};

  return new RSG(assign(config, opts));
};
