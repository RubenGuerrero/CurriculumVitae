var App = (function(){
    "use strict";

    var init = function(){
        var header  = $("header"),
            headerPosition = header.position().top,
            headerHeight = header.height(),
            headerBottom = headerPosition + headerHeight

        var nav = $("nav");

        console.log(headerBottom);
        $(document).scroll(function(e){
            var top = $(document).scrollTop();
            if(top >= headerBottom){
                nav.fadeIn();
            }else{
                nav.fadeOut();
            }
        });
    }

    return {
        init: init
    }
})($);

$(function(){
    App.init();
})