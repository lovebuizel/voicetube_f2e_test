
export default {
  mode: 'universal',
  router: {
    base: '/voicetube_f2e_test/'
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'zh-Hant-TW',
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      // facebook
      { property: 'og:title', content: process.env.npm_package_name || '' },
      { property: 'og:url', content: '' },
      { property: 'og:description', content: process.env.npm_package_name || '' },
      { property: 'og:image', content: '' },
      { property: 'og:site_name', content: process.env.npm_package_name || '' },
      { property: 'fb:app_id', content: '' },
      { property: 'og:type', content: 'website' },
      // google
      { name: 'application-name', content: process.env.npm_package_name || '' },
      { name: 'description', content: process.env.npm_package_name || '' },
      { name: 'copyright', content: process.env.npm_package_name || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', content: '' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ],
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        innerHTML: `{
          "@context": "http://schema.org",
          "@type": "Article",
          "url": "",
          "headline": "${process.env.npm_package_name || ''}",
          "datePublished": "2020-02-19T09:00:00+08:00",
          "dateModified":"2020-02-19T09:00:00+08:00",
          "description": "${process.env.npm_package_name || ''}",
          "keywords": "${process.env.npm_package_name || ''}",
          "articleSection":"${process.env.npm_package_name || ''}",
          "author": {
                "@type": "",
                "name": ""
          },
          "publisher": {
              "@type": "",
              "name": "",
              "logo": {
                  "@type": "ImageObject",
                    "url": ""
                },
          "sameAs": []},
          "image": {
                "@type": "ImageObject",
                "url": "",
                "name": ""
          },
          "mainEntityOfPage": ""
        }`,
        type: 'application/ld+json'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/material_icons.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
