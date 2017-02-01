$(document).ready(function () {
        $('ul.nav > li').click(function (e) {
                console.log(e);
            e.preventDefault();
            $('ul.nav > li').removeClass('active');
            $(this).addClass('active');                
        });            
    });
