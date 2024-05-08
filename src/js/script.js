const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});
const counters = document.querySelectorAll('.skills__ratings-counter'),
lines = document.querySelectorAll('.skills__ratings-line span');

console.log(counters);

counters.forEach((item, i) => {
    lines [i].style.width = item.innerHTML;

$(window).scroll(function() {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();			
		}
		else {
			$('.pageup').fadeOut();
		}
	});
	$("a[href^='#up']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	new WOW().init()
});
