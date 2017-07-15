/* eslint-disable */
const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('static'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

