var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: {
    index: './app/index',
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
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'app')
    }]
  }
}
