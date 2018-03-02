const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Zip Recipes Knowledge Base',
  },
  pathPrefix: '/docs',
  plugins: [
    `gatsby-link`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`],
      }
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `src`,
            path: `${__dirname}/src/`,
        },
    },
    {
      resolve: 'custom-sass-loader',
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ['last 2 versions'],
          })
        ]
      }
    }
  ],
}

