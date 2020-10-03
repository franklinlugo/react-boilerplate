const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

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

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const isDevelopment = !isProduction;

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
    },
    module: { rules },
    devtool: 'cheap-module-source-map',
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html',
      }),
      new ErrorOverlayPlugin(),
    ],
  };
};
