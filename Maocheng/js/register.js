//鼠标移入效果
$(".ai").mouseenter(function(){
	$(this).css("color","#32CD32")
})
$(".ai").mouseleave(function(){
	$(this).css("color","#000")
})

$(".btn").click(function(){
	alert("登录成功")
	location.href="index.html"
})
