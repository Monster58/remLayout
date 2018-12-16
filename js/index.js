$(function(){
   var $banner = $('.sn_banner');
   var width = $banner.width();
   var $imgBox = $banner.find('ul:first');
   var $pointBox = $banner.find('ul:last');
   var $pointList = $pointBox.find('li');
   var topbar = $('.sn_topBar');
   var animate = function(){
      $imgBox.animate({transform:'translateX('+-index*width+'px)'},function () {
         //   动画执行完的回调函数；
         if(index>=9){
            index = 1;
            $imgBox.css({transform: 'translateX('+-index*width+'px)'});
         } else if(index<=0){
            index = 8;
            $imgBox.css({transform: 'translateX('+-index*width+'px)'});
         }
         $pointList.removeClass('now').eq(index-1).addClass('now');
      });
   };
   var index = 1;
   var timer = setInterval(function () {
      index++;
      animate();
   },4000);
   $banner.on('swipeLeft',function(){
      index++;
      animate();
      console.log('next');
   });
   $banner.on('swipeRight',function(){
      index--;
      animate();
      console.log('prev');
   });
});