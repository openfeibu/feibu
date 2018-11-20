<template>
  <section class="container">
    <div class="banner" ref="banner">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in bannerImg" :key="item.id">
          <a :href="item.url"><img :src="item.image" :alt="item.title"></a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- <div class="slogan">
      <p>中高职贯通招生管理系统</p>
      <span>根据广东省高职衔接二三分段招生业务需求开发的，面向高职院校、对口中职学校、对口中职学校使用</span>
    </div>
    <div class="introBox">
      <div class="introBox-item animate">
        <div class="test">
           <p>统一信息标准</p>
          <span>广东省高考考生信息标准一致</span>
        </div>
       
      </div>
      <div class="introBox-item animate">
        <div class="test">
          <p>招生计划管理</p>
          <span>院校在线添加分类招生计划</span>
        </div>
      </div>
      <div class="introBox-item animate">
        <div class="test">
          <p>数据一键导入</p>
          <span>一键导入考生信息</span>
        </div>
      </div>
      <div class="introBox-item animate">
        <div class="test">
          <p>大数据分析</p>
          <span>大数据图标展示</span>
        </div>
      </div>
    </div> -->

    <div class="case">
       <div class="slogan">
          <p>飞步出品，注重精品</p>
          <span>以策略 设计 技术 服务为核心 为客户持续创造价值</span>
        </div>
      <!-- <div class="works_link">
				      <span>推荐案例</span>
			        <nuxt-link :to="{name:'case',query:{caseTabId:item.id}}"  v-for="(item) in caseTab" :key="item.id" >{{item.name}}</nuxt-link>
			</div> -->
      <div id="works" >			
				<ul >
          <li style="" v-for="(item) in caseList" :key="item.id" >
            <nuxt-link :to="{name:'case-id',params:{id:item.id}}" target= '_blank'  >
                <article>
                    <img :src="item.image" :alt="item.title"/>
                    <!-- <summary>{{item.description}}</summary> -->
                </article>
                <h5>{{item.title}}</h5>
            </nuxt-link>
          </li>
     
        </ul>
      </div>
    </div>
    <div class="bd_top power">
      <div class="slogan">
          <p>设计 创意 影视 运营 技术 <em>是飞步核心能力</em></p>
          <span>拥有国内资深的<a href="#">广州网站建设</a>、 <a href="#">广州网页设计</a>团队,<a href="#">中高职贯通招生管理系统</a>等等成型大型项目。</span>
        </div>
		
			<div class="profession-nr">
			</div>
			<div class="profession_list" id="profession_list">
				
        <dl >
					<dt>小程序 / 微信开发</dt>
					<dd style="opacity: 1; position: relative; left: 0px;">- 企业官网小程序</dd>
					<dd style="opacity: 1; position: relative; left: 0px;">- 微信端开发</dd>
					<dd style="opacity: 1; position: relative; left: 0px;">- 小程序开发</dd>
				</dl>
				<dl >
					<dt>手机网站 / APP开发</dt>
					<dd style="opacity: 1; position: relative; left: 0px;">- 手机网站建设</dd>
					<dd style="opacity: 1; position: relative; left: 0px;">- 微官网建设</dd>
					<dd style="opacity: 1; position: relative; left: 0px;">- 微活动创意设计</dd>
					<dd style="opacity: 1; position: relative; left: 0px;">- APP / iOS应用开发</dd>
				</dl>
        <dl >
					<dt>系统开发</dt>
          <dd style="opacity: 1; position: relative; left: 0px;">- 中高职贯通招生管理系统</dd>
					<dd style="opacity: 1; position: relative; left: 0px;">- 图书馆系统开发</dd>
					<dd style="opacity: 1; position: relative; left: 0px;">- 招生系统开发</dd>
					<dd style="opacity: 1; position: relative; left: 0px;">- 饭堂点餐系统开发</dd>
				</dl>
        

				<dl >
					<dt>SEO</dt>
					<dd style="opacity: 1; position: relative; left: 0px;">- SEO搜索引擎优化</dd>
					<dd style="opacity: 1; position: relative; left: 0px;">- 关键词快速排名上首页</dd>
					<dd style="opacity: 1; position: relative; left: 0px;">- 百度/360/搜狗</dd>
					<dd style="opacity: 1; position: relative; left: 0px;">- 关键词优化</dd>
				</dl>
        <dl >
					<dt>平面设计 / VI识别系统</dt>
					<dd style="opacity: 1; position: relative; left: 0px;">- 品牌LOGO设计</dd>
					<dd style="opacity: 1; position: relative; left: 0px;">- VI标识系统</dd>
					<dd style="opacity: 1; position: relative; left: 0px;">- 宣传物料 / 企业画册</dd>
				</dl>
				<dl >
					<dt>影视摄影</dt>
					<dd style="opacity: 1; position: relative; left: 0px;">- 一分钟宣传视频</dd>
					<dd style="opacity: 1; position: relative; left: 0px;">- 视频剪辑</dd>
					<dd style="opacity: 1; position: relative; left: 0px;">- 人物、场景拍摄</dd>
				</dl>
			</div>
		</div>

			<div id="news" class="clearfix">
        <div class="slogan">
          <p>FB动态 </p>
          <span><a href="/">中高职贯通招生管理系统</a> <a href="/">广州建站公司</a> <a href="/">广州小程序开发</a></span>
        </div>
        <template v-for="(item,index) in newsList" >
          <div class="item"  v-if="index == 0 || index == 1" :key="item.id">
            <nuxt-link :to="{name:'new-id',params:{id:item.id}}" target= '_blank' :title="item.title"  >
              <h5 class="overflow-1">{{item.title}}</h5>
              <span>- {{item.date}} </span>
              <summary>{{item.description}}</summary>
              <div class="pic">
                <img :src="item.image" :alt="item.name">
              </div>
            </nuxt-link>
          </div>
        </template>

				<div class="signing">
					<ul>       
						<li v-for="(item,index) in newsList" :key="item.id" v-if="index > 1">
              <nuxt-link :to="{name:'new-id',params:{id:item.id}}" target= '_blank' :title="item.title"  >
                  {{item.title}}
              </nuxt-link>
							<span>{{item.date}}</span>
						</li>     
					</ul>
				</div>
			</div>

    <section id="client" >
      <div class="slogan">
          <p>合作客户</p>
          <span><a href="/">中高职贯通招生管理系统</a><a href="/">天佑艺术馆</a> <a href="/">华南理工杏子标本馆</a></span>
        </div>
			
			<ul>
				<li v-for="(item) in linkList" :key="item.id" >
          <img :src="item.image" :alt="item.name"  class="animate">
          <p class="animate">{{item.name}}</p>
        </li>
			</ul>
		</section>
  </section>
  
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import api from "~/assets/js/api.js";
import axios from "axios";

export default {
  components: {
    AppLogo
  },
  data() {
    return {
      Btime: null,
      bannerIndex: 0,
      bannerLeft: 0,
      bannerTime: 0,
      caseTab: [],
      bannerImg: [],
      caseList: [],
      linkList: [],
      newsList: [],
      swiperOption: {
        loop: true,
        pagination: ".swiper-pagination",
        paginationClickable: true
      }
    };
  },
  async asyncData(context) {
    // let bannerImg = await api.getAdList();

    let [bannerImg, caseTab, caseList, linkList, newsList] = await Promise.all([
      await api.getAdList(),
      await api.getTab(),
      await api.getCase({
        query: { limit: 8 }
      }),
      await api.getLink(),
      await api.getNews({
        query: {
          cate_slug: "news",
          limit: 12
        }
      })
    ]);
    return {
      bannerImg: bannerImg.data.data,
      caseTab: caseTab.data.data,
      caseList: caseList.data.data,
      newsList: newsList.data.data,
      linkList: linkList.data.data
    };
  },
  methods: {
    clickPage(index) {
      let that = this;
      that.bannerIndex = index;
      that.bannerRun(index);
    },
    bannerRun(index) {
      let that = this;
      that.bannerLeft = -index * 100;
    },
    timingBanner() {
      let that = this;
      that.Btime = setInterval(function() {
        that.bannerTime++;
        if (that.bannerTime > 5) {
          that.bannerTime = 0;
          that.bannerIndex =
            ++that.bannerIndex > that.bannerImg.length - 1
              ? 0
              : that.bannerIndex;
          that.bannerRun(that.bannerIndex);
        }
      }, 1000);
    },
    bannerOver() {
      let that = this;
      that.bannerTime = 0;
      clearInterval(that.Btime);
    },
    bannerOut() {
      let that = this;
      that.timingBanner();
    }
  },
  created() {
    let that = this;
  },
  mounted() {
    let that = this;
    that.timingBanner();
  }
};
</script>

<style lang="less">
.animate {
  -webkit-transition: ease-in-out 0.2s;
  -moz-transition: ease-in-out 0.2s;
  transition: ease-in-out 0.2s;
}
.banner {
  width: 100%;
  height: auto;
  -webkit-animation: gfadeIn 0.6s 0.5s both;
  -moz-animation: gfadeIn 0.6s 0.5s both;
  animation: gfadeIn 0.6s 0.5s both;
}
.banner img {
  width: 100%;
}
.slogan {
  padding: 50px;
  text-align: center;
  -webkit-animation: gdownIn 1s 0.8s both;
  -moz-animation: gdownIn 1s 0.8s both;
  animation: gdownIn 1s 0.8s both;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 50px;
    height: 5px;
    background: #349fff;
    border-radius: 5px;
    top: 80%;
    left: 50%;
    margin-left: -25px;
  }
}
.slogan p {
  font-size: 24px;
  color: #525252;
  line-height: 48px;
}
.slogan span {
  font-size: 16px;
  color: #bbb;
}

.works_link {
  max-width: 1200px;
  height: 72px;
  margin: auto;
  line-height: 72px;
  border-top: 1px dotted #d1d1d1;
  text-align: center;
  font-size: 16px;
  -webkit-animation: gdownIn 1s 1.2s both;
  -moz-animation: gdownIn 1s 1.2s both;
  animation: gdownIn 1s 1.2s both;
}
.works_link span {
  margin: 0 23px;
}
.works_link a {
  margin: 0 23px;
  color: #a4a4a4;
  -webkit-transition: ease-in-out 0.3s;
  -moz-transition: ease-in-out 0.3s;
  transition: ease-in-out 0.3s;
}
.works_link a:hover {
  color: #333;
}
.case{background: #f8f8f8;padding: 30px 0;}
#works {
  width: 100%;
  max-width: 1400px;
  margin: 0  auto; 
  padding: 50px 0;
  overflow: hidden;
}
#works ul {
  width: 100%;
  overflow: hidden;
  float: left;
}
#works ul li {
  float: left;
  width: 23%;
  margin: 10px 1%;
  text-align: center;
  background: #fff;
  box-shadow: 0 0 20px #ddd;
  border-radius: 5px;
  overflow: hidden;
  -webkit-animation: gfadeIn 0.6s 1.5s both;
  -moz-animation: gfadeIn 0.6s 1.5s both;
  animation: gfadeIn 0.6s 1.5s both;

}
#works ul li a {
  display: block;
  background: #fff;
  -webkit-transition: ease-in-out 0.3s;
  -moz-transition: ease-in-out 0.3s;
  transition: ease-in-out 0.3s;
}
#works ul li article {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 62.4%;
  overflow: hidden;
}
#works ul li article img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100.5%;
  height: auto;
  -webkit-transition: ease-in-out 0.3s;
  -moz-transition: ease-in-out 0.3s;
  transition: ease-in-out 0.3s;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
#works ul li article summary {
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: -50px;
  left: 0;
  line-height: 50px;
  color: #a9a9a9;
  background: rgba(0, 0, 0, 0.5);
  background: #666;
  text-align: left;
  text-indent: 20px;
  z-index: 3;
  -webkit-transition: ease-in-out 0.3s;
  -moz-transition: ease-in-out 0.3s;
  transition: ease-in-out 0.3s;
}
#works ul li h5 {
  line-height: 24px;
  font-size: 18px;
  color: #333;
  margin: 16px 0;
  -webkit-transition: ease-in-out 0.3s;
  -moz-transition: ease-in-out 0.3s;
  transition: ease-in-out 0.3s;
}
#works ul li span {
  line-height: 22px;
  font-size: 14px;
  color: #999;
  display: block;
  padding-bottom: 18px;
  -webkit-transition: ease-in-out 0.3s;
  -moz-transition: ease-in-out 0.3s;
  transition: ease-in-out 0.3s;
}
// #works ul li a:hover {
//   background-color: #349fff;
// }
// #works ul li:nth-of-type(1) a:hover {
//   background-color: #349fff;
// }
// #works ul li:nth-of-type(1) a:hover {
//   background-color: #edd8b5;
// }
// #works ul li:nth-of-type(2) a:hover {
//   background-color: #0588d1;
// }
// #works ul li:nth-of-type(3) a:hover {
//   background-color: #09337d;
// }
// #works ul li:nth-of-type(4) a:hover {
//   background-color: #d5414d;
// }
// #works ul li:nth-of-type(5) a:hover {
//   background-color: #f5585a;
// }
// #works ul li:nth-of-type(6) a:hover {
//   background-color: #00aa80;
// }
// #works ul li:nth-of-type(7) a:hover {
//   background-color: #1d1d1d;
// }
// #works ul li:nth-of-type(8) a:hover {
//   background-color: #4cc63f;
// }
// #works ul li:nth-of-type(9) a:hover {
//   background-color: #84d9f5;
// }
// #works ul li:nth-of-type(10) a:hover {
//   background-color: #1f99d8;
// }
// #works ul li:nth-of-type(11) a:hover {
//   background-color: #50b2e1;
// }
// #works ul li:nth-of-type(12) a:hover {
//   background-color: #01a1ef;
// }
// #works ul li a:hover h5,
// #works ul li a:hover span {
//   color: #fff;
// }
#works ul li a:hover article summary {
  bottom: 0;
}
#works ul li a:hover article img {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  transform: scale(1.1);
}
#works ul li a:hover article:before {
  opacity: 1;
  filter: alpha(opacity=100);
  zoom: 1;
}
#works ul li a:hover article:after {
  opacity: 1;
  filter: alpha(opacity=100);
  zoom: 1;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  transform: scale(1);
}

.bd_top {
  margin: 104px auto;
  *padding: 74px 0;
  border-top: 1px dotted #c8c8c8;
  position: relative;
}
#client{
  background: #f8f8f8;padding: 30px 0 80px 0 ;
}
.client {
  position: absolute;
  top: -56px;
  left: 50%;
  width: 320px;
  height: 100px;
  margin-left: -160px;
  background: #fff;
  text-align: center;
}
.client h2,
.client aside {
  margin: 0;
  padding: 0;
}
.client h2 {
  font-size: 36px;
  line-height: 36px;
  margin-bottom: 6px;
  color: #7c7c7c;
}
.client aside {
  font-size: 16px;
  color: #525252;
}
.client span {
  display: block;
  margin-top: 20px;
  color: #bbb;
}

.profession {
  position: absolute;
  top: -20px;
  left: 50%;
  width: 460px;
  height: 60px;
  margin-left: -230px;
  background: #fff;
  text-align: center;
}
.profession h2 {
  margin: 0;
  padding: 0;
  color: #525252;
  font-size: 24px;
}
.profession h2 em {
  color: #bbb;
}
.profession span {
  color: #bbb;
  font-size: 16px;
  display: block;
}
.profession a {
  color: #525252;
  -webkit-transition: ease-in-out 0.3s;
  -moz-transition: ease-in-out 0.3s;
  transition: ease-in-out 0.3s;
}
.profession a:hover {
  color: #000;
}

.profession-nr {
  font-size: 14px;
  color: #999;
  margin-top: 50px;
  text-align: center;
}
.profession-nr p {
  margin-top: 16px;
}
.profession-nr a {
  color: #525252;
  -webkit-transition: ease-in-out 0.3s;
  -moz-transition: ease-in-out 0.3s;
  transition: ease-in-out 0.3s;
}
.profession-nr a:hover {
  color: #000;
}

.profession_list {
  max-width: 1200px;
  margin: 60px auto 0;
  overflow: hidden;
}
.profession_list dl {
  float: left;
  padding-top: 170px;
  width: 28%;
  margin: 0 2.5% 50px 2.5%;
  height: 180px;
  box-shadow: 0 0 0px #ddd;
  border-radius: 5px;
}
.profession_list dt {
  color: #333;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
}
.profession_list dd {
  color: #999;
  font-size: 14px;
  line-height: 25px;
  padding-left: 120px;
}
.profession_list dl:nth-of-type(1) {
  background:#fff url("~assets/images/home_icon4.png") no-repeat center 25px/auto
    120px;
}
.profession_list dl:nth-of-type(2) {
  background:#fff url("~assets/images/home_icon2.png") no-repeat center 25px/auto
    120px;
}
.profession_list dl:nth-of-type(3) {
  background:#fff url("~assets/images/home_icon3.png") no-repeat center 25px/auto
    120px;  
}
.profession_list dl:nth-of-type(4) {
  background:#fff url("~assets/images/home_icon5.png") no-repeat center 25px/auto
    120px;
}
.profession_list dl:nth-of-type(5) {
  background:#fff url("~assets/images/home_icon1.png") no-repeat center 25px/auto
    100px;
}
.profession_list dl:nth-of-type(6) {
  background:#fff url("~assets/images/home_icon6.png") no-repeat center 25px/auto
    100px;
}

#client ul {
  max-width: 1195px;
  margin: 60px auto 0 auto;
  overflow: hidden;
  border-top: 1px solid #e5e5e5;
  border-left: 1px solid #e5e5e5;
}
#client ul li {
  -webkit-transition: ease-in-out 0.3s;
  -moz-transition: ease-in-out 0.3s;
  transition: ease-in-out 0.3s;
  float: left;
  width: 238px;
  height: 178px;
  line-height: 178px;
  border-right: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  background: #fff;
  text-align: center;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
#client ul li img {
  height: 120px;
}
#client ul li p {
  text-align: center;
  width: 100%;
  line-height: 42px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  color: #bbb;
  font-size: 14px;
  opacity: 0;
  bottom: -50%;
}
#client ul li:hover p {
  opacity: 1;
  bottom: 0;
}
#client ul li:hover img {
  height: 100px;
}

#news {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 30px 0 80px 0;
}
#news .slogan{margin-bottom:50px}
#news .client a {
  color: #525252;
  font-size: 14px;
  margin: 0 5px;
}
#news .item {
  float: left;
  width: 375px;
  height: auto;
  margin-right: 15px;
  background: #f8f8f8;
  position: relative;
  box-shadow: 0 10px 30px #ddd;

}
#news .item h3,
#news .signing h3 {
  margin: 32px 0 30px;
  font-size: 18px;
  line-height: 18px;
}
#news .item h3 a,
#news .item h3 a:hover,
#news .signing h3 a,
#news .signing h3 a:hover {
  color: #999;
}
#news .item h5 {
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 23px;
}
#news .item a {
  color: #000;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  transition: 0.3s;
  display: block;
}
#news .item a:hover {
  color: #349fff;
}
#news .item span {
  display: block;
  font-size: 12px;
  line-height: 12px;
  margin: 10px 0 25px;
  color: #999;
}
#news .item summary {
  height: 100px;
  color: #999;
  overflow: hidden;
}
#news .item h3,
#news .item h5,
#news .item span,
#news .item summary {
  padding: 0 18px;
}
#news .pic {
  width: 100%;
  height: auto;
  overflow: hidden;
}
#news .pic img {
  width: 100%;
}

#news .signing {
  float: right;
  width: 360px;
  height: 430px;
  padding: 0 30px;
  background: #f8f8f8;
  overflow: hidden;
  box-shadow: 0 0px 20px #ddd;
}
#news .signing ul {
  width: 100%;
}
#news .signing ul li {
  height: 42px;
  line-height: 42px;
  font-size: 16px;
  position: relative;
}
#news .signing ul li a {
  display: block;
  height: 42px;
  width: 240px;
  color: #666;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  transition: 0.3s;
}
#news .signing ul li a:hover {
  color: #349fff;
  -webkit-transform: translateX(10px);
  -moz-transform: translateX(10px);
  transform: translateX(10px);
}
#news .signing ul li span {
  position: absolute;
  top: 0;
  right: 0;
  color: #b4b4b4;
  font-size: 14px;
}

.swiper-pagination-bullet {
  width: 30px;
  height: 5px;
  border-radius: 5px;
}
.swiper-pagination-bullet-active {
  background: #349fff;
}
.swiper-slide{
  z-index: 90
}
.swiper-slide-active{
  z-index: 999;
}
.introBox {
  height: 700px;
  background: url(~assets/images/32.jpg) no-repeat center/auto 100%;
  .introBox-item {
    width: 25%;
    float: left;
    background: rgba(52, 159, 255, 0.1) url(~assets/images/more.png) no-repeat center 600px;
    background-size:50px auto;
    height: 100%;
    position: relative;
    color: #333;
    cursor: pointer;
    &:before {
      content: "";
      position: absolute;
      width: 1px;
      height: 100%;
      background: #fff;
      left: 0;
      top: 0;
    }
    &:after {
      content: "";
      position: absolute;
      width: 1px;
      height: 100%;
      background: #fff;
      right: 0;
      top: 0;
    }
    &:hover {
      background: rgba(52, 159, 255, 0.8) url(~assets/images/more2.png) no-repeat center 600px;
      background-size:50px auto;

      .test {
        bottom: 30%;

        span {
          color: #fff;
         display: block;
        }
        p {
          color: #fff;
        }
      }
    }
    .test {
      position: absolute;
      bottom: 20%;
      width: 100%;
      .animate;
    }
    p {
      font-size: 28px;
      text-align: center;
      margin-top: 150px;
    }
    span {
      font-size: 18px;
      text-align: center;
      margin-top: 20px;
      display: none;
      
    }
  }
}
.power{
  margin:0;
  min-height: 600px;
  padding: 30px 0;
  background: url(~assets/images/bg1.jpg) no-repeat center/cover;
  .slogan p{
    color: #fff;
    line-height: 32px;
  }
   .slogan span{
    color: #ddd
  }
   .slogan span a{
    color: #ddd
  } 
}

@media screen and (max-width: 1080px) {
  .slogan{
    padding: 25px 25px 40px 25px;
    p{
      font-size: 22px;
    }
    span{
      font-size: 16px;
    }
  }
  .introBox {
    height: 480px;
    background-size:auto 100% ; 
    .introBox-item {
      width: 100%;
      height: 25%;
      background: rgba(52, 159, 255, 0.5) url(~assets/images/more2.png) no-repeat 95% center/30px auto;
      &:before {
        width: 100%;height: 1px;top: 0;
      }
       &:after {
        width: 100%;height: 1px;bottom: 0;
      }
      &:hover{
        background: rgba(52, 159, 255, 0.5) url(~assets/images/more2.png) no-repeat 95% center;
        background-size:30px auto;
        .test{
          left: 50px;
        
        }
      }
      p{
        font-size: 20px;margin: 0;text-align: left;color: #fff;
      }
      span{
        font-size: 14px;margin: 0;text-align: left;color: #fff;
        display: block;
      }
      .test{
        bottom: 30%;
        text-align: left;
        left: 25px;
          width: auto
      }
    }
  }
  .swiper-container{
    height: 400px;
    .swiper-slide{overflow: hidden;}
    img{
      position: absolute;;
      height: 100%;width: auto;left: 50%;margin-left: -426.5px; 
    }
  }

  #works ul li{
    width: 47%;
    margin: 0 1.5% 20px 1.5%
  }
  #works ul li h5{
    font-size: 14px;
    height: 24px;overflow: hidden;;
  }
  .profession{
    width: 100%;
    left: 0;margin-left: 0;
    h2{
      font-size: 20px
    }
  }
 
  .profession-nr{
    padding:  0 25px;
  }
  .power{
    padding: 0 0 30px 0
  }
  .profession_list{
    margin-top: 50px
  }
  .profession_list dl{
    width: 47%;
    height: 140px;
    margin: 0 1.5% 20px 1.5%;

  }
  .profession_list dl{
    background-size:auto 80px !important;
    padding-top: 120px
  }
  .profession_list dt{
    font-size: 16px;
    margin-bottom: 10px
  }
  .profession_list dd{
    padding-left: 20px;
    line-height: 24px;
  }
  #news{
    padding: 0 25px;
    margin: 0;
    .item{
      width: 100%;
      margin-bottom: 25px;
    }
    .signing{
      height: auto;;
      width: 94%;
      padding: 10px 3%
    }
  }
  #client{
    padding:20px 0 50px 0; 
  }
  #client ul{
    margin-top: 30px
  }
  #client ul li{
    width: 49.5%;
    height: 120px;line-height: 120px;
    img{height: 80px;margin: 20px auto;}
  }

  .case{
    padding: 0
  }
  
}
</style>
