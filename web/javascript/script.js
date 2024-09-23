$('.navi>li').mouseover(function(){
    $(this).find('.submenu').stop().slideDown(500);
}).mouseout(function(){
    $(this).find('.submenu').stop().slideUp(500);
});

$('.imgslide a:gt(0)').hide();
setInterval(function(){
    $('.imgslide a:first-child').fadeOut()
    .next('a').fadeIn()
    .end().appendTo('.imgslide');},3000); /*1번 없어지고, 다음 1번되고, 밑으로 계속 추가*/

    $('.tabmenu>li>a').click(function(){ /*지금의 부모인 li에게 add, 이벤트발생 이전 것(다른 li)에 remove*/
        $(this).parent().addClass("active").siblings().removeClass("active");
    }); /*누른 li제외 나머지 li들에 active remove*/

    $(".notice li:first").click(function(){
        $("#modal").addClass('active');
    });

    $(".btn").click(function(){
        $("#modal").removeClass('active');
    });

