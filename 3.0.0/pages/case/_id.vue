<template>
    <section class="container bgf2">
        <div class="un-banner">
            <img src="~assets/images/updateBanner.jpg" alt=""> 
      </div>
     <div class="detail">
			<h1>{{caseDetail.title}}</h1>
			<span>{{caseDetail.date}}</span> <span> 浏览：<span>{{caseDetail.views_count}}</span></span>
			<article v-html="caseDetail.content">
			</article>
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
         caseDetail:{},
	  }
  },
  head () {
    let that = this;
    return {
      title: that.caseDetail.title+' | 广州网站开发飞步科技'
    }
  },
  async asyncData (context) {
    let id = context.params.id;
    
    let caseDetail = await api.getCaseDetail({
      param:{'path':id}
    });
  
    return{
    
      caseDetail:caseDetail.data.data
    }
  },
  methods:{
    //   async getde(){
    //             let caseDetail = await axios({
    //             url: 'http://api.gcms.app/page/2',
    //             method: 'GET',
    //             params: {}
    //         });
    //   }

  },
  created(){
      let that = this;

  }
};

</script>
<style >
/* .container{padding-bottom: 50px;} */
.detail{width:1200px; margin:75px auto 0 auto ; -webkit-animation:gfadeIn 0.6s 0.6s both; -moz-animation:gfadeIn 0.6s 0.6s both; animation:gfadeIn 0.6s 0.6s both;}
.detail h1{margin-bottom:10px; color:#333; font-size:24px;}
.detail span{margin-right:34px; color:#999;}
.detail article{margin-top:20px; padding:46px 50px 70px; background:#fff;}
.detail article img{width:100%;max-width:100% !important; margin-bottom:5px;}
.detail article p{color:#666; font-size:14px; line-height:1.8; margin-bottom:18px;}
</style>
