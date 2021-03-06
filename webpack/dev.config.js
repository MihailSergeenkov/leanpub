const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    bundle: './src/index.js',
  },
  output: {
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.join(process.cwd(), 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      { 
        test: /\.js/, 
        use: 'babel-loader'
      },
      { 
        test: /\.css/, 
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[local]--[hash:base64:5]',
              }
            }
          },
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      base: '/',
    }),
    new MiniCssExtractPlugin(),
  ],
  performance: { hints: false }
};
