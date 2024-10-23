//서브메뉴 호버시 0.5초마다 올라갔다 내려감
$('.navi>li').mouseover(function() {
    $(this).find('.submenu').stop().slideDown(500);
}).mouseout(function(){
    $(this).find('.submenu').stop().slideUp(500);
});

//이미지 슬라이드 사진 0.5초마다 나타났다 사라짐
$('.imgslide a:gt(0)').hide(); //처음화면만 보이고 나머지(0번째보다 큰 것)을 숨겨.
 setInterval(function(){
    $('.imgslide a:first-child')
    .fadeOut(1000)
    .next('a')
    .fadeIn(1000)
    .end()
    .appendTo('.imgslide');
},3000);
