
$(document).ready(function(){
	$('.icon-menu').click(function(event){
		$('.icon-menu,.menu__body').toggleClass('_active');
		$('body').toggleClass('_lock');
	});
});
var mainSlider = new Swiper('.main-slider__container',{
	loop: true,

	pagination:{
		el: '.main-slider__pagination',
		clickable: true,
	}
});

var aboutSlider = new Swiper('.slider-about__container',{
	loop: true,

	slidesPerView: 'auto',
});