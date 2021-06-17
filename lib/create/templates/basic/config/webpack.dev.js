const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:__port__/'
  },
  devServer: {
    port: __port__,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: '__appName__',
      filename: 'remoteEntry.js',
      exposes: {
        './experience': './src/bootstrap'
      },
      shared: packageJson.dependencies
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}

module.exports = merge(commonConfig, devConfig)
