
import axios from 'axios'

const wxRequest = async(params = {}, url) => {
    let data = params.query || {};
    let res;
    if(params.method == 'POST'){
         res = await axios({
            url: url,
            method:'POST',
            data: data
        });
    }else{
         res = await axios({
            url: url,
            method: 'GET',
            params: data
        });
    }
    
    return res;
};

  // let env = "-test" //-dev 或者 -test
  // const apiMall = 'https://sujiefs.com/'
  const apiMall = 'https://api.feibu.info/'

  
  //const apiMall = 'https://api.tangxinmao.com/api/home/hostGoodsList'
  

  const getDiscoverList = (params) => wxRequest(params, apiMall + '/goods/list?cateidOne=1&cateidTwo=0&price=0&sales=2');
  
  //微信的jscode换取sessionKey
  const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/api/wechat/jscode2session");
  const user2session = (params) => wxRequest(params, apiMall + "/api/wechat/user2session?jsoncallback=?");
  
  //商品接口---begin
  //首页发现商品接口
  const hostGoodsList = (params) => wxRequest(params, apiMall + '/api/home/hostGoodsList');
  
  //查询广告列表
  const getAdList =   (params) => wxRequest(params, apiMall + 'banners');
  //查询首页动态列表
  const getHomeNews =  (params) => wxRequest(params, apiMall + 'page?cate_slug=news&recommend_type=home&limit=2'); 
  // https://api.myjson.com/bins/ge7db
  //查询新闻动态列表
  const getNews =  (params) => wxRequest(params, apiMall + 'page');
  //查询新闻动态详情
  const getNewDetail =  (params) => wxRequest(params, apiMall + 'page/'+params.param.path);
  //查询首页业务列表
  const getHomeBusiness =  (params) => wxRequest(params, apiMall + 'page?cate_slug=business&recommend_type=home&limit=2');
  //查询公司简介
  const getIntroduction =  (params) => wxRequest(params, apiMall + 'page/slug/company-intro');
  //查询业务列表
  const getBusiness =  (params) => wxRequest(params, apiMall + 'page?cate_slug=business');
  //查询招聘列表
  const getJoin =  (params) => wxRequest(params, apiMall + 'page-recruit');
  //查询案例TAB
  const getTab =  (params) => wxRequest(params, apiMall + 'page-category?pslug=case');
  //查询首页案例
  const getCase =  (params) => wxRequest(params, apiMall + 'page?cate_slug=case');
  //查询案例
  const getCaseList =  (params) => wxRequest(params, apiMall + 'page');
  //查询分类案例
  const getCaseDetail =  (params) => wxRequest(params, apiMall + 'page/'+params.param.path);
  //查询业务详情
  const getBusinessDetail =  (params) => wxRequest(params,apiMall + 'page/'+params.params.path); 
  //联系我们
  const getContact =  (params) => wxRequest(params, apiMall + 'page-contact'); 
  //查询合作伙伴
  const getLink =  (params) => wxRequest(params, apiMall + 'link'); 
  
  
  export default {
    hostGoodsList,
    wxJsCode2Session,
    user2session,
    getAdList,
    getHomeNews,
    getNews,
    getHomeBusiness,
    getBusiness,
    getIntroduction,
    getJoin,
    getTab,
    getCase,
    getCaseList,
    getBusinessDetail,
    getContact,
    getLink,
    getCaseDetail,
    getNewDetail
  }
  