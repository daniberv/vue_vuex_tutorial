var path = require('path')

module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/app.scss";`
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  }
}