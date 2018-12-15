$(document).ready(function () {
    $('.carousel').carousel({
        interval: 3000
      })
    $('.carousel').carousel('cycle');
    // 返回頂端鍵
    $('.a-text').click(function(){
        $('html').animate({scrollTop:0}, 1000);
        return false;
    });
    // 返回首頁鍵
    $('#home-btn').click(function(){
        $('html').animate({scrollTop:0}, 1000);
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        return false;
    });
    // 前往自介
    $('#intro-btn').click(function(){
        $('html').animate({scrollTop: $('#intro').offset().top-50}, 1000);
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        return false;
    });
    // 前往經歷
    $('#exp-btn').click(function(){
        $('html').animate({scrollTop: $('#exp').offset().top-50}, 1000);
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        return false;
    });
    // 前往技能
    $('#skill-btn').click(function(){
        $('html').animate({scrollTop: $('#skill').offset().top-100}, 1000);
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        return false;
    });
    // 前往作品
    $('#works-btn').click(function(){
        $('html').animate({scrollTop: $('#works').offset().top-50}, 1000);
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        return false;
    });
    var trigger=false;
    $(window).scroll(function(){
        if(document.documentElement.scrollTop>=($('#intro').offset().top+(window.innerHeight/3)) &&document.documentElement.scrollTop< $('#skill').offset().top){
            $('.title').animate({opacity: 1}, 1000);
            $('.description').animate({opacity: 1}, 1000);
            console.log("in");
        }  
        if(document.documentElement.scrollTop>=($('#exp').offset().top+($('#exp').innerHeight()*3/4)) &&document.documentElement.scrollTop< $('#works').offset().top){
            if(!trigger){
                trigger=true;
                $('.progress-bar').each(function(){
                    var data=$(this).data('progress');
                    $(this).css('width',data+"%");
                    
                });
            }

        }    
       
    })
});
