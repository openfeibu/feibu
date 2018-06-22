<template>
    <section class="container">
        <section class="about_focus">
            <article>
              <h2>广州飞步信息科技有限公司</h2>
              <h3>飞步专注为客户提供最有价值的互联网营销设计方案，<br>创意 · 设计 · 影视 · 运营 · 技术 · 服务</h3>
              <!-- <a class="jr" href="/hr.html">加入CLH</a> -->
              </article>
        </section>
        <section class="about_items">
            <div id="about_menu">
              <li :class="{'active':active == 1}" @click="active = 1">简介</li>
              <li :class="{'active':active == 2}" @click="active = 2" >文化</li>
              <li :class="{'active':active == 3}" @click="active = 3" >历程</li>
            </div>
            <div class="about_con" v-if="active == 1">
              <article>
                  <img src="~assets/images/about.jpg" alt="">
                  <p>广州飞步信息科技有限公司，创立于2016年，公司专注于互联网产品开发和计算机网络系统工程服务，以打造校园互联网O2O生活服务平台为核心，同时立足高校学生需求，依托珠三角地区庞大的大学生群体，建立高校论坛，开发各类便民服务软件，让广大学生足不出校了解社会各种动态。对外承接各类网站、微信公众号开发、代运维，通信线路和设备的安装等业务。公司成立以来，受到了社会各界的关注，经过一年多的努力和发展，公司实力越来越强。公司由一群年轻活力的大学生组成，拥有专业的技术能力和高度的创业激情。我们秉承着创新、激情、团结、共享的创业精神，坚持用心服务、满足客户的理念，共同建设一个大学生创业孵化基地。</p>
              </article>
            </div>
            <div class="about_con" v-else-if="active == 2">
                  <img src="~assets/images/wh.jpg" alt="">
            </div>
            <div class="about_con" v-else-if="active == 3">
              <article>
                <article class="lic">
                  <ul >
                    <li><h3>2016</h3><p>广州飞步信息科技有限公司成立。</p></li>
                    
                  </ul>
                  <div class="logobutton animate" @mousedown="logobuttonFun"></div>
                </article>
              </article>
            </div>
		</section>
    
    </section>
</template>

<script>

import api from '~/assets/js/api.js' 


export default {
  components: {},
  data() {
    return {
      active:1
    };
  },
  head () {
    return {
      title: '关于飞步 | 广州网站开发 | 广州APP开发 | 广州小程序开发'
    }
  },
  methods: {
    logobuttonFun(){

    }
  }
};
</script>
<style>


.about_focus{position:relative; width:100%; min-width:1200px;  -webkit-animation:gfadeIn 1s 0.4s both; -moz-animation:gfadeIn 1s 0.4s both; animation:gfadeIn 1s 0.4s both;background: url("~assets/images/about.jpg") no-repeat center/cover; background-attachment: fixed; height: 420px;}
.about_focus img{width:100%; vertical-align:top;}
.about_focus article{position:absolute; top:30%; left:0; width:100%; text-align:center;}
.about_focus article h2{margin-bottom:1.6%; color:#fff; font-size:55px;text-shadow: 0 0 0.2em #a7d4fd, 0 0 0.2em #a7d4fd,0 0 0.2em #a7d4fd}
.about_focus article h3{color:#fff; font-size:20px; line-height:2;}
.about_items{padding: 100px 0 0 0}
#about_menu{text-align:center;}
#about_menu li{display:inline-block; *display:inline; *zoom:1; width:122px; height:56px; margin:0 20px; line-height:56px; color:#858585; cursor:pointer; font-size:18px; -webkit-transition:0.3s; -moz-transition:0.3s; transition:0.3s;}
#about_menu li.active, #about_menu li:hover{background:#f3f3f3; color:#333;}
.about_con{padding:80px 0; background-color:#f3f3f3; background-repeat:no-repeat; background-position:50% 50%;font-size: #bbb;line-height: 1.5;font-size:16px;}
.about_con article{width:1200px; margin:auto; *zoom:1;}
.about_con article:after{content:''; display:block; width:0; height:0; clear:both;}
.about_con img{max-width: 100%;margin:10px 0}
.about_con .lic{position: relative;width: 50%;padding-right: 50%;}
.about_con .lic .logobutton{width: 200px;height: 200px;position: absolute;top: 50%;margin-top:-100px;right:10%;background:#fff url("~assets/images/logo.jpg") no-repeat center/150px auto;border-radius: 50%;box-shadow: 0px 0px 50px #a7d4fd;cursor: pointer;}
.about_con .lic {float:left; width:500px;}
.about_con .lic  li{margin-bottom:30px;}
.about_con .lic  li h3{color:#ccc; font-size:30px;}
.about_con .lic p{color:#333;}
</style>
