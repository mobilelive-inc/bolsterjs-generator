const { merge } = require('webpack-merge')
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
      remotes: {
      },
      shared: packageJson.dependencies
    })
  ]
}

module.exports = merge(commonConfig, devConfig)
