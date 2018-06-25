<template>
    <section class="container">
        <div class="news_wrap">
            <ul id="news_list">
                <li style="" v-for="(item) in newsList" :key="item.id" >
                    <nuxt-link :to="{name:'new-id',params:{id:item.id}}" target= '_blank' >
                        <picture>
                            <img :src="item.image" title="" alt="">
                        </picture>
                        <div>
                            <h2>{{item.title}}</h2>
                            <p>{{item.description}}</p>
                            <span>{{item.date}}</span>
                        </div>
                    </nuxt-link>
                </li>
               
            </ul>
            <div class="pagination" @click="getNewPage">
            {{loadingText}}
            </div>
        </div>
     
    </section>
</template>
<script>

import api from '~/assets/js/api.js'
export default {
  components: {

  },
  data(){
	  return{
		 page:1,
         pageNum:12,
         loadingFlag:0, //0可加载 1 不可加载
         loadingText:"点击加载下一页",
         loadingCon:["点击加载下一页","正在加载中...","已经没有数据了"],
         newsList:[]
	  }
  },
  head () {
    return {
      title: '飞步最新动态 | 广州网站开发 | 广州APP开发 | 广州小程序开发'
    }
  },
  async asyncData (context) {
    let loadingFlag,loadingText;
    let newsList = await api.getNews({
      query:{
        'cate_slug':'news','limit':12,'page':1
      }
    });
    if(newsList.data.data.length < 12){
         loadingFlag = 1;
         loadingText = "已经没有数据了"
      }else{
         loadingFlag = 0;
         loadingText = "点击加载下一页"
      }
    return{
      loadingFlag:loadingFlag,
      loadingText:loadingText,
      newsList:newsList.data.data
    }
  },
  methods:{
	 async getNewPage(){
      let that = this;
      if(that.loadingFlag){
          //不可点击
          return false;
      }
      that.loadingFlag = 1;//防止多次点击
      that.loadingText = that.loadingCon[1]
      that.page++
      const json = await api.getNews({
        query: {'cate_slug':'news','limit':that.pageNum,'page':that.page}
      });
      let data = json.data
      that.newsList.push(...data.data)
      if(data.data.length < that.pageNum){
          that.loadingFlag = 1;
          that.loadingText = that.loadingCon[2]
      }else{
          that.loadingFlag = 0;
          that.loadingText = that.loadingCon[0]
      }
    },
  }
};

</script>
<style>
.news_wrap{width:1200px; margin:50px auto; overflow:hidden;}
#news_list{width:1215px; overflow:hidden;}
#news_list li{float:left; width:390px; height:408px; margin:0 15px 34px 0; background:#fff; -webkit-animation:gfadeIn 0.6s 0.5s both; -moz-animation:gfadeIn 0.6s 0.5s both; animation:gfadeIn 0.6s 0.5s both;}
#news_list li:nth-of-type(2){-webkit-animation-delay:0.7s; -moz-animation-delay:0.7s; animation-delay:0.7s;}
#news_list li:nth-of-type(3){-webkit-animation-delay:0.9s; -moz-animation-delay:0.9s; animation-delay:0.9s;}
#news_list li:nth-of-type(4){-webkit-animation-delay:1.1s; -moz-animation-delay:1.1s; animation-delay:1.1s;}
#news_list li:nth-of-type(5){-webkit-animation-delay:1.3s; -moz-animation-delay:1.3s; animation-delay:1.3s;}
#news_list li:nth-of-type(6){-webkit-animation-delay:1.5s; -moz-animation-delay:1.5s; animation-delay:1.5s;}
#news_list li:nth-of-type(7){-webkit-animation-delay:1.7s; -moz-animation-delay:1.7s; animation-delay:1.7s;}
#news_list li:nth-of-type(8){-webkit-animation-delay:1.9s; -moz-animation-delay:1.9s; animation-delay:1.9s;}
#news_list li:nth-of-type(9){-webkit-animation-delay:2.1s; -moz-animation-delay:2.1s; animation-delay:2.1s;}
#news_list li:nth-of-type(10){-webkit-animation-delay:2.3s; -moz-animation-delay:2.3s; animation-delay:2.3s;}
#news_list li:nth-of-type(11){-webkit-animation-delay:2.5s; -moz-animation-delay:2.5s; animation-delay:2.5s;}
#news_list li:nth-of-type(12){-webkit-animation-delay:2.7s; -moz-animation-delay:2.7s; animation-delay:2.7s;}
#news_list li a{display:block; height:100%;}
#news_list li picture{display:block; height:238px; width:100%; overflow:hidden;}
#news_list li picture img{width:100%; height:auto; -webkit-transition:0.3s; -moz-transition:0.3s; transition:0.3s;}
#news_list li div{position:relative; height:130px; padding:20px; background:#fff; -webkit-transition:0.3s; -moz-transition:0.3s; transition:0.3s;}
#news_list li h2{margin-bottom:5px; color:#333; font-size:18px;}
#news_list li p{height:44px; color:#999; font-size:12px; overflow:hidden; line-height:1.8;}
#news_list li span{position:absolute; bottom:20px; left:20px; color:#999;}
#news_list li a:hover div{background-color:#349fff;}

#news_list li:nth-of-type(12n+1) a:hover div{background-color:#349fff;}
#news_list li:nth-of-type(12n+2) a:hover div{background-color:#edd8b5;}
#news_list li:nth-of-type(12n+3) a:hover div{background-color:#09337d;}
#news_list li:nth-of-type(12n+4) a:hover div{background-color:#d5414d;}
#news_list li:nth-of-type(12n+5) a:hover div{background-color:#f5585a;}
#news_list li:nth-of-type(12n+6) a:hover div{background-color:#00aa80;}
#news_list li:nth-of-type(12n+7) a:hover div{background-color:#1D1D1D;}
#news_list li:nth-of-type(12n+8) a:hover div{background-color:#4cc63f;}
#news_list li:nth-of-type(12n+9) a:hover div{background-color:#84d9f5;}
#news_list li:nth-of-type(12n+10) a:hover div{background-color:#520d10;}
#news_list li:nth-of-type(12n+11) a:hover div{background-color:#00bcc3;}
#news_list li:nth-of-type(12n+12) a:hover div{background-color:#01a1ef;}
#news_list li a h2, #news_list li a p, #news_list li a span{-webkit-transition:0.3s; -moz-transition:0.3s; transition:0.3s;}
#news_list li a:hover h2, #news_list li a:hover p, #news_list li a:hover span{color:#fff;}
#news_list li a:hover picture img{-webkit-transform:scale(1.06); -moz-transform:scale(1.06); transform:scale(1.06);}
.pagination{padding:60px 0 15px 0; text-align:center;cursor: pointer;color:#bbb;font-size:16px;margin:50px 0 0 0;background: url(~assets/images/page.png) no-repeat center top/ auto 50px;}

</style>
