$(function () {
    var paixui=0;
    var paixui2=0
    $('#to-four').click(function () {
        $('.goods-list').css('display','block');
        $('.goods-list2').css('display','none');
        $(this).css('color','#fac371');
        $('#to-six').css('color','black')
    })

    $('#to-six').click(function () {
        $('.goods-list').css('display','none');
        $('.goods-list2').css('display','block');
        $(this).css('color','#fac371');
        $('#to-four').css('color','black')
    })

    $('.topaixu').click(function () {
        $('.topaixu').css('color','black');
        $(this).css('color','#fac371');
    })

    $('.gd-price').click(function () {
        if(paixui==0){
            $(".gd-price i").removeClass("fa-angle-up");
            $(".gd-price i").addClass("fa-angle-down");
            paixui=1;
        }
        else if(paixui==1){
            $(".gd-price i").removeClass("fa-angle-down");
            $(".gd-price i").addClass("fa-angle-up");
            paixui=0;
        }
    })

    $('.up-time').click(function () {
        if(paixui2==0){
            $(".up-time i").removeClass("fa-angle-up");
            $(".up-time i").addClass("fa-angle-down");
            paixui2=1;
        }
        else if(paixui2==1){
            $(".up-time i").removeClass("fa-angle-down");
            $(".up-time i").addClass("fa-angle-up");
            paixui2=0;
        }

    })

    $('.jijie').mouseover(function () {
        $('#choice-season').css('display','block')
    })
    $('.jijie').mouseout(function () {
        $('#choice-season').css('display','none')
    })
    $('.mianliao').mouseover(function () {
        $('#choice-fabric').css('display','block')
    })
    $('.mianliao').mouseout(function () {
        $('#choice-fabric').css('display','none')
    })
    
    $('#choice-season li').click(function () {
        $('.jijie span').text($(this).text());
        $('#choice-season').css('display','none')
    })

    $('#choice-fabric li').click(function () {
        $('.mianliao span').text($(this).text());
        $('#choice-fabric').css('display','none')
    })


    $('.cate-left ul li').mouseover(function () {
        $(this).css('transform','rotate(30deg)');
    })

    $('.cate-left ul li').mouseout(function () {
        $('.cate-left ul li').css('transform','rotate(0deg)');
    })

    $('.cate-left ul li').click(function () {
        $('.cate-left ul li').css('transform','rotate(0deg)');
        $(this).css('transform','rotate(30deg)');
    })
})