var path = require('path')
var express = require('express')
var webpack = require('webpack')

module.exports = function (webpackConfig, port, log, distDir) {
  var app = express()
  var compiler = webpack(webpackConfig)

  app.use('/files', express.static(path.join(distDir, 'files')))

  app.use(require('webpack-dev-middleware')(compiler, {
    colors: true,
    publicPath: '/src/'
  }))

  app.use(require('webpack-hot-middleware')(compiler))

  app.get('*', function (req, res) {
    res.sendFile(path.join(distDir, 'index.html'))
  })

  app.listen(port, '0.0.0.0', function (err) {
    if (err) {
      log.error(err)
      return
    }

    log.info('Listening at http://localhost:' + port)
  })
}
