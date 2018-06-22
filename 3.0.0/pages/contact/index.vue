<template>
    <section class="container">
       <section class="contact_focus">
			
            <article>
              <h2>联系我们</h2>
              <h3>飞步专注为客户提供最有价值的互联网营销设计方案，<br>创意 · 设计 · 影视 · 运营 · 技术 · 服务</h3>
              <!-- <a class="jr" href="/hr.html">加入CLH</a> -->
              </article>
		</section>
        <section class="contact">
			<div class="div">
                <div class="dl">
                    <div class="dt">业务咨询</div>
                    <div class="dd">电话：
                        <p>{{contactInfo.tel}}</p>
                    </div>
                    <div class="dd">
                        QQ:
                        <p>
                            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=319096000&amp;site=qq&amp;menu=yes">{{contactInfo.qq}}</a>
                        </p>
                        邮箱：
                        <p>
                            <a :href="'mailto:'+contactInfo.email" style="white-space: normal;">{{contactInfo.email}}</a>
                        </p>
                    </div>
                </div>
                <div class="dl">
                    <div class="dt">售后服务</div>
                    <div class="dd">电话：<p>{{contactInfo.tel}}</p></div>
                </div>
            </div>
            <div class="dl">
                <div class="dd">地址：<p>{{contactInfo.address}}</p></div>
                <div class="dd">邮编：<p>511365</p></div>
              
            </div>
            <div id="allmap"></div>
		</section>
        
    </section>
    
</template>

<script>

import api from '~/assets/js/api.js'
export default {
  components: {},
  data() {
    return {
      
    };
  },
  head () {
    return {
      title: '联系飞步 | 广州网站开发 | 广州APP开发 | 广州小程序开发'
    }
  },
  async asyncData (context) {
    let contactInfo = await api.getContact({
      
    });
  
    return{
    
      contactInfo:contactInfo.data.data
    }
  },
  methods: {
    
  },
   mounted(){
    let that = this;
    let sContent =
	`<h4 style='margin:0 0 5px 0;padding:0.2em 0;font-size:18px'>广州飞步信息科技有限公司</h4>
	<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em;color:#bbb'>飞步专注为客户提供最有价值的互联网营销设计方案，创意 · 设计 · 影视 · 运营 · 技术 · 服务</p> 
	</div>`;
    let map = new BMap.Map("allmap");
	let point = new BMap.Point(113.621894,23.291223);
    let marker = new BMap.Marker(point);
	map.addControl(new BMap.OverviewMapControl());              //添加缩略地图控件
	map.enableScrollWheelZoom();                            //启用滚轮放大缩小
    let infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
	map.centerAndZoom(point, 16);
	map.addOverlay(marker);
	map.disable3DBuilding();
    map.centerAndZoom(point, 16); 
    map.setMapStyle({style:'hardedge'});
    marker.openInfoWindow(infoWindow);
    // map.addEventListener("click",function(e){
	// 	console.log(e.point.lng + "," + e.point.lat);
	// });
  }
};
</script>
<style>
.contact_focus{position:relative; width:100%; min-width:1200px; -webkit-animation:gfadeIn 1s 0.4s both; -moz-animation:gfadeIn 1s 0.4s both; animation:gfadeIn 1s 0.4s both;background: url("~assets/images/about.jpg") no-repeat center/cover; background-attachment: fixed; height: 420px;;}
.contact_focus img{width:100%; vertical-align:top;}
.contact_focus article{position:absolute; top:30%; left:0; width:100%; text-align:center;}
.contact_focus article h2{margin-bottom:1.6%; color:#fff; font-size:55px;text-shadow: 0 0 0.2em #a7d4fd, 0 0 0.2em #a7d4fd,0 0 0.2em #a7d4fd}
.contact_focus article h3{color:#fff; font-size:20px; line-height:2;}
.contact{width:1140px; margin:auto; padding:65px 30px; -webkit-animation:gdownIn 1s 0.7s both; -moz-animation:gdownIn 1s 0.7s both; animation:gdownIn 1s 0.7s both;}
.contact .div{margin-bottom:30px; padding-bottom:30px; border-bottom:1px dotted #999; overflow:hidden;}
.contact div .dl{float:left;}
.contact div .dl .dd{margin-bottom:25px;}
.contact .dl{width:50%;}
.contact .dl .dt{margin-bottom:35px; color:#333; font-size:26px;}
.contact .dl .dd{position:relative; margin-bottom:10px; padding-left:60px; color:#999; line-height:30px;}
.contact .dl .dd span{position:absolute; top:0; left:0; width:60px; height:30px; color:#999; text-align:right;}
.contact .dl .dd p{color:#333; font-size:20px;}
#allmap{height:500px;width:100%;border:1px solid #bbb;margin:50px 0}

</style>
