$(function(){
    //滚动条滚动一滚动则头部导航栏悬浮固定
    $(window).scroll(function() {
        var scroll_h=$(window).scrollTop();
        if(scroll_h>=0){
            $('body').addClass('fixed_header');
        }
        else{
            $('body').removeClass('fixed_header');
        }
    });
    //导航栏tab切换
    $('#bs-example-navbar-collapse-1').find('li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // $('li:has(ul)').click(function() {
    //     $(this).addClass('active').siblings().removeClass('active');
    // });
})
