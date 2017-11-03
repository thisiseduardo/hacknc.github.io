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

    var navtop = $('#navbar').offset().top;
    var navbar = document.getElementById('navbar');

    $('#navwrapper').height($('#navbar').height());

    setBgAlpha(navbar, 0.1);

    // $(window).scroll(function() {
    //     if ($(window).scrollTop() > navtop) {
    //         $('#navbar').addClass('nfixed');
    //         $('#navbar').css('background-color', 'rgba(32, 79, 128, 1)');
    //     }
    //     else {
    //         $('#navbar').removeClass('nfixed');
    //         var alpha = $(window).scrollTop() / navtop;
    //         $('#navbar').css('background-color', 'rgba(32, 79, 128, '+ alpha + ')');
    //     }
    // });
});
