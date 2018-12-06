module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '中高职贯通招生管理系统 | 三二分段招生管理系统 | 广州网站开发 | 广州APP开发 | 小程序开发 - 飞步科技一站式服务',
    meta: [
      { charset: 'utf-8' },
      { name: 'keywords', content: '中高职贯通招生管理系统,三二分段招生管理系统,三二分段,广州微信小程序开发,小程序开发,广州网站开发公司,广州APP开发公司,广州微信推广,广州SEO推广,广州影视摄影,广州网站设计,广州开发微信小程序,飞步科技' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '广州飞步信息科技有限公司 -中高职贯通招生管理系统为飞步专研适用于全国高职院校系统，广州飞步信息科技有限公司拥有国内顶级的网站建设, 小程序开发,网页设计,H5网站设计,微信运营,APP设计,小程序开发与开发团队,设计服务囊括品牌网站建设,营销型网站设计, 营销型H5网站设计和创意执行 , 深度追踪最新设计趋势,为客户量身定制品牌运营服务。' },
      { hid: '360', name: '360-site-verification', content: '2c00f4c17642005e5b9dd35773aaa7e2' }
    ],
    script: [
      { src: 'http://api.map.baidu.com/api?v=2.0&ak=5jCnjnCesElvVDufg6yjGMrlYimVXk5f' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  css:['~assets/css/main.css'],
  
  plugins:[
    { src: "~/plugins/vue-swiper.js", ssr: false },
  ],
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
