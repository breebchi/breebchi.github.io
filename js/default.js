$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

  vpw = $(window).width();
    vph = $(window).height();

    $('.full-page').height(vph);

 $(document).ready(function(){
	    // Add smooth scrolling to all links
	    $("#cv").on('click', function(event) {

	      // Make sure this.hash has a value before overriding default behavior
	      if (this.hash !== "") {
	        // Prevent default anchor click behavior
	        event.preventDefault();

	        // Store hash
	        var hash = this.hash;

	        // Using jQuery's animate() method to add smooth page scroll
	        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	        $('html, body').animate({
	          scrollTop: $(hash).offset().top
	        }, 800, function(){
	     
	          // Add hash (#) to URL when done scrolling (default click behavior)
	          window.location.hash = hash;
	        });
	      } // End if
	    });
	   });
