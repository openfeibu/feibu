<template>
	<div>
		<header id="header" :class="{'headerh':headerClass}">
			<h1><a href="/" id="logo"><img src="~assets/images/logo2.png" alt="中高职贯通招生管理系统-广州飞步科技信息科技有限公司"></a></h1>
			<nav id="nav">
				<div class="nav-item"  >
					<nuxt-link :to="{name:'index'}"   exact>首页</nuxt-link>
				</div>
				<div class="nav-item"  @mouseover="navOver(1)" @mouseout="navOut()">
					我们的产品
					<div class="nav-box animate"  :class="{'nav-box-active':navItem===1}"  >
						<div class="nav-box-item">
							
							<nuxt-link :to="{name:'university'}"   ><img class="animate" src="~assets/images/32.png" alt="中高职贯通招生管理系统">中高职贯通招生管理系统</nuxt-link>
						</div>
						<div class="nav-box-item">
							
							<nuxt-link :to="{name:'website'}"   ><img class="animate" src="~assets/images/hangye.png" alt="微官网小程序">微官网小程序</nuxt-link>
						</div>
						
					</div>
				</div>
				<div class="nav-item">
					<nuxt-link :to="{name:'case'}"   >案例中心</nuxt-link>
				</div>
				<div class="nav-item">
					<nuxt-link :to="{name:'new'}"   >最新动态</nuxt-link>	
				</div>
				<div class="nav-item">
					<nuxt-link :to="{name:'about'}"  >关于飞步</nuxt-link>
				</div>
				<div class="nav-item">
					<nuxt-link :to="{name:'contact'}"  > 联系我们</nuxt-link>
				</div>
			</nav>
			<div class="tell">13794420683</div>
		</header>
		<div class="mheader" :class="{'mheaderh':headerClass}">
			<div class="logo"><a href="/" ><img src="~assets/images/logo2.png" alt="中高职贯通招生管理系统-广州飞步科技信息科技有限公司"></a></div>
			<div class="menu" @click='showMenu()'>
			</div>
		</div>
		<div class="nav" :style="{height:navHeight}">
                <div class="nav-header">
                    <div class="logo"><a href=""><img src="~assets/images/logo2.png" alt=""></a></div>
                    <div class="close" @click='hideMenu()'></div>
                </div> 
                <div class="nav-list">
                    <div class="nav-item">
                        <a href="/"   exact>首页</a>
                    </div>
                    <div class="nav-item ">
                        <a class="moreAction active">我们的产品</a>
                        <ul style="display: block;">
                            <li><a href="/university"   >中高职贯通招生管理系统</a></li>
                            <!-- <li><a :to="{name:'website'}"   >中高职贯通招生管理系统</a></li> -->
                        </ul>
                    </div>
                    <div class="nav-item">
                        <a  href="/case"    >案例中心</a>
                    </div>
                    <div class="nav-item">
                        <a  href="/new"  >最新动态</a>
                    </div>
                    <div class="nav-item">
                        <a href="/about" >关于飞步</a>
                    </div>
                    <div class="nav-item">
                       <a href="/contact" > 联系我们</a>
                    </div>
                </div>
        </div>
	</div>
</template>
<script>
import api from "~/assets/js/api.js";
export default {
  components: {},
  data() {
    return {
      headerClass: false,
      headerActive: false,
	  navItem: 0,
	  navHeight:20
    };
  },
  methods: {
    navOver(i) {
      let that = this;
      that.navItem = i;
    },
    navOut(e) {
      let that = this;
      that.navItem = 0;
    },
    headerScrool(e) {
      window.addEventListener("scroll", this.handleScroll);
    },
    handleScroll() {
      let that = this;
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 50) {
        that.headerClass = true;
      } else {
        that.headerClass = false;
      }
	},
	showMenu(){
		var that = this;
		that.navHeight = '100%';
	},
	hideMenu(){
		var that = this;
		that.navHeight = '0';
	}
  },

  created() {},
  mounted() {
    let that = this;
    that.window = window;
    that.headerScrool();
    //  let caseReg = /^\/case\/((?:[^\/]+?))(?:\/(?=$))?$/i

    console.log(that.$route.fullPath);
  }
};
</script>
<style>
#header {
  width: 100%;
  height: 99px;
  position: fixed;
  top: 0;
  left: 0;
  background: none;
  z-index: 10;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  transition: 0.3s;
  -webkit-animation: gupIn 1s 0.1s both;
  -moz-animation: gupIn 1s 0.1s both;
  animation: gupIn 1s 0.1s both;
}
.headerh {
  height: 66px !important;
  background: rgba(52, 159, 255, 0.8) !important;
}
.mheaderh{
   background: rgba(52, 159, 255, 0.8) !important;
}
#header.headerh #logo,
#header.headerh #nav .nav-item,
#header.headerh .tell {
  height: 66px;
  line-height: 66px;
}
#header.headerh .nav-box {
  top: 66px !important;
}
#logo {
  display: block;
  position: absolute;
  top: 0;
  left: 30px;
  height: 99px;
  line-height: 99px;
  opacity: 1;
  overflow: hidden;
  filter: alpha(opacity=60);
  -webkit-transition: 0.3s, opacity 0.6s;
  -moz-transition: 0.3s, opacity 0.6s;
  transition: 0.3s, opacity 0.6s;
}
#logo img {
  vertical-align: middle;
  height: 40px;
}
#logo:hover {
  opacity: 0.8;
}
#nav {
  width: 750px;
  margin: auto;
  text-align: center;
  position: relative;
}
#nav .nav-item {
  display: inline-block;
  height: 99px;
  margin: 0 25px;
  line-height: 99px;
  text-align: center;
  font-size: 16px;
  -webkit-transition: 0.3s, color 0.5s;
  -moz-transition: 0.3s, color 0.5s;
  transition: 0.3s, color 0.5s;
  color: #fff;
  vertical-align: top;
  position: relative;
  cursor: pointer;
}
#nav .nav-item a{
  color: #fff;
}
#nav .nav-item .nav-box {
  position: fixed;
  width: 100%;
  height: 0;
  background: #f8f8f8;
  top: 100px;
  left: 0;
  overflow: hidden;
}
#nav .nav-item .nav-box-item {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  margin: 0 30px;
  overflow: hidden;
}
#nav .nav-item .nav-box-item  a{
  color: #242a37
}
#nav .nav-item .nav-box-item img {
  height: 60px;
  margin: 20px auto;
  display: block;
}
#nav .nav-item .nav-box-item:hover img {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  transform: scale(1.1);
}
#nav .nav-item .nav-box-item a {
  line-height: 30px;
  display: block;
}
#nav .nav-item .nav-box.nav-box-active {
  height: 150px;
}
#nav a:hover {
  opacity: 0.8;
}
#header .tell {
  position: absolute;
  top: 0;
  right: 25px;
  height: 99px;
  line-height: 99px;
  font-size: 18px;
  font-weight: bold;
  background: url(~assets/images/tel_bg.png) no-repeat 18px center/30px auto;
  padding-left: 60px;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  transition: 0.3s;
  color: #fff;
}
#nav_line {
  width: 100px;
  height: 2px;
  background: #349fff;
  position: absolute;
  bottom: -1px;
  left: 0;
  opacity: 1;
  filter: alpha(opacity=1);
  -webkit-transition: 0.3s, opacity 0.6s;
  -moz-transition: 0.3s, opacity 0.6s;
  transition: 0.3s, opacity 0.6s;
}
#nav .nuxt-link-active {
  color: #349fff;
  font-weight: bold;
  border-bottom: 2px solid #fff;
  padding-bottom: 5px;
}

.mheader {
  height: 50px;
  background: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 997;
  display: none;
}
.mheader .menu {
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0;
  top: 0;
  background: url(~assets/images/menu.png) no-repeat center/25px auto;
}

.mheader .logo {
  width: auto;
  height: 30px;
  margin: 10px 0;
  position: absolute;
  left: 10px;
  top: 0;
}
.mheader .logo img {
  height: 100%;
}
.nav{position: fixed;top: 0;left: 0;width: 100%;height: 0;background: #283145;z-index: 1001;overflow: hidden;transition: height .2s;}
.nav .nav-header{top:0;z-index:999;height:50px;background:#242a37}
.nav .nav-header .logo{float:left;margin: 10px 0 0 10px;height: 30px}
.nav .nav-header .logo img{height: 100%;}
.nav .close{background:url(~assets/images/close.png) no-repeat center/25px auto;width: 50px;right:0;position: absolute;top: 0;height: 50px;cursor: pointer;;}
.nav .nav-list{height: 100%;overflow: auto;}
.nav .nav-list .nav-item{min-height: 50px;border-bottom: 1px solid #242a37}
.nav .nav-list .nav-item > a{margin: 0 10px;line-height: 50px;color: #fff;font-size: 16px;display: block;}
.nav .nav-list .nav-item .moreAction{cursor: pointer;background: url(~assets/images/tagb.png) no-repeat right 15px/15px auto;}
.nav .nav-list .nav-item .moreAction.active{background: url(~assets/images/tagt.png) no-repeat right 15px/15px auto;}
.nav .nav-list .nav-item ul{padding: 0 20px;background: #282f3f;display: none;}
.nav .nav-list .nav-item ul li{min-height: 50px;border-bottom: 1px solid #242a37}
.nav .nav-list .nav-item ul li a{line-height: 50px;color: #fff;font-size: 14px;display: block;}
 
@-webkit-keyframes gupIn {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -30px, 0);
  }
}
@-moz-keyframes gupIn {
  from {
    opacity: 0;
    -moz-transform: translate3d(0, -30px, 0);
  }
}
@keyframes gupIn {
  from {
    opacity: 0;
    transform: translate3d(0, -30px, 0);
  }
}

@media screen and (max-width: 1080px) {
  header {
    display: none;
  }
  .mheader {
    display: block;
  }
 
}
</style>
