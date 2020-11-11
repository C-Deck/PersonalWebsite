require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteName: `Clint Decker Portfolio`,
    exampleUrl: `https://www.clintjdecker.com`,
  },
  plugins: [
    // `gatsby-plugin-typescript` is automatically included in gatsby
    // You only need to explicitly define it here if you need to configure
    // specific options in it
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `bearer ${process.env.GATSBY_PORTFOLIO_GITHUB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `./static/favicon/favicon-512.png`,
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
}
