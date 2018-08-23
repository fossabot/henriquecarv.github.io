(function($) {
	$(document).ready(function() {
		(function(i, s, o, g, r, a, m) {
			i['GoogleAnalyticsObject'] = r;
			(i[r] =
				i[r] ||
				function() {
					(i[r].q = i[r].q || []).push(arguments);
				}),
				(i[r].l = 1 * new Date());
			(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
			a.async = 1;
			a.src = g;
			m.parentNode.insertBefore(a, m);
		})(
			window,
			document,
			'script',
			'https://www.google-analytics.com/analytics.js',
			'ga'
		);

		ga('create', 'UA-89548159-1', 'auto');
		ga('send', 'pageview');

		var changeWidth = function() {
			var smallProfilePicture =
				'https://www.gravatar.com/avatar/45dc36c036a3034db00361897cd500f0.jpg?s=130';
			var bigProfilePicture =
				'https://www.gravatar.com/avatar/45dc36c036a3034db00361897cd500f0.jpg?s=170';
			if ($(window).width() < 480) {
				$('.btn')
					.removeClass('btn-lg')
					.addClass('btn-md');
				$('.img-fluid').attr('src', smallProfilePicture);
			} else {
				$('.btn')
					.removeClass('btn-md')
					.addClass('btn-lg');
				$('.img-fluid').attr('src', bigProfilePicture);
			}
		};

		changeWidth();
		$(window).resize(changeWidth);
	});
})(jQuery);
