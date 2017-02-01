//$(document).ready(function () {
       /* $('ul.nav > li').click(function (e) {
                console.log(e);
            //e.preventDefault();
            $('ul.nav > li').removeClass('active');
            $(e.target).addClass('active'); 
               //return $(this).attr('id');
                return e.target;
        });
        
        jQuery(window).load(function () {
             $('ul.nav > li').click(function (e) {
                 console.log(e.result);
                    var lastId = "'#"+e.result+"'";
            $(document.getElementById(lastId)).addClass('active');  
        });      
        });
            /*$('ul.nav > li').click(function (e) {
                 console.log(e.result);
                    var lastId = "'#"+e.result+"'";
            $(document.getElementById(lastId)).addClass('active');  
        });            */
        
        */
        
        
        $(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});
   // });


