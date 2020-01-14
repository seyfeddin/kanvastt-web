const withCSS = require('@zeit/next-css')
const withOffline = require('next-offline')

const config = {
  env: {
    API_URL: process.env.NEXT_EXPORT
      ? 'https://kanvastt-cms.herokuapp.com'
      : 'http://localhost:1337'
  },
  workboxOpts: {
    swDest: process.env.NEXT_EXPORT
      ? 'service-worker.js'
      : 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200
          }
        }
      }
    ]
  },
  experimental: {
    async rewrites() {
      return [
        {
          source: '/service-worker.js',
          destination: '/_next/static/service-worker.js'
        }
      ]
    }
  },
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/topluluk-politikasi': { page: '/topluluk-politikasi' }
    }
  }
}

module.exports = withCSS(withOffline(config))
