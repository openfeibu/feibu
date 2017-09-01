  $(function(){
  	var caselis =$('.case-ul li');
    //ol
  	var detaillis = $('.case-detail');

    var  caseItem = $('.case-item');
    // console.log(caseItem);
    //切换标签
  	caselis.click(function(){
  			var index = $(this).index();
  			// console.log(index);
  			// console.log(this);
  			$(this).find('a').addClass('fon-hover').parent('li').siblings().find('a').removeClass('fon-hover');
  			detaillis.eq(index).addClass('detail-show').siblings().removeClass('detail-show');
  	})

      //  遮罩




  })

  // //轮播
   $(function(){
          var lis = $(".adiv a");
          var ims = $('.banner_item');

          var inow= 0,timer;
          lis.click(function () {
              inow = $(this).index();
  //            console.log(inow);
              ims.eq(inow).css("opacity","1");
              ims.eq(inow).siblings().css("opacity","0");
              // lis.eq(inow).addClass("banner_active").siblings().removeClass("banner_active");
          });
  //         //左点击
          $('.left').click(function () {
              inow--;
              if(inow<0){
                  inow = ims.length-1;
              }
              ims.eq(inow).css("opacity","1");
              ims.eq(inow).siblings().css("opacity","0");
              // lis.eq(inow).addClass('active').siblings().removeClass('active');

          });
  //         //右点击
          $('.right').click(function () {
  run2();
          });
  //         //自动轮播

         function run2(){
             inow++;
             if (inow>ims.length-1){
                 inow = 0;
             }
             ims.eq(inow).siblings().css("opacity","0");
             ims.eq(inow).css("opacity","1");
             // lis.eq(inow).addClass('banner_active').siblings().removeClass('banner_active');
         };
        var time= setInterval(run2,2000);
         $(".banner").hover(function(){
             clearInterval(time);
         }, function () {
             time = setInterval(run2,2000)
         })
      });

  //滑动==>导航变化
      $(function(){
         $(document).on('scroll',function(){
          var pos = $(window).scrollTop();
                  if(pos>5){
                    $('.head').removeClass('head-active1').addClass('head-active2');
                  }else if(pos<5){
                    $('.head').addClass('head-active1').removeClass('head-active2');
                  }
         })
      });


//窗口滚动
;(function($){
    var windowAnimate =function(options){
      var defaults = {
            distance:0
          };
      var fb = $.extend(defaults, options || {});
      var view_hei= $(window).height();
      $(window).on("resize",function(){
        //窗口发生变化的时候重新获取高度
        view_hei =  $(window).height();
      })
      $(window).on("scroll",function(){
       var pos = parseFloat($(window).scrollTop());
        for(var i = 0 ; i < fb.classNames.length; i++){
          if(pos > $("."+fb.classNames[i]).offset().top - view_hei + fb.distance){
                $("."+fb.classNames[i]).removeClass('rise').addClass('unrise');
          } 
        }
      })
    }
    // windowAnimate({
    //   classNames:['classfy','case','about'],
    //   distance:200
    // })
    window.windowAnimate = windowAnimate;
  
})($);

 windowAnimate({
      classNames:['classfy','case','about'],
      distance:100
})

/*滑动轮播*/
function lineTo(i){
    var canvasDiv= document.getElementsByClassName('cvs')[i];
    
          var cvs = canvasDiv.getContext("2d");
          //右边的线
          var line1 = new Anim({ //实例
          Node: cvs,
          color: "red",
          staX: 224,
          staY: 113,
          len: 0,
          timing: 2,
          num: 1,
          direc: true,
          lw: 3
          });
          line1.draw(); //执行绘制
          var line2 = new Anim({
          Node: cvs,
          color: "red",
          staX: 224,
          staY: 110,
          len: 223,
          timing: 2,
          num: 1,
          direc: true,
          lw: 3
          });
          line2.draw();
          //左边的线
          var line3 = new Anim({
          Node: cvs,
          color: "red",
          staX: 2,
          staY: 110,
          len: 0,
          timing: 2,
          num: 1,
          direc: true,
          lw: 3
          });

          line3.draw();
          var line4 = new Anim({
          Node: cvs,
          color: "red",
          staX: 2,
          staY: 110,
          len: 223,
          timing: 2,
          num: 1,
          direc: true,
          lw: 3
          });
          line4.draw();
          //shang
          var line5 = new Anim({
          Node: cvs,
          color: "red",
          staX: 119,
          staY: 2,
          len: 0,
          timing: 2,
          num: 1,
          direc: false,
          lw: 3
          });
          line5.draw();

          var line6 = new Anim({
          Node: cvs,
          color: "red",
          staX: 119,
          staY: 2,
          len: 222,
          timing: 2,
          num: 1,
          direc: false,
          lw: 3
          });
          line6.draw();

          //下
          var line7 = new Anim({
          Node: cvs,
          color: "red",
          staX: 119,
          staY: 224.5,
          len: 224,
          timing: 2,
          num: 1,
          direc: false,
          lw: 4
          });
          line7.draw();
          var line8= new Anim({
          Node: cvs,
          color: "red",
          staX: 119,
          staY: 224,
          len: 0,
          timing: 2,
          num: 1,
          direc: false,
          lw: 4
          });
          line8.draw();

};
function clearCanvas(i)  
{   
 var canvasDiv= document.getElementsByClassName('cvs')[i];
var cvs = canvasDiv.getContext("2d");
    cvs.clearRect(0,0,canvasDiv.width,canvasDiv.height);  
}  