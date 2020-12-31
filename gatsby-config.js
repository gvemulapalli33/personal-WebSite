/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Geetha Vemulapalli`,
    author: `Geetha Vemulapalli`,
    firstName: `Geetha`,
    lastName: `Vemulapalli`,
    description: `Geetha Vemulapalli's personal site`,
    occupation: `Software Engineer`,
    keywords: [`Geetha`, `Vemulapalli`, `Personal`, `website`, `Resume`, `Projects`, `Work`],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: true,
    designations: [],
    readingList: [],
    showsList: [],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Geetha's Personal Site`,
        short_name: `Geetha`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          // Available options and their defaults:
          base64Width: 20,
          forceBase64Format: ``, // valid formats: png,jpg,webp
          useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
          stripMetadata: true,
          defaultQuality: 50,
          failOnError: true,
        },
      }
  ],
}
