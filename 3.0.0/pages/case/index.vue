<template>

    <section class="container">
       <div class="un-banner">
            <img src="~assets/images/updateBanner.jpg" alt=""> 
        </div>
     <div class="f-case">
         <div class="f-works_link">
            <a :class="{'active':caseType == item.id}" v-for="(item) in caseTab" :key="item.id" @click="changeTab(item.id)">{{item.name}}</a>
		    </div>
     </div>
     <div id="f-works" >			
        <ul >
          <li style="" v-for="(item) in caseList" :key="item.id" >
            <nuxt-link :to="{name:'case-id',params:{id:item.id}}" target= '_blank' >
                <article>
                    <img :src="item.image" />
                    <!-- <summary>{{item.description}}</summary> -->
                </article>
                <h5>{{item.title}}</h5>
            </nuxt-link>
          </li>
         
        </ul>
        <div class="pagination" @click="getCasePage">
            {{loadingText}}
        </div>
      </div>
  </section>
</template>
<script>
import api from '~/assets/js/api.js'
import axios from 'axios'

export default {
  components: {

  },
  data(){
	  return{
         caseTab:[],
         caseList:[],
         caseType:'',
         page:1,
         pageNum:12,
         loadingFlag:0, //0可加载 1 不可加载
         loadingText:"点击加载下一页",
         loadingCon:["点击加载下一页","正在加载中...","已经没有数据了"],
	  }
  },
  head () {
    return {
      title: '飞步案例中心 | 广州网站开发 | 广州APP开发 | 广州小程序开发'
    }
  },
  async asyncData (context) {
    let caseTab = await api.getTab();
    let caseType = context.query.caseTabId ? context.query.caseTabId : caseTab.data.data[0].id;

    let caseList = await api.getCaseList({
      query:{
        'category_id':caseType,'limit':12,'page':1
      }
    });
    return{
      caseTab:caseTab.data.data,
      caseList:caseList.data.data,
      caseType:caseType,
      a:context.route.params.caseTabid
    }
  },
  methods:{
    async getCasePage(){
      let that = this;
      if(that.loadingFlag){
          //不可点击
          return false;
      }
      that.loadingFlag = 1;//防止多次点击
      that.loadingText = that.loadingCon[1]
      that.page++
      const json = await api.getCase({
        query: {'category_id':that.caseType,'limit':that.pageNum,'page':that.page}
      });
      let data = json.data
      that.caseList.push(...data.data)
      if(data.data.length < that.pageNum){
          that.loadingFlag = 1;
          that.loadingText = that.loadingCon[2]
      }else{
          that.loadingFlag = 0;
          that.loadingText = that.loadingCon[0]
      }
    },
    async getCase(id){
      let that = this;
      that.page = 1;
      that.loadingFlag = 0;
      that.loadingText = that.loadingCon[0]
      const json = await api.getCase({
        query: {'category_id':id,'limit':that.pageNum,'page':that.page}
      });
      let data = json.data
      that.caseList=data.data;
      if(data.data.length < that.pageNum){
          that.loadingFlag = 1;
          that.loadingText = that.loadingCon[2]
      }else{
          that.loadingFlag = 0;
          that.loadingText = that.loadingCon[0]
      }
    },
    changeTab(id){
      let that = this;
      that.caseType = id;
      that.getCase(id)
    }

  },
  created(){
      let that = this;
      // that.getCase()
  }
};

</script>
<style>

.f-works_link{ overflow: hidden;;background: #fff;border-radius:75px;padding:25px 0;width:1200px; height:25px; margin:auto;margin:47px auto;  border:1px dotted #d1d1d1;border-top:1px solid #349fff; text-align:center; font-size:16px; -webkit-animation:gdownIn 1s  both; -moz-animation:gdownIn 1s  both; animation:gdownIn 1s  both;}
.f-works_link span{margin:0 23px;}
.f-works_link a{vertical-align: top;margin:0 23px;padding:5px 10px;border-radius: 25px;line-height: 25px; color:#2b2b2b; -webkit-transition:ease-in-out 0.3s; -moz-transition:ease-in-out 0.3s; transition:ease-in-out 0.3s;cursor: pointer;position: relative;display: inline-block;*display: inline;*zoom:1;}
.f-works_link .active:after{content: "";position: absolute;width: 5px;left: 50%;margin-left: -2.5px;top: -25px;height: 25px;background: #349fff;border-radius: 5px;-webkit-transition:ease-in-out 0.3s; -moz-transition:ease-in-out 0.3s; transition:ease-in-out 0.3s;}
.f-works_link a:hover{color:#fff;background: #349fff;margin-top: -10px;}
.f-works_link a:hover:after{content: "";position: absolute;width: 5px;left: 50%;margin-left: -2.5px;top: -25px;height: 25px;background: #349fff;border-radius: 5px;-webkit-transition:ease-in-out 0.3s; -moz-transition:ease-in-out 0.3s; transition:ease-in-out 0.3s;}
.f-works_link .active{color:#fff;background: #349fff;margin-top: -10px;}
#f-works{width:1200px;  overflow:hidden;margin:0 auto}
#f-works ul{width:100%; overflow:hidden;}
/* #f-works ul li:nth-of-type(1){width: 775px;height: 604px;position: relative}
#f-works ul li:nth-of-type(1) img{width: 875px;height: 548px;position: absolute;left: 50%;margin-left: -437.5px;}
#f-works ul li:nth-of-type(1) article{height: 548px;} */
#f-works ul li{float:left; width:375px; height: 291px; text-align:center;margin:0 12px 23px 12px;-webkit-animation:gfadeIn 0.6s 0.5s both; -moz-animation:gfadeIn 0.6s 0.5s both; animation:gfadeIn 0.6s 0.5s both;}
#f-works ul li a{display:block; background:#fff; -webkit-transition:ease-in-out 0.3s; -moz-transition:ease-in-out 0.3s; transition:ease-in-out 0.3s;}
#f-works ul li article{position:relative; width:100%; height:0; height: 235px; overflow:hidden;}
#f-works ul li article img{position:absolute; top:0; left:0;width: 375px; height:235px; -webkit-transition:ease-in-out 0.3s; -moz-transition:ease-in-out 0.3s; transition:ease-in-out 0.3s; -webkit-transform:translate3d(0,0,0); -moz-transform:translate3d(0,0,0); transform:translate3d(0,0,0);}
#f-works ul li article summary{width:100%; height:50px; position:absolute; bottom:-50px; left:0; line-height:50px; color:#a9a9a9; background:rgba(0,0,0,0.5); background:#666; text-align:left; text-indent:20px; z-index:3; -webkit-transition:ease-in-out 0.3s; -moz-transition:ease-in-out 0.3s; transition:ease-in-out 0.3s;}
#f-works ul li h5{line-height:56px; font-size:18px; color:#333;height: 56px;background: #fff; -webkit-transition:ease-in-out 0.3s; -moz-transition:ease-in-out 0.3s; transition:ease-in-out 0.3s;}
#f-works ul li span{line-height:22px; font-size:14px; color:#999; display:block; padding-bottom:18px; -webkit-transition:ease-in-out 0.3s; -moz-transition:ease-in-out 0.3s; transition:ease-in-out 0.3s;}


#f-works ul li:nth-of-type(12n+1) a:hover h5{background-color:#349fff;}
#f-works ul li:nth-of-type(12n+2) a:hover h5{background-color:#edd8b5;}
#f-works ul li:nth-of-type(12n+3) a:hover h5{background-color:#09337d;}
#f-works ul li:nth-of-type(12n+4) a:hover h5{background-color:#d5414d;}
#f-works ul li:nth-of-type(12n+5) a:hover h5{background-color:#f5585a;}
#f-works ul li:nth-of-type(12n+6) a:hover h5{background-color:#00aa80;}
#f-works ul li:nth-of-type(12n+7) a:hover h5{background-color:#1D1D1D;}
#f-works ul li:nth-of-type(12n+8) a:hover h5{background-color:#4cc63f;}
#f-works ul li:nth-of-type(12n+9) a:hover h5{background-color:#84d9f5;}
#f-works ul li:nth-of-type(12n+10) a:hover h5{background-color:#520d10;}
#f-works ul li:nth-of-type(12n+11) a:hover h5{background-color:#00bcc3;}
#f-works ul li:nth-of-type(12n+12) a:hover h5{background-color:#01a1ef;}
#f-works ul li:nth-of-type(12n+1) a:hover {background-color:#349fff;}
#f-works ul li:nth-of-type(12n+2) a:hover {background-color:#edd8b5;}
#f-works ul li:nth-of-type(12n+3) a:hover {background-color:#09337d;}
#f-works ul li:nth-of-type(12n+4) a:hover {background-color:#d5414d;}
#f-works ul li:nth-of-type(12n+5) a:hover {background-color:#f5585a;}
#f-works ul li:nth-of-type(12n+6) a:hover {background-color:#00aa80;}
#f-works ul li:nth-of-type(12n+7) a:hover {background-color:#1D1D1D;}
#f-works ul li:nth-of-type(12n+8) a:hover {background-color:#4cc63f;}
#f-works ul li:nth-of-type(12n+9) a:hover {background-color:#84d9f5;}
#f-works ul li:nth-of-type(12n+10) a:hover {background-color:#520d10;}
#f-works ul li:nth-of-type(12n+11) a:hover {background-color:#00bcc3;}
#f-works ul li:nth-of-type(12n+12) a:hover {background-color:#01a1ef;}
#f-works ul li:nth-of-type(2){-webkit-animation-delay:0.7s; -moz-animation-delay:0.7s; animation-delay:0.7s;}
#f-works ul li:nth-of-type(3){-webkit-animation-delay:0.9s; -moz-animation-delay:0.9s; animation-delay:0.9s;}
#f-works ul li:nth-of-type(4){-webkit-animation-delay:1.1s; -moz-animation-delay:1.1s; animation-delay:1.1s;}
#f-works ul li:nth-of-type(5){-webkit-animation-delay:1.3s; -moz-animation-delay:1.3s; animation-delay:1.3s;}
#f-works ul li:nth-of-type(6){-webkit-animation-delay:1.5s; -moz-animation-delay:1.5s; animation-delay:1.5s;}
#f-works ul li:nth-of-type(7){-webkit-animation-delay:1.7s; -moz-animation-delay:1.7s; animation-delay:1.7s;}
#f-works ul li:nth-of-type(8){-webkit-animation-delay:1.9s; -moz-animation-delay:1.9s; animation-delay:1.9s;}
#f-works ul li:nth-of-type(9){-webkit-animation-delay:2.1s; -moz-animation-delay:2.1s; animation-delay:2.1s;}
#f-works ul li:nth-of-type(10){-webkit-animation-delay:2.3s; -moz-animation-delay:2.3s; animation-delay:2.3s;}
#f-works ul li:nth-of-type(11){-webkit-animation-delay:2.5s; -moz-animation-delay:2.5s; animation-delay:2.5s;}
#f-works ul li:nth-of-type(12){-webkit-animation-delay:2.7s; -moz-animation-delay:2.7s; animation-delay:2.7s;}
#f-works ul li a:hover h5, #f-works ul li a:hover span{color:#fff;}
#f-works ul li a:hover article summary{bottom:0;}
#f-works ul li a:hover article img{-webkit-transform:scale(0.95); -moz-transform:scale(0.95); transform:scale(0.95);}
#f-works ul li a:hover article:before{opacity:1; filter:alpha(opacity=100); zoom:1;}
#f-works ul li a:hover article:after{opacity:1; filter:alpha(opacity=100); zoom:1; -webkit-transform:scale(1); -moz-transform:scale(1); transform:scale(1);}
.pagination{padding:60px 0 30px 0; text-align:center;cursor: pointer;color:#bbb;font-size:16px;margin:50px 0 0 0;background: url(~assets/images/page.png) no-repeat center top/ auto 50px;}


</style>
