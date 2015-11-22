var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: {
    index: './app/index',
    hmr: 'webpack-hot-middleware/client',
    vendor: [
      'react',
      'react-dom',
      'page',
      'react-bootstrap',
      'highlight.js',
      'marked'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor','vendor.js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'app')
    }]
  }
}