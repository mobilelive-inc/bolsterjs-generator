const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const packageJson = require('../package.json')
const commonConfig = require('./webpack.common')

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/__appName__/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: '__appName__',
      filename: 'remoteEntry.js',
      exposes: {
        './__titleAppName__': './src/bootstrap'
      },
      shared: packageJson.dependencies
    })
  ]
}

module.exports = merge(commonConfig, prodConfig)
