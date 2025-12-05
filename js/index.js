$(function(){
    

    $(".popup .bg a").on("click", function(e){
        e.preventDefault();
        $(".popup").css({display:"none"});
        $("body").removeClass("noS");
    });


    $(".navBtn").on("click",function(e){
        e.preventDefault();
        $("header nav .navIn").addClass("on");
    });
    $(".navIn>span").on('click',function(e){
        e.preventDefault();
        $("header nav .navIn").removeClass("on");
    });
    $(window).resize(function(){
        var w=$(this).width();
        if(w>=768){
            $(".navIn>span").click();
        }
    });

    $(window).on("scroll",function(){
        var t=$(this).scrollTop();
        // console.log(t);
        if(t>=2200){
            $(".section").addClass("on");
        }
        else{
            $(".section").removeClass("on");
        }
    });



    //web
    $("#web .tab li").on("click", function(e){
        e.preventDefault();
        $("#web .tab li").removeClass("on");
        $(this).addClass("on");


        var index = $(this).index(); // 변수 선언

        $("#web .swiper .swiper-slide").css({display: 'none'});
        // if
        if (index === 0){
            $("#web .swiper .swiper-slide").css({display: 'block'});
        }
        else if (index === 1){
            $("#web .swiper .swiper-slide.team").css({display: 'block'});
        }
        else if (index === 2){
            $("#web .swiper .swiper-slide.pre").css({display: 'block'});
        }
        else if (index === 3){
            $("#web .swiper .swiper-slide.mob").css({display: 'block'});
        }

        if (typeof swiper !== 'undefined' && swiper.update) {
            swiper.update(); // Swiper에게 레이아웃 업데이트를 지시
        }
        
    });

    // design
    $("#design .tab li").on("click", function(e){
        e.preventDefault();

        $("#design .tab li").removeClass("on")
        $(this).addClass("on");

        var index=$(this).index();

        $("#design .content").removeClass("on");
        $("#design .content").eq(index).addClass("on");

    });


    // img pop-up
    $("#design .content li").on("click", function(e){
        e.preventDefault();

        $("#design .content li").removeClass("pop");
        $(this).addClass("pop");
        $('body').addClass('noS');
    });

    $("#design .content").on("click", "li.pop a", function(e){
        e.preventDefault();
        e.stopPropagation();
        // 클릭 이벤트가 부모 li로 전달된ㄴ 것 방지

        $(this).closest("li").removeClass("pop");
        $('body').removeClass('noS');
    });

    $("#design .content .gif").on("click", function(e){
        e.preventDefault();
        $('li.gif .imgB').html('<img src="./img/design_09.gif" alt="img">');
    });
    $("#design .content").on("click", "li.gif.pop a", function(e){
        e.preventDefault();
        $('li.gif .imgB').html('<img src="./img/design_09.png" alt="img">');
    });




});