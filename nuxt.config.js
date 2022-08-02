export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'testovoe',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content'

  ],
  serverMiddleware: [
    {
      path: "/api",
      handler: (req, res, next) => {
        const url = require("url");
        req.query = url.parse(req.url, true).query;
        req.params = { ...req.query, ...req.body };
        next();
      }
    },
    { path: "/api", handler: "~/serverMiddleware/api-server.js" }
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }

}
