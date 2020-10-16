const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const dotenv = require('dotenv').config({ path: path.join(__dirname, '.env') });

const javascriptRules = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
};

const htmlRules = {
  test: /\.html$/,
  use: [{ loader: 'html-loader' }],
};

const fileRules = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  use: [
    {
      loader: 'file-loader',
    },
  ],
};

const cssRules = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const rules = [javascriptRules, htmlRules, fileRules, cssRules];

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },
  module: { rules },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new ErrorOverlayPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed || {}),
    }),
  ],
};
