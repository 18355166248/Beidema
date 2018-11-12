let path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  baseUrl: './',
  devServer: {
    port: 8080,
    overlay: {
      warnings: false,
      errors: false
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('components', resolve('src/components'))
  }
}