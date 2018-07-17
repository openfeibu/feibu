<template>
  <header id="header" :class="{'headerh':headerClass}">
		<h1><a href="/" id="logo"><img src="~assets/images/logo.jpg" alt="广州网站开发-广州飞步科技信息科技有限公司"></a></h1>
		<nav id="nav">
			<nuxt-link :to="{name:'index'}"  @mouseover.native="navOver" @mouseout.native="navOut" exact>首页</nuxt-link>
			<nuxt-link :to="{name:'website'}"  @mouseover.native="navOver" @mouseout.native="navOut" >微官网小程序</nuxt-link>
			<nuxt-link :to="{name:'case'}"  @mouseover.native="navOver" @mouseout.native="navOut" >案例中心</nuxt-link>
            <nuxt-link :to="{name:'new'}"  @mouseover.native="navOver" @mouseout.native="navOut" >最新动态</nuxt-link>
			<nuxt-link :to="{name:'about'}"  @mouseover.native="navOver" @mouseout.native="navOut">关于飞步</nuxt-link>
			<nuxt-link :to="{name:'contact'}"  @mouseover.native="navOver" @mouseout.native="navOut"> 联系我们</nuxt-link>
			<span id="nav_line" :style="{left:navlineLeft+'px',width:navlineWidth+'px',opacity:navlineOpacity}"></span>
		</nav>
		<div class="tell">020-32168995</div>
	</header>
</template>
<script>

import api from '~/assets/js/api.js' 
export default {
  components: {

  },
  data(){
	  return{
		  navlineLeft:0,
		  navlineWidth:0,
		  navlineOpacity:0,
		  headerClass:false,
		  headerActive:false,
	  }
  },
  methods:{
	  navOver(e){
		  let that = this;
		  that.navlineOpacity = 1
		  that.navlineLeft = e.currentTarget.offsetLeft
		  that.navlineWidth = e.currentTarget.clientWidth
	  },
	  navOut(e){
		  let that = this;
		  that.navlineOpacity = 0
		//   that.navlineLeft = e.currentTarget.offsetLeft
		  that.navlineWidth = 0
	  },
	  headerScrool(e){
		  window.addEventListener('scroll', this.handleScroll)
	  },
	  handleScroll () {
		let that = this;
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
		if(scrollTop > 50){
			that.headerClass = true
	 	}else{
			that.headerClass = false
		 }
	  },
	  
  },
 created(){
	 
 },
 mounted(){
	 let that = this;
	 that.window = window;
	 that.headerScrool();
	//  let caseReg = /^\/case\/((?:[^\/]+?))(?:\/(?=$))?$/i

	 console.log(that.$route.fullPath)
 }
}

</script>
<style>
#header{width: 100%;height:99px; border-bottom:1px solid #f2f2f2; position:fixed; top:0; left:0; background:#fff; z-index:10; -webkit-transition:0.3s; -moz-transition:0.3s; transition:0.3s; -webkit-animation:gupIn 1s 0.1s both; -moz-animation:gupIn 1s 0.1s both; animation:gupIn 1s 0.1s both;}
.headerh{height: 66px !important;}
#header.headerh #logo, #header.headerh #nav a, #header.headerh .tell{height:66px; line-height:66px;}

#logo{display:block; position:absolute; top:0; left:30px; height:99px; line-height:99px; opacity:1; overflow:hidden; filter:alpha(opacity=60); -webkit-transition:0.3s, opacity 0.6s; -moz-transition:0.3s, opacity 0.6s; transition:0.3s, opacity 0.6s;}
#logo img{vertical-align:middle;height: 40px;}
#logo:hover{opacity:0.8; }
#nav{width:750px; margin:auto; text-align:center; position:relative;}
#nav a{display:inline-block; height:99px; margin:0 25px; line-height:99px; text-align:center; font-size:16px; -webkit-transition:0.3s, color 0.5s; -moz-transition:0.3s, color 0.5s; transition:0.3s, color 0.5s;color: #333}
#nav a:hover{color:#6e6e6e;}
#header .tell{position:absolute; top:0; right:25px; height:99px; line-height:99px; font-size:18px; font-weight:bold; background:url(~assets/images/tel_bg.jpg) no-repeat 18px center; padding-left:60px; -webkit-transition:0.3s; -moz-transition:0.3s; transition:0.3s; color:#349fff;}
#nav_line{width:100px; height:2px; background:#349fff; position:absolute; bottom:-1px; left:0; opacity:1; filter:alpha(opacity=1);-webkit-transition:0.3s, opacity 0.6s; -moz-transition:0.3s, opacity 0.6s; transition:0.3s, opacity 0.6s;}
#nav .nuxt-link-active{color: #349fff;font-weight: bold;}
@-webkit-keyframes gupIn{
	from{opacity:0; -webkit-transform:translate3d(0,-30px,0);}
}
@-moz-keyframes gupIn{
	from{opacity:0; -moz-transform:translate3d(0,-30px,0);}
}
@keyframes gupIn{
	from{opacity:0; transform:translate3d(0,-30px,0);}
}

</style>
