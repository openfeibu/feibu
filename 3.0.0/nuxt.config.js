module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '广州网站开发 | 广州APP开发 | 广州小程序开发 - 飞步科技一站式服务',
    meta: [
      { charset: 'utf-8' },
      { name: 'keywords', content: '广州网站开发,广州APP开发，广州小程序开发，广州微信运营，广州影视摄影，广州网站设计,广州网页设计,广州高端网站建设，广州网站建设公司,小程序开发' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '广州网站开发 - 广州飞步信息科技有限公司拥有国内顶级的网站建设, 网页设计，H5网站设计,微信运营,APP设计,小程序开发与开发团队,设计服务囊括品牌网站建设,营销型网站设计, 营销型H5网站设计和创意执行 , 深度追踪最新设计趋势,为客户量身定制品牌运营服务。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  css:['~assets/css/main.css'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#349fff' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }

}
