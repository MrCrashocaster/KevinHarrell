$( document ).ready(function() {

    if ($(window).width() <= 768) {
        $('.target').addClass('display-none');
        $('.buttonItem').addClass('btn');
        $('.btn-hover').removeClass('btn-hover');
    }

    if ($(window).width() >= 768) {
        $('.target').removeClass('display-none');
        $('.buttonItem').removeClass('btn');
        $('.btn-hover-2').addClass('btn-hover');
    }
    

    $(window).resize(function() {
        var desktop = document.getElementById("headline-2");
        var mobile = document.getElementById("headline-2-mobile");
    
        if ($(window).width() <= 768) {    
            $('.target').addClass('display-none');
            $('.buttonItem').addClass('btn');
            $("#control").css({ 'color' : '$darkGrey'});
            $('.btn-hover').removeClass('btn-hover');
        }

        if ($(window).width() >= 768) {
            $('.target').removeClass('display-none');
            $('.buttonItem').removeClass('btn');
            $('.btn-hover-2').addClass('btn-hover');
        }
    
        desktop.classList.remove("animate__fadeIn");
        mobile.classList.remove("animate__fadeIn");
    });
});





