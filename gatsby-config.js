// Require .env.development or .env.production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Run Through History`,
    description: `Run through the ages, earning rewards as you uncover history's milestones.`,
    author: `Kellen Mace`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Run Through History`,
        short_name: `Run Thru History`,
        start_url: `/`,
        background_color: `#E8E6E1`,
        theme_color: `#E8E6E1`,
        display: `standalone`,
        icon: `src/images/app-icon.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        custom: {
          families: ["beryliumregular"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: process.env.GATSBY_WPGRAPHQL_URL,
        // `runs` is excluded here since the `fetching nodes` part of the
        // Gatsby build process fails if there are a lot of posts.
        excludeFieldNames: [
          `runs`,
          `comments`,
          `categories`,
          `menus`,
          `menuItems`,
          `pages`,
          `postFormats`,
          `posts`,
          `tags`,
        ],
      },
    },
  ],
}
