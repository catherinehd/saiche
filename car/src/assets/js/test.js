
(function() {

    function Ad() {
    }

    Ad.prototype.ad_func = function() {

    var ad = document.createElement("div");
    var wraper = document.createElement("div");
    var adimg1 = document.createElement("img");
    var adimg2 = document.createElement("img");
    var btngroup = document.createElement("div");
    ad.style.cssText = 'display:block; position:fixed; top: 0; background: white; width: 100%; height: 100%; opacity:1; color: #ddd; z-index: 999; transition: all 1s';
    adimg1.style.cssText = 'width:100%; '
    adimg1.src="http://tease.fancelue.com/scripts/ad/hm.ad2_1.png";
    adimg2.style.cssText = 'width:5100%;';
    adimg2.src="http://tease.fancelue.com/scripts/ad/hm.ad2.png";
    btngroup.style.cssText = "width:100%; text-align: center; position:fixed;";
    ad.className = 'swiper-container';
    btngroup.className = 'swiper-pagination';
    adimg1.className = 'swiper-slide';
    adimg2.className = 'swiper-slide';
    wraper.className = 'swiper-wrapper';
    wraper.appendChild(adimg1);
    wraper.appendChild(adimg2);
    ad.appendChild(wraper);
    ad.appendChild(btngroup);
    document.body.appendChild(ad);

    // 添加swiper插件
    new_element=document.createElement("script");
    new_element.setAttribute("type","text/javascript");
    new_element.setAttribute("src"," assets/js/swiper.min.js");
    document.body.appendChild(new_element);

    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination'
    });

    //跳转到主页
    adimg2.onclick = function() {
        setTimeout(function(){
          for (var i = 0; i<document.getElementsByClassName('swiper-container').length; i++) {
            document.getElementsByClassName('swiper-container')[i].style.opacity = '0';
            document.getElementsByClassName('swiper-container')[i].style.display = 'none';
          }
        }, 1000);
    };




     // cordova.InAppBrowser.open('http://www.baidu.com', '_blank', 'location=no,toolbar=no')

        return this;
    };

    window.Ad = Ad;

})(window);
