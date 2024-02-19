$(document).ready(function(){

    $('.open-hamburger').click(function(){
        $('nav').addClass('open');
        $('.close-hamburger').click(function(){
            $('nav').removeClass('open');
        });
    });

});