// Hide Header on on scroll down
var didScroll;

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if ($(window).scrollTop() > 25) {
        // Scroll Down
        $('header.nav-down').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
      
            $('header.nav-up').removeClass('nav-up').addClass('nav-down');
        
    }
}