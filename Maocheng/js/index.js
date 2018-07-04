//导航
$(".nav2 a").mouseenter(function(){
	$(this).css("color","#68BB00")
})
$(".nav2 a").mouseleave(function(){
	$(this).css("color","#000")
})

//轮播
var $ulist = $(".lunbo ul li"),
    $olist = $(".lunbo ol li"),
    index = 0,
    timer = null;
    timer = setInterval( autoPlay , 4000 );
    function autoPlay(){
    	index ++ ;
    	if( index == $olist.size() ){
    		index = 0;
    	}
    	$olist.eq(index).addClass("current").siblings().removeClass("current");
    	$ulist.eq(index).fadeIn(1000).siblings().fadeOut(1000);
	}
	    $olist.mouseover(function(){
		clearInterval(timer);
		index = $(this).index()-1;
		autoPlay();
	})
	
	    $olist.mouseout(function(){
		timer = setInterval( autoPlay,1500 );
	})
	    
$(".dapai1 ul li").mouseenter(function(){
	$(this).css("opacity",0.8)
})
$(".dapai1 ul li").mouseleave(function(){
	$(this).css("opacity",1)
})

//推荐轮播
var $ulst = $(".tuijian2 ul li"),
    	$olst = $(".tuijian2 ol li"),
    	idex = 0,
    	tmer = null;
    tmer = setInterval( autoPay , 4000 );
    function autoPay(){
    	idex ++ ;
    	if( idex == $olst.size() ){
    		idex = 0;
    	}
    	$olst.eq(idex).addClass("active").siblings().removeClass("active");
    	$ulst.eq(idex).animate({left:0},1000,function(){
    		$(this).css("zIndex",0).siblings().css({ "zIndex":1,"left":241 })
    	})
    }
     $olst.mouseenter(function(){
    	clearInterval(tmer);
    	idex = $(this).index()-1;
    	autoPay();
    }).mouseleave(function(){
    	tmer = setInterval( autoPay , 2000 );
    })
    
//鼠标移入效果
$(".im").mouseenter(function(){
	$(this).css("opacity",0.8)
})
$(".im").mouseleave(function(){
	$(this).css("opacity",1)
})
$(".ai").mouseenter(function(){
	$(this).css("color","#32CD32")
})
$(".ai").mouseleave(function(){
	$(this).css("color","#000")
})


//嘀嗒猫轮播
var $ust = $(".dida4 ul li"),
    	$ost = $(".dida4 ol li"),
    	idx = 0,
    	tme = null;
    tme = setInterval( autoPy , 4000 );
    function autoPy(){
    	idx ++ ;
    	if( idx == $ost.size() ){
    		idx = 0;
    	}
    	$ost.eq(idx).addClass("active").siblings().removeClass("active");
    	$ust.eq(idx).animate({left:0},1000,function(){
    		$(this).css("zIndex",0).siblings().css({ "zIndex":1,"left":-241 })
    	})
    }
     $ost.mouseenter(function(){
    	clearInterval(tme);
    	idx = $(this).index()-1;
    	autoPy();
    }).mouseleave(function(){
    	tme = setInterval( autoPy , 2000 );
    })
    
//  返回顶部
$(".ding").click(function(e){
	e.stopPropagation();
	$("html,body").animate({scrollTop : 0 },800);
	
})


//左侧楼梯
var $fs = $(".gao");
	var $fNav = $("#LoutiNav li:not(.last)");
	var flag = true;
	$fNav.click(function(){
		
		flag = false;
		
		$(this).find("span")
			   .addClass("active")
			   .end()
			   .siblings()
			   .find("span")
			   .removeClass("active");
		
		var index = $(this).index();
		
		var t =  $fs.eq(index).offset().top;
		
		$("html,body").animate({"scrollTop" : t},1000,function(){
			
			flag = true;
		});
	})
	
	$(".last").click(function(){
		flag = false;
		$("html,body").animate({"scrollTop" : 0},1000,function(){
			flag = true;
		});
	})
	
	
	
	$(window).scroll(function(){
	var $xiaoshi = $(document).scrollTop();
	if($xiaoshi<500){
		$("#LoutiNav").css("display","none")
	}else{
		$("#LoutiNav").css("display","block")
	}

	})
	
	
//	ajax获取JSON
// window.onload = function(){
//		$.ajax({
//			type:"get",
//			url:"index.json?id="+new Date().getTime(),
//			async:true,
//			success : function(json){
//				var listStr = "";
//				for( var i in json ){
//					for( var j in json[i].list ){
//						var pro = json[i].list[j]; 
//						listStr += `<li>
//	       			              <a href="#"><img src="img/${pro.src}" class="im"></a>
//	       			              <a href="#" class="ai">${pro.cname}</a>
//	       			              <a href="#">${pro.jia}</a>
//	       			              <a href="#">${pro.yuanjia}</a>
//	       			              <a href="#"><img src="img/${pro.che}"></a>
//	       		                  </li>`
//					}
//				}
//				$(".aja").html( listStr );
//			}
//	  });
//  