$( document ).ready(function() {

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