	
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

//输入框聚焦时
	$(".txt").focus(function(){
		$(".bot-box").show();
		$("#uls").show();
		$(".txt").on('keydown',function(){
			$.ajax({
				url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+$(".txt").val(),
				type:'get',
				dataType:'jsonp',
				jsonp:'cb'
			})
			.done(function(data){
				$("#uls li").remove();
				console.log(data);
				var all = data.s.length;
				for (var i = 0; i < all; i++) {
					var lis = $('<li>'+data.s[i]+'</li>');
					lis.appendTo($("#uls"));
					
				}	
			})
		})
	});
	// 失焦时
	$(".txt").blur(function(){
		$(".bot-box").hide();
		$("#uls").hide();
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
//地图模式
$(".btn-mode-map").click(function(){
	$(".mengban").show();
});
$(".mengban").click(function(){
	$(this).hide();
});

//angular获取店铺数据
var app = angular.module('myApp', []);
app.controller('myController', ['$scope','$http',function($scope,$http){	
	$http.get('data/1.json').then(function(res){
		$scope.arr = res.data.shop_data;
		for (var i = 0; i < $scope.arr.length; i++) {
			$scope.arr[i].order_count=parseInt($scope.arr[i].order_count);
			$scope.arr[i].shop_visit=parseInt($scope.arr[i].shop_visit);
		}
	    //默认
	    $scope.rep = function(){
	        $scope.order = '';
	    }
		//按成交量
		$scope.top = function(){
	        $scope.order = '-order_count';
	        $scope.flag = true;
	    }
	    //按人气
	    $scope.hot = function(){
	        $scope.order = '-shop_visit';
	        $scope.flag = false;
	    }
	    //鼠标滑过显示
		$scope.show0 = function(){
			$(".lis").eq(this.$index).css("background","#fafafa");
			$(".shopping").eq(this.$index).show();
		}
		//鼠标滑出消失
		$scope.hide0 = function(){
			$(".lis").eq(this.$index).css("background","");
			$(".shopping").eq(this.$index).hide();
		}
		for(var i=0; i<$scope.arr.length;i++){
          	$scope.arr[i].num =1;
          }
	});
	
	$(".order li").each(function(index){
		$(".order li").eq(index).click(function(){
			$(".order li").css('background-color','#f7f7f7').css('border-right','').css('color','#666');
			$(this).css('background-color','#fff').css('color','#185').css('border-right','1px solid #d6d6d6').css('border-left','1px solid #d6d6d6');
		})
	});

	//数据
	$scope.shujuArr = ['data/1.json','data/2.json','data/3.json','data/4.json','data/5.json','data/6.json','data/7.json'];
	//点击分类列表


	//分页
	for (var i = 1; i < 11; i++) {
		var span = $("<span class='fenye'>"+i+"</span>");
		span.appendTo($(".huanye"));
	}
	var span1 = $("<p class='past'>下一页</p>");
	span1.appendTo($(".huanye"));
	var span2 = $("<p class='topy'>上一页</p>");
	span2.insertBefore($(".huanye span:first"));
	$(".huanye span:first").css("background","#FC6621").css("border-color","#FC6621").css("color","#fff")
	
	$scope.col = $(".huanye span");
	$scope.col.click(function () {
		for (var i = 0; i < $scope.col.length; i++) {
			$scope.col[i].index = i;
			//console.log($scope.col[0]);
			$scope.col.css({
				color:'#000',
				background:"#fff",
				borderColor:"#ccc"
			})
			$scope.col.attr('bol','false');
			if ($scope.col[i].index!=0) {
				$(".topy").show();
			}else{
				$(".topy").hide();
			}
		}  
		$(this).css({
			color:"#fff",
			background:"#FC6621",
			borderColor:"#FC6621"
		})
		$(this).attr('bol','true');
	})

}]);

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


