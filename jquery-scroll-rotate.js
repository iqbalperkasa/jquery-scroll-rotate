/* http://git.io/jqueryscrollrotate */

(function() {
	'use strict';
	$.fn.scrollRotate = function(opts) {
		// thanks david walsh - http://davidwalsh.name/vendor-prefix
		var prefix=function(){var a=window.getComputedStyle(document.documentElement,""),b=(Array.prototype.slice.call(a).join("").match(/-(moz|webkit|ms)-/)||""===a.OLink&&["","o"])[1];return"WebKit|Moz|MS|O".match(new RegExp("("+b+")","i"))[1],"-"+b+"-"}();

		// default options
		opts = $.extend({
			clockwise: true,
			speed: 0.5,
			smooth: true
		}, opts);

		// get window, and target thing
		var target = $(this);

		// to clockwise or not to clockwise
		var getClockWise = (opts.clockwise === true) ? '+' : '-';

		// to smooth or not to smooth
		opts.smooth = (opts.smooth === true) ? 0.4 : 0;

		// rotate that thing baby
		$(window).scroll(function() {
			var deg = getClockWise + $(window).scrollTop() * opts.speed;
			var transition = (opts.smooth !== 0) ? ';transition:' + opts.smooth + 's linear' : '';
			target.attr('style', prefix + 'transform:rotate(' + deg + 'deg)' + transition);
		});
	};
})();