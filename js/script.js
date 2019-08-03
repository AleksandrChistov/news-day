$(function(){
	
	$('.toggle-menu').click(function(){
		var menu = $('.menu__list');
		if(menu.is(":hidden")) {
			$('.menu ul').show(500);
			$('.header-up').css('display', 'none');
			$('.menu').css({
				'background-color': '#f9f9f9',
				'width': '100%',
				'margin-top': '80px',
				'padding-bottom': '50px'
			});
			$('.header-center').css({'height': '100vh', 'overflow': 'scroll'}, {duration:500});
			$('.header-center_background').css('background-color', '#f9f9f9');
			$('.toggle-menu').css('background-image', 'url(img/icons/menu-close.png)');
			$('body').css({'position': 'fixed', 'width': '100%'});
		}else {
			$('.menu ul').css('display', '');
			$('.header-up').css('display', '');
			$('.menu').css({'background-color': '', 'width': '', 'margin-top': ''});
			$('.toggle-menu').css({'background': ''});
			$('.header-center').css({'height': '', 'overflow': ''});
			$('body').css('position', 'relative');
		}
	});

	window.addEventListener("resize", function() {
		var windowWidth = $(window).width();
		if( windowWidth >= 661 ) {
			$('.menu ul').css('display', '');
			$('.header-up').css('display', '');
			$('.menu').css({'background-color': '', 'height': '', 'width': '', 'margin-top': '', 'padding-bottom': ''});
			$('.toggle-menu').css({'background': ''});
			$('.header-center').css({'height': '', 'overflow': ''});
			$('body').css('position', 'relative');
		}
}, false);
	
});