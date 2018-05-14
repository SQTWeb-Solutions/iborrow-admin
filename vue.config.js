const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 9020,
    https: false,
    hotOnly: false,
    overlay: true,
    useLocalIp: true,
    proxy: {
      '/api': {
        target: 'http://loaclhost:3000',
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
      }),
      new ExtractTextPlugin({ filename: 'common.[chunkhash].css' })
    ]
  }
}
