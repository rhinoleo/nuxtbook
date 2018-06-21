module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    HOST_URL: process.env.HOST_URL || 'http://127.0.0.1:3000'
  },
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    // proxyHeaders: false
  },
  generate: {
    dir: 'docs',
    routes: [
      '/works/brut',
      '/works/nostopnocity',
      '/works/pompeii2',
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css']
}
