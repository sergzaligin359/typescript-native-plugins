const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
        patterns: [
            { from: path.resolve(__dirname, 'src/assets/favicon.ico'), to: path.resolve(__dirname, 'dist') },
            { from: path.resolve(__dirname, 'src/assets/images'), to: path.resolve(__dirname, 'dist/assets/images') }
        ],
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true
      }
    }),
  ],
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: ['ts-loader'],
            exclude: /node_modules/,
        },
    ],
  },

}
