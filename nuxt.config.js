const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

module.exports = {
  srcDir: 'src/web/',
  vendor: ['prismjs'],
  css: ['tachyons'],
  modules: ['@nuxtjs/apollo'],
  build: {
    extend (config, { isDev, isClient }) {
      if (!isDev) {
        // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
        // for more information about purgecss.
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './pages /**/*.vue'),
              path.join(__dirname, './layouts /**/*.vue'),
              path.join(__dirname, './components /**/*.vue')
            ]),
            whitelist: ['html', 'body']
          })
        )
      }
    }
  },
  generate: {
    dir: 'dist/web'
  },
  apollo: {
    tokenName: 'id_token',
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:7000'
      }
    }
  }
}
