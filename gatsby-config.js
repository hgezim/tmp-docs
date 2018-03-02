const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Gromsby Demo',
  },
  pathPrefix: '/gatsby-starter-grommet',
  plugins: [
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

