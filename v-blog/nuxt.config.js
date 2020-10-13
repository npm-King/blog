
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '欢迎访问我的个人主页 - cc-zero',
    titleTemplate: '%s - cc-zero的个人主页',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'description', name: 'description', content: 'cc-zero个人博客，cc-zero的生活随笔，cc-zero的前端学习' },
      { hid: 'keywords', name: 'keywords', content: 'cc-zero，vue，nuxt，koa，mysql，blog，首页，JavaScript，js，css，html，web前端，前端开发' },
      { hid: 'author', name: 'author', content: 'cc-zero' },
      { hid: 'renderer', name: 'renderer', content: 'webkit|ie-comp|ie-stand' },
      { hid: 'http-equiv', 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
   ** router 
   */
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    { src: '~plugins/mock',ssr: true }
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
    '@nuxtjs/axios'
  ],
  axios: {
    prefix: '/api',
    proxy: true,
    credentials: true
  },
  proxy: {
    '/api/': {
      target: 'http://127.0.0.1/',
      pathRewrite: {
        '^/api/': ''
      },
      changeOrigin: true
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    vendor: ['axios'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
