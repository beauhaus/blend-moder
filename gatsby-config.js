module.exports = {
  siteMetadata: {
    "title": "SVG experiments",
    "desc": "Using filters & clip-path and masking to simulate carousel transitions of photos & page transitions using GSAP animation library"
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.js`),
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`
      }
    }
  ]
};