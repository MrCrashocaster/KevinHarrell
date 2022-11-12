$( document ).ready(function() {

    jQuery(function($) {
    var path = window.location.href; 
    // because the 'href' property of the DOM element is the absolute path
    $('#quickSelectionLinks a').each(function() {
        if (this.href === path) {
        $(this).addClass('deactivated');
        $(this).children('#control').addClass('lightGrey');
        $(this).children('.prompt').addClass('lightGrey');
        }
    });
    });

    if ($(window).width() <= 768) {
        $('.target').addClass('display-none');
        $('.buttonItem').addClass('btn');
        $('#overlapText').removeClass('offWhite');
        $('#overlapText').addClass('darkGrey');
    }

    if ($(window).width() >= 768) {
        $('.target').removeClass('display-none');
        $('.buttonItem').removeClass('btn');
        $('#overlapText').addClass('offWhite');
        $('#overlapText').removeClass('darkGrey');
    }

    $('.fade-up, .fade-down, .fade-right, .fade-left').each(function() {
        var crrnt = $(this);
        if (crrnt.visible( true )) {
            crrnt.addClass('show');
        }
        else if (!crrnt.visible( true )) {
            crrnt.removeClass('show');
        }
    });
    

    $(window).resize(function() {
        var desktop = document.getElementById("headline-2");
        var mobile = document.getElementById("headline-2-mobile");
    
        if ($(window).width() <= 768) {    
            $('.target').addClass('display-none');
            $('.buttonItem').addClass('btn');
            $("#control").css({ 'color' : '$darkGrey'});
            $('#overlapText').removeClass('offWhite');
            $('#overlapText').addClass('darkGrey');
        }

        if ($(window).width() >= 768) {
            $('.target').removeClass('display-none');
            $('.buttonItem').removeClass('btn');
            $('#overlapText').addClass('offWhite');
            $('#overlapText').removeClass('darkGrey');
        }
    
        desktop.classList.remove("animate__fadeIn");
        mobile.classList.remove("animate__fadeIn");
    });

    $(window).on('scroll', function(){
        $('.fade-up, .fade-down, .fade-right, .fade-left').each(function() {
            var crrnt = $(this);
            if (crrnt.visible( true )) {
                crrnt.addClass('show');
            }
            else if (!crrnt.visible( true )) {
                crrnt.removeClass('show');
            }
        });
    });
});