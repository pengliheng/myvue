var timer = null;
$(document).ready(function () {
    $("#immersive_slider").immersive_slider({
        container: ".main",
        animation: "fade",
        autoStart: false
    });
    swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        initialSlide :0,
        loop:false,
        grabCursor: true,
        autoplay: 10000
    });

    cert_swiper = new Swiper('.swiper-cert-container', {
        pagination: '.swiper-cert-pagination',
        paginationClickable: true,
        initialSlide :0,
        noSwiping : true,
    });
});

/*anim-init.js*/
$(function() {
    // 初始化动画
    if (window.RevealAnimation) {
        window.revealAnimation = new RevealAnimation();
    }
    // 初始化 （产品 - 菜单栏）hover动画效果
    Array.prototype.forEach.call(document.querySelectorAll('.zy_menu_item a'), function(element) {
        new WaveEffect(element);
    });

    // 移动端菜单按钮 绑定事件
    $('#mobile_toggle_4').on('tap', function() {
        var menu = $($(this).data('menu'));
        if (menu.hasClass('opened')) {
            menu.removeClass('opened');
        } else {
            menu.addClass('opened');
        }
    })
});
