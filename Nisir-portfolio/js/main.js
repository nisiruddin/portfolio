// Skills section
!(function($) {
 "use strict";

	$('.skills-content').waypoint(function() {
		   $('.progress .progress-bar').each(function() {
		      $(this).css("width", $(this).attr("aria-valuenow") + '%');
		    });
		  }, {
		    offset: '80%'
		  });
	$('.js-scroll-sticky').waypoint(function(direction){
		if (direction == "down"){
			$("nav").addClass("sticky");
		} else {
			$("nav").removeClass("sticky");
		}
	});
})(jQuery);