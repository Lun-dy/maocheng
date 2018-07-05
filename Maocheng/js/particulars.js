//导航
$(".nav2 a").mouseenter(function(){
	$(this).css("color","#68BB00")
})
$(".nav2 a").mouseleave(function(){
	$(this).css("color","#000")
})
//  返回顶部
$(".ding").click(function(e){
	e.stopPropagation();
	$("html,body").animate({scrollTop : 0 },800);
	
})
//鼠标移入效果
$(".ai").mouseenter(function(){
	$(this).css("color","#32CD32")
})
$(".ai").mouseleave(function(){
	$(this).css("color","#000")
})
//左侧导航移入效果
$(".yiru").mouseenter(function(){
	$(".yiru1").css("display","block")
})
$(".yiru").mouseleave(function(){
	$(".yiru1").css("display","none")
})

//图片切换
$("#bottom li").mouseover(function(){
		var index = $(this).index();
		$("#small img").eq(index).show().siblings("img").hide();
	})