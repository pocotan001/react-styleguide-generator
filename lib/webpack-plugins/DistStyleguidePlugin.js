var fs = require('fs-extra')
var path = require('path')

function DistStyleguide (options) {
  this.outDir = options.outDir
  this.stageDir = options.stageDir
  this.log = options.log
}

DistStyleguide.prototype.dist = function (callback) {
  var self = this
  var src = path.join(this.stageDir, 'dist')
  var dest = this.outDir

  fs.copy(src, dest, function (err) {
    if (err) {
      return callback(null, err)
    }
    self.log.debug('asset copy completed: ' + self.outDir)
    callback()
  })
}

DistStyleguide.prototype.apply = function (compiler) {
  var self = this

  compiler.plugin('after-emit', function (c, callback) {
    self.log.debug('copying assets to output dir')
    self.dist(callback)
  })
}

module.exports = DistStyleguide
