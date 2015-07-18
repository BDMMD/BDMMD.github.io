$(function(){
	$('.header-nav div').click(function(e) {
		//点击header-nav跳转到指定页面
		var current = $(e.currentTarget);
		swiper.slideTo(current.attr('data-value'));
		$('.header-nav div').removeClass('active');
		current.addClass('active');
	});
	
})