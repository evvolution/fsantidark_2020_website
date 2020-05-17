$(document).ready(function() {
    initMainview()
    initSize();
});

function initMainview(){
    $('#fullpage').fullpage({
        navigation: true,//是否显示导航，默认为false
		navigationPosition: 'right',//导航小圆点的位置
    });
}

function initSize(){
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    if(winWidth >= 1300){
        $("html").css({fontSize: winWidth / 1920 * 100 + "px"});
        $("body").css({height: winHeight});
    }
    else{
        $("html").css({fontSize: 1300 / 1920 * 100 + "px"});
        $("body").css({height: 639+"px"});
    }
}