<template>
     <footer id="footer">
         <div class="linkBox">
             <div >
                 <p>友情链接<span>(友链QQ：595642191)</span></p>
             <div class="linkBox-href">
                    <a href="http://www.feibu.info" target="_black">广州网站开发</a>
                    <a href="http://www.feibu.info" target="_black">广州APP开发</a>
                    <a href="http://www.feibu.info" target="_black">广州小程序开发</a>
                    <a href="http://www.tianyouart.com" target="_black">天佑艺术馆</a>
                    <a href="http://www.fanghualawyer.com" target="_black">广东芳华律师事务所</a>
                    <a href="http://word.feibu.info" target="_black">三分热度</a>
                    <a href="http://www.feibu.info/sitemap.html" target="_black">网站地图</a>
                   
             </div>
             </div>
         </div>
         <div class="copy">
                <div class="copy-left">
                    © CopyRight ©广州飞步信息科技有限公司 <a href="http://beian.miit.gov.cn/" target="_blank">粤ICP备16072342号-1</a>
                </div>
                <div class="copy-right">
                    <span>关注飞步科技</span>
                    <img src="~assets/images/code.jpg" alt="">
                </div> 
         </div>
        <!--<div class="getInfo">
            <a href="tel:13794420683">获取方案及报价(廖生)</a>
        </div>
		<div class="getTell animate" :style="{bottom:tellBottom}">
            <a target="_black" href="http://wpa.qq.com/msgrd?v=3&amp;uin=319096000&amp;site=qq&amp;menu=yes"><img src="~assets/images/footer-tell.png" alt=""></a>
            <div class="getTell-close fb-position-absolute" @click="closeTell()"></div>
        </div>-->
    <div class="kefu">
        <ul>
            <li>
                <a class="qq" target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=319096000&amp;site=qq&amp;menu=yes">QQ</a>
                <div class="div-item"><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=319096000&amp;site=qq&amp;menu=yes"><span class="h2">业务咨询</span></a></div>
            </li>
            <li class="hidden-ph">
                <a class="shouhou" target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=319096000&amp;site=qq&amp;menu=yes">售后服务</a>
                <div class="div-item"><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=319096000&amp;site=qq&amp;menu=yes"><span class="h2">售后服务</span></a></div>
            </li>
            <li>
                <a class="call" href="javascript:;">电话</a>
                <div class="div-item"><span class="h2">020-32168995</span></div>
            </li>
            <li class="backtop" @click="backTop">
                <a class="back" href="javascript:;" >返回顶部</a>
                <div class="div-item"><span class="h2">TOP</span></div>
            </li>
        </ul>
    </div>
	</footer>
</template>
<script>
export default {
  components: {

  },
  data(){
	  return{
		 tellBottom:0
	  }
  },
  methods:{
    backTop(){
        function smoothscroll(){ 
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo (0,currentScroll - (currentScroll/5));
            }
        }
        smoothscroll();
    },
    closeTell(){
        var that = this;
        that.tellBottom="-100%"
    }
  }
};

</script>
<style>

footer{width:100%;margin:auto; overflow:hidden; border-top:1px solid #ddd;background: #1d1d1d}
.linkBox{margin:0 auto;padding:25px 25px;background: #222}
.linkBox p{color: #aaa;font-size:16px;padding: 0 0 10px 0}
.linkBox p span{color: #aaa;font-size:12px;}
.linkBox .linkBox-href{color: #aaa;font-size:12px;}
.linkBox .linkBox-href a{color: #aaa;margin:5px 10px 5px 0;display: inline-block;*display: inline;*zoom:1;}
.linkBox .linkBox-href a:after{content: "|";margin-left: 10px;}
.linkBox .linkBox-href a:last-child:after{content: "";display: none;}
.linkBox .linkBox-href a:hover{color: #349fff}
.linkBox .linkBox-href a:hover:after{content: "|";color: #aaa}
.copy{background: #1d1d1d;color: #aaa;position: relative;padding:45px 25px;}
.copy .w1200{position: relative;padding:45px 0;}
.copy a{color: #aaa;}
.kefu{width:50px; position:fixed;  right:0px; top:65%; z-index:200; transform: translateX(0) translateY(-50%);}
.kefu>ul> li{width:50px; height:50px; margin-top:1px; position:relative;}
.kefu ul li:hover,.kefu ul li:hover .div-item{background-color:#da0000;}
.kefu .qq,.kefu .shouhou,.kefu .call,.kefu .back,.kefu .share,.kefu .weixin,.kefu ul li .bdsharebuttonbox a{display:block; width:50px; height:50px; float:left; font-size:0; background-image:url(~assets/images/kefu.png); background-repeat:no-repeat;}
.kefu .qq,.kefu .shouhou,.kefu .call,.kefu .back,.kefu .share,.kefu .weixin{position:relative; z-index:10; background-color:#242424;}
.kefu ul li:hover a{background-color:#da0000;}
.kefu .weixin{background-image:url(~assets/images/weixin.png); background-repeat:no-repeat; background-position:0px 0px;}
.kefu .qq{background-position:0px 0px;}
.kefu .shouhou{background-position:-50px 0px;}
.kefu .call{background-position:-100px 0px;}
.kefu .back{background-position:-150px 0px;}
.kefu .share{background-position:-200px 0px;}
.kefu ul li .div-item{width:150px; height:50px; background-color:#242424; position:absolute; right:-200px; top:0px; cursor:pointer; -webkit-transition: all .5s ease; transition: all .5s ease;}
.kefu ul li:hover .div-item{right:50px;}
.kefu ul li .div-ewm{width:298px; height:auto; padding-top:20px; background-color:#da0000; position:absolute; right:50px; top:0px; display:none;}
.kefu ul li .div-ewm ul li{width:119px; float:left; text-align:center; margin-left:20px;}
.kefu ul li .div-ewm ul li img{width:100%; display:block;}
.kefu ul li .div-ewm ul li p{font-size:14px; color:#fff; margin-top:5px;}
.kefu ul li:hover .div-ewm{display:block;}
.kefu ul li .h2{display:block; line-height:50px; font-size:14px; color:#fff; padding:0px 25px;}
.kefu ul li .bdsharebuttonbox{width:100%; height:50px;}
.kefu ul li .bdsharebuttonbox a{padding:0px; margin:0px; width:50px; height:50px;}
.kefu ul li .bdsharebuttonbox a:hover{background-color:#565656;}
.kefu ul li .bdsharebuttonbox a.bds_tsina{background-position:-250px 0px;}
.kefu ul li .bdsharebuttonbox a.bds_weixin{background-position:-300px 0px;}
.kefu ul li .bdsharebuttonbox a.bds_tqq{background-position:-350px 0px;}
.kefu ul li .bdsharebuttonbox a.bds_more{background-position:-400px 0px;}
.copy-right{position: absolute;top: 0;right: 25px;}
.copy-right img{width: 100px;margin:5px 0;-webkit-transition:ease-in-out 0.3s; -moz-transition:ease-in-out 0.3s; transition:ease-in-out 0.3s;}
.copy-right img:hover{width: 200px;margin:-100px 0 0 0}
.copy-right span{padding: 0 10px;}
.getInfo{
    height: 50px;background: #349fff;width: 100%;text-align: center;line-height: 50px;text-align: center;color: #fff;font-size: 16px;position: fixed;bottom: 0;left: 0;display: none;;;
}
.getInfo a{
    color: #fff
}
.getTell{position: fixed;bottom: 0;left: 0;width: 100%;  -webkit-animation: gdownIn 1s 0.8s both;
  -moz-animation: gdownIn 1s 0.8s both;
  animation: gdownIn 1s 0.8s both;}
.getTell img{width: 100%;}
.getTell-close{width: 90px;height: 90px;bottom: 0;right: 0;position: absolute;;}
@media screen and (max-width: 1080px) {
    .kefu{
        display: none;
    }
    .copy{
        padding:  0;
    }
    .copy-left{
        padding: 20px 25px;
       
    }
    .copy-right{
        position: relative;
        text-align: center;
        display: none;
    }
    footer{
        padding-bottom: 50px
    }
    .getInfo{
        display: block;
        border-radius: 30px 30px 0 0
    }
    .getTell{display: none;}
    
}

</style>
