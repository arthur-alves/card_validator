var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry:  {
      card_result : './jsx/card_result.jsx',
  },
  output: {
    path: __dirname + '/js',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', ]
        }
      }
    ],
  },
};