$(document).ready(function () {
       /* $('ul.nav > li').click(function (e) {
                console.log(e);
            //e.preventDefault();
            $('ul.nav > li').find(".active").removeClass('active');
            $(e.target).addClass('active'); 
               //return $(this).attr('id');
                return e.target;
        });
        
         $('ul.nav > li').click(function (e) {
                 console.log($(e.result).attr('id'));
                   // var lastId = "'#"+e.result+"'";
            //$(document.getElementById(lastId)).addClass('active'); 
                $(e.result).addClass('active'); 
               
        });            
        
        
        
        
      /*  $(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});*/
       
       
       /*$('.navbar a.navbar-link').click(function() {
    var navbar_toggle = $('.navbar-toggle');
    if (navbar_toggle.is(':visible')) {
        navbar_toggle.trigger('click');
    }
});*/
       
       
    
    });

   $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
