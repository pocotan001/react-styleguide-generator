const bunyan = require('bunyan')

module.exports = (section, opts = {}) => bunyan.createLogger({
  name: 'rsg' + '/' + section,
  stream: process.stdout,
  level: opts.debug ? 'debug' : 'error',
  serializers: bunyan.stdSerializers
})
