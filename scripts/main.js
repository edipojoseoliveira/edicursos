jQuery(function () {
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 400) {
			$("#menu").addClass("main-navbar-diferente");
		} else {
			$("#menu").removeClass("main-navbar-diferente");
		}
	});
});

jQuery(document).ready(function() {
	jQuery("#subirTopo").hide();

	jQuery('a#subirTopo').click(function () {
		jQuery('body,html').animate({
			scrollTop: 0
		}, 800);
        return false;
   });

	jQuery(window).scroll(function () {
         if (jQuery(this).scrollTop() > 100) {
            jQuery('#subirTopo').fadeIn();
         } else {
            jQuery('#subirTopo').fadeOut();
         }
     });
});

$(document).ready(function(){
    $(".lazy").lazyload({effect : "fadeIn"});
});