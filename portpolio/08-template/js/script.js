//서브메뉴 호버시 0.5초마다 올라갔다 내려감
$('.navi>li').mouseover(function() {
    $(this).find('.submenu').stop().slideDown(500);
}).mouseout(function(){
    $(this).find('.submenu').stop().slideUp(500);
});