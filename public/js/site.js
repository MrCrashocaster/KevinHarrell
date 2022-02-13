$( document ).ready(function() {

    if ($(window).width() <= 768) {
        $('.target').addClass('display-none');
        $('.buttonItem').addClass('btn');
    }

    if ($(window).width() >= 768) {
        $('.target').removeClass('display-none');
        $('.buttonItem').removeClass('btn');
    }
    

    $(window).resize(function() {
        var desktop = document.getElementById("headline-2");
        var mobile = document.getElementById("headline-2-mobile");
    
        if ($(window).width() <= 768) {    
            $('.target').addClass('display-none');
            $('.buttonItem').addClass('btn');
            $("#control").css({ 'color' : '$darkGrey'});
        }

        if ($(window).width() >= 768) {
            $('.target').removeClass('display-none');
            $('.buttonItem').removeClass('btn');
        }
    
        desktop.classList.remove("animate__fadeIn");
        mobile.classList.remove("animate__fadeIn");
    });
});





