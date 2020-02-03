(function($){
  var edfus = window.edfus || {};
  // Search
  var $searchWrap = $('#search-form-wrap'),
    isSearchAnim = false,
    searchAnimDuration = 200;

  var startSearchAnim = function(){
    isSearchAnim = true;
  };

  var stopSearchAnim = function(callback){
    setTimeout(function(){
      isSearchAnim = false;
      callback && callback();
    }, searchAnimDuration);
  };

  $('#nav-search-btn').on('click', function(){
    if (isSearchAnim) return;

    startSearchAnim();
    $searchWrap.addClass('on');
    stopSearchAnim(function(){
      $('.search-form-input').focus();
    });
  });

  $('.search-form-input').on('blur', function(){
    startSearchAnim();
    $searchWrap.removeClass('on');
    stopSearchAnim();
  });

  // Share
  var clipboard = new ClipboardJS('.article-share-link');

  clipboard.on("success", function (e) {
    $('.article-share-success').show();

    setTimeout(function () {
      $('.article-share-success').fadeOut()
    }, 4000 )
    
    console.log("复制成功");
  });

  //smooth-scroll
  var scroll = new SmoothScroll('a[href*="#"]', {
      topOnEmptyHash: true, // Scroll to the top of the page for links with href="#"
      speed: 300, // Integer. Amount of time in milliseconds it should take to scroll 1000px
      speedAsDuration: true, // If true, use speed as the total duration of the scroll animation
  });

    edfus.goToTop = function() {
        const min = 300;
        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > min) { 
                $('a.gotop').addClass('show');
            } else {
                $('a.gotop').removeClass('show');
            }
        });
    };
    $(document).ready(function(){edfus.goToTop()});

  // Caption
  $('.article-entry').each(function(i){
    $(this).find('img').each(function(){
      if ($(this).parent().hasClass('fancybox')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox){
    $('.fancybox').fancybox();
  }

  // Mobile nav
  var $container = $('#container'),
    isMobileNavAnim = false,
    mobileNavAnimDuration = 200;

  var startMobileNavAnim = function(){
    isMobileNavAnim = true;
  };

  var stopMobileNavAnim = function(){
    setTimeout(function(){
      isMobileNavAnim = false;
    }, mobileNavAnimDuration);
  }

  $('#main-nav-toggle').on('click', function(){
    if (isMobileNavAnim) return;

    startMobileNavAnim();
    $container.toggleClass('mobile-nav-on');
    stopMobileNavAnim();
  });

  $('#wrap').on('click', function(){
    if (isMobileNavAnim || !$container.hasClass('mobile-nav-on')) return;

    $container.removeClass('mobile-nav-on');
  });

//border
$(window).load(function(){
  var heightOfArticle = $('.article-inner').height();
if(!($('.article-inner').hasClass('index-page'))){
  if($('.article-inner').hasClass('toc-on')){
    var heightOfToc = ($('#toc').height() / heightOfArticle) * 100 + 2;   
    $('.article-inner').append('<style>.article-inner.toc-on:before{height:'+heightOfArticle+'px;'+' background: linear-gradient(#2AB8FF 0%, #fff '+heightOfToc+'%, #EAEAEA 75%, #CFCFCFaf 88%, transparent 100%)');
  }else{
    $('.article-inner').append('<style>.article-inner:before{height:'+heightOfArticle+'px}</style>');
  }
}
});

//footer固定在最下（当页面内容小于window高度时
lrFixFooter("footer#footer"); //调用方法：lrFixFooter("div.footerwarp"); 传入底部的类名或者ID名

function lrFixFooter(obj){
var footer = $(obj),doc = $(document);
function fixFooter(){
if(doc.height()-4 <= $(window).height()){
footer.css({
width:"100%",
position:"absolute",
left:0,
bottom:0
});
}else{
footer.css({
position:"static"
});
}
}
fixFooter();
$(window).on('resize.footer', function(){
fixFooter();
});
$(window).on('scroll.footer',function(){
fixFooter();
});

}
})(jQuery);


