function goTo(element) {
	jQuery('html, body').animate({
		scrollTop: (jQuery(element).offset().top) - 170
	}, 500, function() {});
}

jQuery(function() {
	$("#menu-toggle").click(function(e){
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
	});
	$(document).ready(function() {
		$('.chaffle').chaffle({
			speed: 20,
			time: 140
		});
	});
});
