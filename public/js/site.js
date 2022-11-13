$( document ).ready(function() {

    // $('.titles').text("Ever since middle school in my small town of less than 1,200 people, I was the computer guy. In the age of Napster, being the computer guy came with its advantages. Students would give me a list of their favorite songs, I would, in turn, go to Napster —> Find their favorite songs —> Burn the CD —> Make $15. Repeat. Fast forward to high school, I was always up-to-date with the latest Nokia, Motorola or Kyocera cellphone.");

    fetch("https://www.kevinharrell.com/footer")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });

    $('#projectSelection').on('change', function(){
    	var selectValue = $(this).val();
        console.log(selectValue);
        $('#hobby').removeClass('hide');
        $('#freelance').removeClass('hide');
        $('#hobby').parent().removeClass('hide');
        $('#freelance').parent().removeClass('hide');
        $("#alert").removeClass('showAlert');
        if (selectValue == 'hobby') {
            $('#hobby').addClass('show-flex');
            $('#freelance').addClass('hide');
            $('#freelance').parent().addClass('hide');
        }
        else if (selectValue == 'freelance') {
            $('#freelance').addClass('show-flex');
            $('#hobby').addClass('hide');
            $('#hobby').parent().addClass('hide');
        }
        else if (selectValue == 'all') {
            $('#hobby').addClass('show-flex');
            $('#freelance').addClass('show-flex');
        }
        else {
            $("#projectSelection").val('all');
            $("#alert").addClass('showAlert');
        }
    });

    jQuery(function($) {
    var path = window.location.href; 
    $('#quickSelectionLinks a').each(function() {
        if (this.href === path) {
        $(this).addClass('deactivated');
        $(this).children('#control').addClass('lightGrey');
        $(this).children('.prompt').addClass('lightGrey');
        $(this).children('#control').children('.itemTag').children('.projectTag').css('color', '#848181');
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