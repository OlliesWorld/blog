process.noDeprecation = true; // https://github.com/webpack/webpack/issues/6568

const siteUrl =
  process.env.URL || process.env.DEPLOY_URL || "https://olliesblog.netlify.app";

module.exports = {
  plugins: [
    {
      resolve: "@dschau/gatsby-theme-blog",
      options: {
        root: __dirname
      }
    },
    {
      resolve: `gatsby-plugin-netlify-cms`
    }
  ],
  siteMetadata: {
    author: "Blogs by Ollie",
    description: "The blog of the Adventures of Ollie and Roni",
    siteUrl,
    social: {
      twitter: "blueskyroni"
    }
  }
};
