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
    
    //Checks to make sure image has valid link, and then wraps cover image in link to post
    if ($('.post-url').text().length > 0) {
        var url = $('.post-url').text();
    }
    if (url) {
        $('.cover-image').wrap('<a class = "cover-link" href="'+ url +'"></a>');
        $('h1').wrap('<a class = "title-link" href="'+ url +'"></a>');
    }
    if ($(window).width() > 768){
        //Sets up side bar info for date and publishing info for cover images, only works for tablets & desktops
        function offsets(){
            // Adds visibility back to info, only for tablets & desktops
            $('.issue-info, .publication-info').addClass('info-visible');
            
            var coveroff = $('.cover-image').offset();
            $('.issue-info').offset({
                top : coveroff.top + 150,
                left :  coveroff.left + 810
            });
            $('.publication-info').offset({
                top : coveroff.top + $('.cover-image').outerHeight(true) - 125,
                left :  coveroff.left - 20
            });
        }
        offsets();
        //Continually adjusts to cover image as it moves around as window is resized
        $(window).resize(function() {
            offsets();
        });
    }
    
    // ghostHunter - searches through posts using an keyword algorithm
    $(".search-results").addClass("results-hide");
    var searchField = $(".search-field").ghostHunter({
        //Links ghostHunter to search box
        results: ".search-results",
        displaySearchInfo: false,
        result_template : "<a href='{{link}}'><li class='list-group-item'>{{title}}</li></a>",
        before: function(){ 
            //On search, hides index and shows search results
            $(".search-results").removeClass("results-hide");
            $(".index-container").addClass("index-hide");
            //Clears search field upon searching, feedback that search went through
            searchField.clear();
        }
    }); 
});


