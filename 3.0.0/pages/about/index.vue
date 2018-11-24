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
                  <!-- <img src="~assets/images/about.jpg" alt=""> -->
                  <p><a href="/">广州飞步信息科技有限公司</a>，成立于2016年，公司专注于互联网产品开发及计算机网系统工程服务。在信息化时代日渐成熟的同时，我们敢于创新，不断前行。依托珠三角地区庞大、前沿的教育环境，公司致力研发符合相关单位使用的各大中小型系统及便民论坛。其中“三二分段招生系统”于2016年开发并获得相关软件著作权。本系统是完全按照广东省教育厅高职衔接三二分段招生业务而展开的，面向高职院校，对口中职老师及同学使用。</p>
              </article>
            </div>
            <div class="about_con" v-else-if="active == 2">
              <article>
                  诚实守信：诚实，是企业的立足之本，是维护利益双方的基本素养。遵守商业伦理与契约精神是作为企业的唯一标准。守信，坚守法律和道德底线，信守承诺，知行合一。

                <br><br>
                创新发展：识时务者，为俊杰，作为新时代的企业，创新永远为我们的第一生产力。大力培育创新体系，顺时应势，主动变革。人人创新、全员创新

                <br><br>
                以人为本：新一代年轻企业，我们将一直保持这种敢为人先的作风。尊重每一个人的价值，开发每一个人的潜能，提升个人的心灵升华。保持感恩之心，善待每一位同事，倡导积极向上、绿色健康的生活方式。
              </article>
            </div>
            <div class="about_con" v-else-if="active == 3">
              <article>
                <article class="lic">
                  <ul >
                    <li><h3>2016年5月</h3><p>广州飞步信息科技有限公司成立。</p></li>
                  </ul>
                  <ul >
                    <li>
                      <h3>2016年6月</h3>
                      <p>中高职贯通招生管理系统投入研发</p>
                      <p>自主招生系统投入研发</p>
                      <p>资助系统投入研发</p>
                    </li>  
                  </ul>
                  <ul >
                    <li><h3>2016年9月</h3><p>中高职贯通招生管理系统V1.0.0上线</p></li>  
                  </ul>
                  <ul >
                    <li><h3>2016年10月</h3><p>自主招生系统V1.0.0上线</p></li>  
                  </ul>
                  <ul >
                    <li><h3>2017年2月</h3><p>资助系统V1.0.0上线</p></li>  
                  </ul>
                  <ul >
                    <li><h3>2017年3月</h3><p>第一所高职广东农工商职业技术学院使用中高职贯通招生管理系统</p></li>  
                  </ul>
                  <ul >
                    <li><h3>2018年5月</h3><p>中高职贯通招生管理系统V2.0.0重大更新上线</p></li>
                  </ul>
                  <ul >
                    <li><h3>2018年11月</h3><p>中高职贯通招生管理系统按照最新文件更新上线</p></li>
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
      title: '关于飞步科技 | 中高职贯通招生管理系统 | 广州网站开发 | 广州APP开发 | 广州小程序开发'
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
.about_con{padding:80px 0; background-color:#f8f8f8; background-repeat:no-repeat; background-position:50% 50%;font-size: #bbb;line-height: 1.5;font-size:16px;}
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
