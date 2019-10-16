module.exports = {
  siteMetadata: {
    title: 'Kanvas Tasarım Topluluğu',
    description: 'Kanvas Tasarım Topluluğu Web Sitesi',
    siteUrl: 'https://kanvas.istanbul',
    social: {
      twitter: '@KanvasTT'
    }
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2048
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static'
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://istanbul.us16.list-manage.com/subscribe/post?u=82e82fcec4c227830ba2687a8&amp;id=76e7fce7a7'
      }
    },
    'gatsby-plugin-netlify'
  ]
}
