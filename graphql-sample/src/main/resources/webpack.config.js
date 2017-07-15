/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './static'
  },
  output: {
    path: path.resolve('static'),
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        query:
        {
          presets:['react']
        }
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ 
      name: 'vendor', 
      filename: 'vendor.bundle.js' 
    }),
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    })
  ]
}

