$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    $(".parallax-zoom-blur svg").css({
        width: (100 + scroll/5) + "%",
        top: -(scroll/10) + "%",
        "-webkit-filter": "blur("+ (scroll/100) +"px)",
        filter: "blur("+ (scroll/100) +"px)"
    })
})