var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './js/main.es6.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
    ]
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
  watch: true,
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
