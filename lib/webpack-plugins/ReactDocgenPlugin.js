var reactDocGen = require('react-docgen')
var fs = require('fs-extra')
var path = require('path')
var Immutable = require('immutable')

// has the first-pass of parsing happened?
var hasInit = false

function ReactDocgenPlugin (options) {
  // Files to parse
  this.files = options.files
  this.stageDir = options.stageDir
  this.log = options.log

  // stores prop documentation generated from react-docgen
  this.reactPropMetas = {}

  this.reactDocGenCache = Immutable.Map({})
  this.oldReactDocGenCache = null
}

ReactDocgenPlugin.prototype.generateDocs = function () {
  this.oldReactDocGenCache = this.reactDocGenCache

  this.files.forEach(function (file) {
    try {
      var fileStat = fs.statSync(file)
    } catch (e) {
      // self.log.error(e, 'react-docgen error processing: %s', file)
    }

    // If we do not have the file in our cache, or the mod time has changed, parse the file
    if (!this.reactDocGenCache.get(file) || this.reactDocGenCache.get(file) && this.reactDocGenCache.get(file) !== fileStat.mtime) {
      var srcData = fs.readFileSync(file)

      try {
        var propMetadata = reactDocGen.parse(srcData)

        var displayName = propMetadata.displayName

        if (displayName) {
          // only check for duplicate displayNames on the first pass
          // subsequent passes, we can assume we're regenerating the prop information
          if (this.reactPropMetas[displayName] && !hasInit) {
            throw new Error('duplicate displayName ' + displayName + ' in ' + file)
          } else {
            this.reactPropMetas[displayName] = propMetadata
          }
        }

        this.reactDocGenCache = this.reactDocGenCache.set(file, fileStat.mtime)
      } catch (e) {}
    }
  }, this)

}

ReactDocgenPlugin.prototype.writeFile = function () {
  var dest = path.join(this.stageDir, 'propsdoc.js')
  var propMetas = JSON.stringify(this.reactPropMetas)
  var data = 'module.exports = ' + propMetas

  fs.outputFileSync(dest, data)
}

ReactDocgenPlugin.prototype.apply = function (compiler) {
  var self = this

  compiler.plugin('make', function (compliation, callback) {
    self.log.debug('updating prop docs')
    self.generateDocs()

    // Only write a new file if mtime changed
    if (!self.reactDocGenCache.equals(self.oldReactDocGenCache) || !hasInit) {
      self.log.debug('writing prop docs')
      self.writeFile()
      hasInit = true
    }

    callback()
  })
}

module.exports = ReactDocgenPlugin
