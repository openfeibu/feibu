<template>
    <section class="un">
        <div class="un-banner">
            <img src="~assets/images/32banner.jpg" alt=""> 
        </div>
        <div class="un-con">
			<div class="un-item-step">
				<img src="~assets/images/step.jpg" width="100%" alt="中高职贯通招生管理系统的流程步骤">
			</div>
			<div class="un-item">	
				<div class="un-left un-test">
					<p>中高职贯通招生管理系统--合作高校</p>
					<span>
						中高职贯通招生管理系统是根据广东省高职衔接二三分段招生业务需求开发的，面向高职院校，对口中职学校使用。本系统基于B/S结构，采用PHP+MYSQL开发。该系统主要包含了招生计划管理、考生管理、考务管理、成绩管理、录取管理、数据导出打印及招生大数据展示等功能。 极大地提升了工作效率、减轻了老师们的工作负担、保证数据的永久存储、辅助分析每年的招生数据。
					</span>
				</div>
				<div class="un-right un-img">
					<img src="~assets/images/ngs.jpg" alt="中高职贯通招生管理系统合作高校，广东农工商职业技术学院" width="100%">
				</div>
			</div>
            <div class="un-item">	
				<div class="un-left un-img">
					<img src="~assets/images/un1.png" alt="中高职贯通-大数据分析" >
				</div>
				<div class="un-right un-test">
					<p>大数据分析</p>
					<span>
						<dl>
							<dt></dt>
							<dd>中高职贯通招生管理系统通过系统的数据信息进行分析整理，可直观查看高职专业、招生计划数、已报名人数、已录取人数、中职学校、中职专业等数据</dd>
						</dl>
					</span>
					
				</div>
			</div>
            <div class="un-item">	
				<div class="un-left un-test">
					<p>中高职管理</p>
					<span>
						中高职分别拥有各自的独立权限账户，高职负责人可进行添加高职专业、添加中职学院、添加中职专业、添加高职负责人、添加中职负责人等操作，支持在线快速搜索定位信息，并支持数据一键导入导出；
					</span>
					
				</div>
				<div class="un-right un-img">
					<img src="~assets/images/un2.png" alt="中高职贯通-中高职管理" >
				</div>
			</div>
         	<div class="un-item">	
				<div class="un-left un-img">
					<img src="~assets/images/un3.png" alt="中高职贯通-考生管理" >
				</div>
				<div class="un-right un-test">
					<p>考生管理</p>
					<span>
						在线管理考生的信息，在线审核报名表，支持一键快速导入导出。
					</span>
					<!-- <em>部分功能预览:</em>
					<table>
						<tbody><tr>
							<th>功能模块</th>
							<th>是否支持</th>
						</tr>
						<tr>
							<td>搜索</td>
							<td>支持</td>
						</tr>
						<tr>
							<td>添加中职考生</td>
							<td>支持</td>
						</tr>
						<tr>
							<td>考生报名表管理</td>
							<td>在线审核报名表</td>
						</tr>
						<tr>
							<td>一键导入/导出数据</td>
							<td>更方便管理员整理数据</td>
						</tr>
					
                        <tr>
							<td>批量删除</td>
							<td>支持</td>
						</tr>
					</tbody></table> -->
				</div>
			</div>
			<div class="un-item">	
				<div class="un-left un-test">
					<p>招生计划管理</p>
					<span>
						在线一键导入招生计划表，智能生成对应的中职学校，高职专业，中职专业，高职专业负责人，中职专业负责人。所有的账户均可独立管理对应权限。
					</span>
				</div>
				<div class="un-right un-img">
					<img src="~assets/images/un4.png" alt="中高职贯通招生管理系统-招生计划管理" >
				</div>
			</div>
            <div class="un-item">
				<div class="un-left un-img">
					<img src="~assets/images/un5.png" alt="中高职贯通招生管理系统-成绩管理" >
				</div>
				<div class="un-right un-test">
					<p>成绩管理</p>
					<span>
						在线进行审核转段考核成绩，批量审核，一键驳回。
					</span>

				</div>
			</div>
            <div class="un-item">	
				<div class="un-left un-test">
					<p>录取管理</p>
					<span>
						查看已通过考试的考生，支持智能分类筛选学校，一键导出名单。
					</span>
				</div>
				<div class="un-right un-img">
					
						<img src="~assets/images/un6.png" alt="中高职贯通招生管理系统-录取管理" >
				</div>
			</div>
			<div class="un-item">	
				<div class="un-left un-img">
					<img src="~assets/images/un8.png" alt="中高职贯通招生管理系统-考务管理" >
				</div>
				<div class="un-right un-test">
					<p>考务管理</p>
					<span>
						安排考场以及考试安排
					</span>
					
				</div>
			</div>
            <div class="un-item">	
				
				<div class="un-left un-test">
					<p>发票管理</p>
					<span>
						此模块展现公司的基本信息，用户可点击地图进行导航，更方便用户找到公司的地址。
					</span>
					
				</div>
				<div class="un-right un-img">
					<img src="~assets/images/un7.png" alt="" >
				</div>
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

        
	  }
  },
  head () {
    return {
      title: '中高职贯通招生管理系统 | 三二分段招生管理系统 | 广州小程序开发 | 小程序开发 |广州网站开发 | 广州APP开发  | 飞步科技 ',
       meta: [
        { hid: 'description', name: 'description', content: '中高职贯通招生管理系统是根据广东省高职衔接二三分段招生业务需求开发的，面向高职院校，对口中职学校使用。本系统基于B,微信小程序开发,微信小程序定制。' }
      ]
    }
  },
//   async asyncData (context) {
//     let loadingFlag,loadingText;
//     let newsList = await api.getNews({
//       query:{
//         'cate_slug':'news','limit':12,'page':1
//       }
//     });
//     if(newsList.data.data.length < 12){
//          loadingFlag = 1;
//          loadingText = "已经没有数据了"
//       }else{
//          loadingFlag = 0;
//          loadingText = "点击加载下一页"
//       }
//     return{
//       loadingFlag:loadingFlag,
//       loadingText:loadingText,
//       newsList:newsList.data.data
//     }
//   },
  methods:{
	
  }
};

</script>
<style lang="less">


.un-con{max-width: 1200px;margin:0 auto;}
.un-item{padding:50px 0;overflow: hidden;border-top:2px dashed #349fff;text-align: justify}
.un-item:after{content: "";display: inline-block;*display: inline;*zoom:1;width: 100%;height: 1px;}

.un-left{
	display: inline-block;
	*display: inline;
	*zoom:1;
	vertical-align: middle;
}
.un-right{
    display: inline-block;
	*display: inline;
	*zoom:1;
	vertical-align: middle;
	margin-left: 2%;

}
.un-item em{font-size:14px;line-height: 22px;margin-bottom: 10px;display: block}
.un-left img{width:100%;}
.un-right img{width:100%;}
.un-item p{padding:0;text-align: left;font-size:26px;}
.un-item span {padding:0;text-align: left;font-size:16px;margin-top:20px;color:#7b7b7b;margin-bottom:25px;display: block;line-height: 32px;}
.un-item table{width:100%;}
.un-item tr{border-bottom:1px solid #fff;}
.un-item td,.un-item th{border-right:1px solid #fff;}
.un-item th{width:50%;height:40px;text-align:center;line-height:40px;background:#349fff;color:#fff;font-weight: bold;}
.un-item td{text-align: center;height: 40px;line-height: 40px;color:#333;}
.un-item tr:nth-child(odd){background:#afd3f3;}
.un-item tr:nth-child(even){background:#e5f1fb; }
.un-img{width: 57%;}
.un-test{width: 40%;}

@media screen and (max-width: 750px) {

	.un-banner{
		height: 400px;
		overflow: hidden;
		 img{height: 100%;width: auto;}
	}
	.un-item{
		padding: 20px 0
	}
	.un-img{
		width: 100%;
		text-align: center;
	}
	.un-test{
		width:auto;
		padding: 20px 20px 0 20px;
	}
}
</style>
