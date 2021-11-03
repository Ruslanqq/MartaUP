$(function () {

	$('.header-sleder').slick({
		arrows:false,
		vertical:true,
		dots:true,
		dotsClass:'header-dots',
		autoplay:2000,
	});

	$('.manu__btn').on('click', function(){
			$('ul.manu__list').slideToggle();

		});




});

	function slowScroll(id) {
		$('html,body').animate({
				scrollTop: $(id).offset().top
		}, 700)	;
		}
        
    

     