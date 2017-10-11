var setBgAlpha = function(elem, alpha) {
    console.log(elem.style.backgroundColor);
}

var bannerWidth = 1080;
var bannerHeight = 580;
var maxWidth = 1600;
var startScale = 1.3;
var breakpoint = 1024/768;
var longScale = 2.5;
var shortScale = 3.2;

var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

$(document).ready(function() {
    $('.scrollspy').scrollSpy({"scrollOffset": 20});
    
    var countdownSeconds = 1509753600 - (new Date).getTime()/1000;
    var clock = $('#countdown').FlipClock(countdownSeconds, {
		clockFace: 'DailyCounter',
        countdown: true
    });

    $('.flip-clock-label').remove();
    $('.flip-clock-wrapper').css('margin','0');
    $('#tubes-row').css('height', $(document).width()/maxWidth*bannerHeight + 'px');
    var scaleValue = Math.sqrt(startScale*$(window).width()/maxWidth);
    if(!iOS) {
        $('#countdown').css('zoom', scaleValue);
        $('#countdown').css('transform','scale(' + scaleValue + ')');
        var tubeHeight = $('#tubes').height();
        var ratio = $(window).height()/$(window).width();
        var heightScale = ratio > breakpoint ? longScale : shortScale;
        $('#countdown-content').css('height', tubeHeight/heightScale);
    }
    else {
        $('#countdown-content').remove();
        $('#date').empty();
        $('#tubes').css('background-image', "url('/static/assets/images/tubes-only4.png')");
    }

    var navtop = $('#navbar').offset().top;
    var navbar = document.getElementById('navbar');

    $('#navwrapper').height($('#navbar').height());

    setBgAlpha(navbar, 0.1);

    $(window).scroll(function() {
        if ($(window).scrollTop() > navtop) {
            $('#navbar').addClass('nfixed');
            $('#navbar').css('background-color', 'rgba(32, 79, 128, 1)');
        }
        else {
            $('#navbar').removeClass('nfixed');
            var alpha = $(window).scrollTop() / navtop;
            $('#navbar').css('background-color', 'rgba(32, 79, 128, '+ alpha + ')');
        }
    });
});

window.onresize = function() {
    $('#tubes-row').css('height', $(document).width()/maxWidth*bannerHeight + 'px');
    if(!iOS) {
        var scaleValue = Math.sqrt(startScale*$(window).width()/maxWidth);
        $('#countdown').css('zoom', scaleValue);
        $('#countdown').css('transform','scale(' + scaleValue + ')');
        var tubeHeight = $('#tubes').height();
        var ratio = $(window).height()/$(window).width();
        var heightScale = ratio > breakpoint ? longScale : shortScale;
        $('#countdown-content').css('height', tubeHeight/heightScale);
    }
};