module.exports = {
  siteMetadata: {
    title: 'Kanvas Tasarım Topluluğu',
    description: 'Kanvas Tasarım Topluluğu Web Sitesi',
    siteUrl: 'https://kanvas.istanbul',
    social: {
      twitter: '@KanvasTT'
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kanvas Tasarım Topluluğu`,
        short_name: `KanvasTT`,
        start_url: `/`,
        background_color: '#085147',
        theme_color: '#085147',
        display: `standalone`
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads'
      }
    },
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
    'gatsby-plugin-netlify',
    'gatsby-plugin-offline'
  ]
}
