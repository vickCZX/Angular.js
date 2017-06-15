$(function () {

    /*1.获取当前导航条距离窗口的y值*/
    var nav_top = $('.nav').offset().top;

    /*2.监听窗口的滚动*/
    $(window).on('scroll',function () {

        /*2.1 获取当前滚动的top方向偏移量*/
        var scroll_top = $(window).scrollTop();

        /*2.2 如果滚动的偏移量大于导航距离顶部的高度*/
        if (scroll_top > nav_top) {

            /*2.2.1 把导航的定位设置为fixed*/
            $('.nav').css({
                'position':'fixed',
                'top':0,
                'box-shadow':'0 1px 3px rgba(0, 0, 0, .3)'
            });

            /*2.2.2 把图片的透明度改为1,让其显示*/
            $('.nav img').css({opacity:1});

        }else {
            /*2.2.3 把导航的定位设置为absolute  */
            $('.nav').css({
                'position':'absolute',
                'top':nav_top,
                'border-bottom':'none',
                'box-shadow':'none'
            });
            
            /*2.2.4 把图片的透明度改为0,让其变透明*/
            $('.nav img').css({opacity:0});
        }

    });

    /*
     * 二.处理tab标签切换
     * */
    /*1.监听tab点击*/
    $('.header li').click(function () {
        $(this).addClass('cur').siblings().removeClass('cur');
        /*2.切换内容*/
        /*2.1 获取当前点击的角标*/
        var index = $(this).index();
        /*2.1 根据角标,查找到对应的内容*/
        $('.list_body').eq(index).addClass('active').siblings().removeClass('active');

    });

    /*
    * 三.处理返回顶部逻辑
    * */
     /*1.指定一个值*/
    var ori_num = 100;
     /*2.监听窗口滚动*/
    $(window).on('scroll',function () {
        /*2.1 如果当前滚动值大于窗口的高度, 让其显示否则隐藏*/
        var scroll_top  = $(window).scrollTop();
        console.log(scroll_top);
        if (scroll_top > ori_num) {
            $('.back_top').stop().fadeTo(200,1);
        }else {
            $('.back_top').stop().fadeTo(200,0);
        }

    });

     /*3.监听返回顶部点击*/
    $('.back_top').click(function () {
        /*3.1 让窗口滚动到顶部*/
        $('html body').animate({scrollTop:0});
    });


});


