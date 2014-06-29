$('.block div').each(function() {
	$(this).click(function() {
		$(this).css({
			'top': $(this).offset().top - $(window).scrollTop()
		});
		$(this).toggleClass('fixed');
	});
});

$('.block').each(function() {
	$(this).css('height', $(this).height());
});

$('hr').replaceWith('<div class="hr"></div>');