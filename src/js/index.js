	
//轮播上的列表
$(".lists li").each(function(index){
	$(".lists li").eq(index).mouseover(function(){
		$(".lists li").css('background-color','');
		$(".lists img").hide();
		$(".lists div").hide();
		$(this).css('background-color','#185');
		$(".lists img").eq(index).show();
		$(".lists div").eq(index).show();
	})
})
$(".lists li").mouseout(function(){
	$(".lists img").hide();
	$(".lists div").hide();
	$(".lists li").css('background-color','');
})



//切换城市1

	$(".tabcitys").click(function(e){
		e.preventDefault();
		$(".citybox").show();
	});
	$(".close").click(function(){
		$(".citybox").hide();
	});
	//遍历字母
	$("#zimu span").each(function(index){
		$(this).click(function(){
			$("#zimu span").css('border','none').css('border-bottom','1px solid #d9d9d9').css('color','#000');
			$(this).css('border','1px solid #d9d9d9').css('border-bottom','none').css('color','red');
			$("#city").html('');
			$.get('../data/citys.json',{},function(data){
				for(var i=0;i<data.length;i++){
					var a = data[i].pinyin;
					var b = data[i].name;	
					if(a.charAt(0)==$("#zimu span").eq(index).html()){
						$("#city").append($("<span>"+b+"</span>"));
						$("#city span").click(function(){
							$(".add").html($(this).html());
							$(".add2").html($(this).html());
							$(".citybox").hide();
						})
					}
				}
			},'json');
		});
	});
	//遍历热门
	$(".citys-lis span").each(function(){
		$(this).click(function(){
			$(".add").html($(this).html());
			$(".add2").html($(this).html());
			$(".citybox").hide();
		})
	});

//切换城市2
/*
$("#a1111").click(function(){
	console.log(1);
	$(".citybox2").show();
});
$(".close").click(function(){
	$(".citybox2").hide();
});

//遍历字母
	$("#zimu2 span").each(function(index){
		$(this).click(function(){
			$("#zimu2 span").css('border','none').css('border-bottom','1px solid #d9d9d9').css('color','#000');
			$(this).css('border','1px solid #d9d9d9').css('border-bottom','none').css('color','red');
			$("#city2").html('');
			$.get('../data/citys.json',{},function(data){
				for(var i=0;i<data.length;i++){
					var a = data[i].pinyin;
					var b = data[i].name;	
					if(a.charAt(0)==$("#zimu2 span").eq(index).html()){
						$("#city2").append($("<span>"+b+"</span>"));
						$("#city2 span").click(function(){
							$(".add").html($(this).html());
							$(".add2").html($(this).html());
							$(".citybox2").hide();
						})
					}
				}
			},'json');
		});
	});
	//遍历热门
	$(".citys-lis span").each(function(){
		$(this).click(function(){
			$(".add").html($(this).html());
			$(".add2").html($(this).html());
			$(".citybox2").hide();
		})
	});*/

//分页
	for (var i = 1; i < 11; i++) {
		var span = $("<span class='fenye'>"+i+"</span>");
		span.appendTo($(".huanye"));
	}
	var span1 = $("<span>下一页</span>");
	span1.appendTo($(".huanye"));
	var span2 = $("<span>上一页</span>");
	span.insertBefore(span2);


//输入框聚焦时
	$(".txt").focus(function(){
		$(".bot-box").show();
	});
	$(".txt").blur(function(){
		$(".bot-box").hide();
	});

	$(".order li").each(function(index){
		$(".order li").eq(index).click(function(){
			$(".order li").css('background-color','#f7f7f7').css('border-right','').css('color','#666');
			$(this).css('background-color','#fff').css('color','#185').css('border-right','1px solid #d6d6d6').css('border-left','1px solid #d6d6d6');
		})
	});


//登录
	$(".dl").click(function(){
		$("#dl-wrap").show();
		$("#focu").focus();
	});
	$(".close00").click(function(){
		$("#dl-wrap").hide();
	});

//注册
	$(".zc").click(function(){
		$("#zc-wrap").show();
	});
	$(".close11").click(function(){
		$("#zc-wrap").hide();
	});

//我的订单
	$(".dd").click(function(){
		$("#dd-wrap").show();
	});
	$(".close22").click(function(){
		$("#dd-wrap").hide();
	});
//客户服务
	$(".user").mouseover(function(){
		$(".sub").show();
	});
	$(".sub").mouseout(function(){
		$(this).hide();
	});
//投诉
	$(".ts").click(function(){
		$("#ts-wrap").show();
	});
	$(".close33").click(function(){
		$("#ts-wrap").hide();
	});

//获取店铺数据
	$.get('../data/1.json',{},function(data){
		for(var i=0;i<data.shop_data.length;i++){
			var img = data.shop_data[i].shop_ico;
			var name = data.shop_data[i].shop_name;
			var main = data.shop_data[i].main;	
			var add = data.shop_data[i].addr;
			var add2 = data.shop_data[i].shop_addr;
			var lev = data.shop_data[i].level;
			var pec = data.shop_data[i].shop_visit;
			var p8 = data.shop_data[i].order_count;
			var ul = $("<ul><li class='sh1'><img src='"+img+"' /></li><li class='sh2'><p class='s1'>"+name+"<span>&emsp;店铺等级："+lev+"</span></p><p class='s2'>主营："+main+"</p><span class='s3'>地址："+add+"</span><span class='s4'>人气："+pec+"次浏览</span></li><li class='sh3'><a href='"+add2+"'>进入店铺</a></li></ul>")	
			ul.appendTo($(".dianpu"));
			//鼠标移入
			ul.on("mouseover",function(){
	            $(this).children().last($("li")).show();
	            $(this).css("background","#eee");
			})
			//鼠标移出			
			ul.on("mouseout",function(){
	            $(".sh3").hide();
	            $(this).css("background","");
			})

			$("<ul><li class='sho1'>"+(i+1)+"</li><li class='sho2'><img src='"+img+"' /></li><li class='soo1'><p>"+name+"</p><p>"+p8+"条评论</p></li></ul>").appendTo($(".shop-right"));
			if(i<3){
	            $(".sho1").css("color","#fc6621").css("border","2px solid #fc6621");
			}
		}
	},'json')

$(document).on('scroll',function(){
    var _top = $(document).scrollTop();
	if (_top >= 100) {
		$(".returnToTop").show();
	}else{
		$(".returnToTop").hide();
	}
});

//返回顶部
$(".returnToTop").click(function () {
    var speed=200;//滑动的速度
    $('body,html').animate({ scrollTop: 0 }, speed);
    return false;
});


