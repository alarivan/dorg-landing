/* eslint-disable */
module.exports = {
  siteMetadata: {
    title: `dOrg`,
    description: `dOrg is a self-organized developer community that wills software into
          existence.`,
    author: `@dOrg_tech`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cases`,
        path: `${__dirname}/src/content/cases`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content/pages`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dOrg`,
        short_name: `dOrg`,
        start_url: `/`,
        background_color: `#2c4b56`,
        theme_color: `#4bd2c6`,
        display: `standalone`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-mdx`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
