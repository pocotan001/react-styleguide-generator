const bunyan = require('bunyan')

module.exports = function (section_name, opts) {
  opts = opts || {}

  var logOpts = {
    name: 'rsg' + '/' + section_name,
    stream: process.stdout,
    level: 'error',
    serializers: bunyan.stdSerializers
  }

  if (opts.debug) {
    logOpts.level = 'debug'
  }

  return bunyan.createLogger(logOpts)
}
