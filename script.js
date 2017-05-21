$(document).ready(function() {
	updateMain(true);
});

$(window).resize(function() {
	updateMain(false);
});

function settings() {
	$('.container img').click(function() {
		$(this).hide();
	});
}