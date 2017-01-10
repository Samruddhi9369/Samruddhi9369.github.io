	$(window).load(function() {

      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(400).fadeOut("slow");

      });       

  	})


  	/*---------------------------------------------------- */
  	/* FitText Settings
  	------------------------------------------------------ */
  	setTimeout(function() {

   	$('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '64px' });

  	}, 100);

 $(document).ready(function() { 
	$('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
		
	$(".nav li a").click(function ( e ) {
		e.preventDefault();
		$(".nav li.active").removeClass("active"); //Remove any "active" class  
		$(this).parents("li").addClass("active"); //Add "active" class to selected tab  
		$("#navbar").removeClass("in"); //Hide dropdown  
		var hash = this.hash; 
		 $('html, body').stop().animate({
			scrollTop: $(hash).offset().top
		  }, 800, 'swing', function(){
			window.location.hash = hash;
		  });
	});
	
	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

		var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		  }, 800, 'swing', function () {
			window.location.hash = target;
		});

  	});
});

/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );