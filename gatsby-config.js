module.exports = {
  siteMetadata: {
    title: 'Clayton Homes Consumer Affairs',
  },
  pathPrefix: '/pages/have-it-made/',
  plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sass',
      {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
              trackingId: '1040796449',
              head: true,
          }
      },
  ]
};
