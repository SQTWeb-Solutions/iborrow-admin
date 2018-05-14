const webpack = require('webpack')

module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 9010,
    https: false,
    hotOnly: false,
    overlay: true,
    useLocalIp: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        ws: true,
        pathRewrite: {'^/api': ''},
        changeOrigin: true
      }
    },
    before: app => {
      // app is an express instance
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  },
  compiler: true,
  // CSS related options
  css: {
    // extract CSS in components into a single CSS file (only in production)
    // can also be an object of options to pass to extract-text-webpack-plugin
    extract: true,
    // enable CSS source maps?
    sourceMap: true
  }

}
