'use strict';

// 用jQuery

// 对轮播图的大小图切换
$(function(){
	$(window).on('resize',function(){
		var windowWidth=$(window).innerWidth();
		var isSmallScreen=windowWidth<768;

		$("#wrappder_list>.carousel-inner>.item").each(function(i,item){
				// 因为item是一个DOM元素，要转成$
		var $item=$(item);
		var srcimage=isSmallScreen?'iamge-xs':'image-lg';
		$item.css('backgroundImage','url("'+$item.data(srcimage)+'")');
		$item.empty();
		if(isSmallScreen){
		$item.append('<img src="'+$item.data(srcimage)+'">');
		}

		});
	}).trigger('resize');
})

// 提示工具需要手动初始化插件
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})

//当屏幕变小的时候，标签页横向滚动
$(function(){
	//获取元素，容器下面的ul,给容器是为了滚动条
	// 获取下面所有li子元素进行遍历，获取的宽度相加，便是ul的宽，自动生成
	$(window).on('resize',function(){
	var $navbox=$('.nav-box>ul');
	var sum=30;//因为原先ul有一个padding-left：30px
	$navbox.children('li').each(function(i,elem){
		var $elem=$(elem);
		sum+=$elem.width();
	});
	// 判断容器的宽是不是超出屏幕的宽,超出就设置宽度和横向滚动条
		if($(window).width()<sum){
		$navbox.css('width',sum)
		.parent().css('overflow-x','scroll');
	}
}).trigger('resize');

})

$(function(){
// 获取要改写的div,获取li元素下面的a,再点击改变标签栏时
// 获取a里面的自定义属性的值,再点击改变标签栏时切换
// 改写div里面的内容
var $elema=$('#news .nav>li>a');
var $div=$('.new-title');
// console.log($div.text());
$elema.on('click',function(){
	
	$div.text($(this).data('title'));


})



})