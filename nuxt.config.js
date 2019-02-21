import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'
import path from 'path'

export default {
  srcDir: 'src/web/',
  vendor: ['prismjs'],
  css: ['tachyons', '@/assets/css/custom.css'],
  modules: ['@nuxtjs/apollo'],
  build: {
    extractCSS: true,
    extend (config, { isDev, isClient }) {
      if (!isDev) {
        // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
        // for more information about purgecss.
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './src/web/pages/**/*.vue'),
              path.join(__dirname, './src/web/layouts/**/*.vue'),
              path.join(__dirname, './src/web/components/**/*.vue')
            ]),
            whitelist: ['html', 'body']
          })
        )
      }
    }
  },
  generate: {
    dir: 'dist/web',
    interval: '100'
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:7000'
      }
    }
  }
}
