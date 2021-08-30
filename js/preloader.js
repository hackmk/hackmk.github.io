jQuery(document).ready(function($) {  

    $(window).load(function(){
        $('#preloader').delay(800).fadeOut(1000,function(){$(this).remove();});
    });
    
});