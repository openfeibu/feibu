<template>
  <div>
      <div class="fb-error">
       <div class="fb-error-img"><img src="~assets/images/error.png" alt=""></div>
       <div class="fb-error-title"  v-if="error.statusCode==404">啊呀...这个页面不见了</div>
       <div class="fb-error-title"  v-else>啊呀...服务器出错了</div>
       <div class="fb-error-con">
            <p>可能原因：网络信号差；网址输入错误；该页面已被移动或删除。</p>
            <p>如有任何建议，请及时反馈给<a href="/" alt="广州飞步信息科技有限公司">广州飞步信息科技有限公司</a></p>
       </div>
       <div class="fb-error-button"><a id="href" href="javascript:history.back(-1);">返回上一页</a></div>
    </div>
  </div>
</template>
 <style>
        .fb-error{width: 500px;margin:10% auto 0 auto;padding:50px 0 100px 0;}
        .fb-error-title{font-size: 40px;color: #333333;text-align: center;margin:50px 0 30px 0;line-height: 40px;}
        .fb-error-con{font-size: 16px;color: #999;text-align: center;line-height: 40px;}
        .fb-error-button{width: 150px;height: 50px;border-radius: 5px;margin:38px auto 0 auto;background: #349fff;text-align: center;line-height: 50px;}
        .fb-error-button a{color: #fff;font-size: 16px;display: block;}
 </style>
 
<script>
export default {
  props:['error'],
}
</script>