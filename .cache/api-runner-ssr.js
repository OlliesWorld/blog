var plugins = [{
      plugin: require('/Users/horse/Desktop/sites/gatsby/blog-ollie/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Dustin Schau's Blog","description":"The blog of the developer, Dustin Schau","short_name":"DSchau Blog","background_color":"white","theme_color":"#002635","orientation":"portrait","display":"minimal-ui","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":null},
    },{
      plugin: require('/Users/horse/Desktop/sites/gatsby/blog-ollie/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/horse/Desktop/sites/gatsby/blog-ollie/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/horse/Desktop/sites/gatsby/blog-ollie/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[],"component":"/Users/horse/Desktop/sites/gatsby/blog-ollie/node_modules/@dschau/gatsby-theme-blog/src/layouts/index.js"},
    },{
      plugin: require('/Users/horse/Desktop/sites/gatsby/blog-ollie/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/horse/Desktop/sites/gatsby/blog-ollie/node_modules/gatsby-plugin-typography/gatsby-ssr'),
      options: {"plugins":[],"omitGoogleFont":true,"pathToConfigModule":"node_modules/@dschau/gatsby-theme-blog/src/utils/typography.js"},
    },{
      plugin: require('/Users/horse/Desktop/sites/gatsby/blog-ollie/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-102928446-2"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
