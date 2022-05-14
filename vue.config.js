const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')// eslint-disable-line

module.exports = {
  chainWebpack (config) {
    config.plugin('monaco').use(new MonacoWebpackPlugin())
  }
}
