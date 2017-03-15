// // Hide Header on on scroll down
// var didScroll;
//
// $(window).scroll(function(event){
//     didScroll = true;
// });
//
// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);
//
// function hasScrolled() {
//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if ($(window).scrollTop() > 25) {
//         // Scroll Down
//         $('header.nav-down').removeClass('nav-down').addClass('nav-up');
//     } else {
//         // Scroll Up
//
//             $('header.nav-up').removeClass('nav-up').addClass('nav-down');
//
//     }
// }
$(document).ready(function(){
    if ($('#post-url').text().length > 0) {
        var url = $('#post-url').text();
    }
    $('#cover-image').wrap('<a href="'+ url +'"></a>');
    
    function offsets(){
        var coveroff = $('#cover-image, #about-image').offset();
            $('#issue-info').offset({
                top : coveroff.top + 250,
                left :  coveroff.left + $('#cover-image, #about-image').outerWidth(true) + 8
            });
            $('#publication-info').offset({
                top : coveroff.top + $('#cover-image, #about-image').outerHeight(true) - 100,
                left :  coveroff.left - 20
        });
    }
    offsets();
    
    $(window).resize(function() {
        offsets();
    });
});
