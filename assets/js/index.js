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



//Sets up side bar info for date and publishing info for cover images, only works for tablets & desktops
function offsets(){
  if ($(window).width() > 920){
        // Adds visibility back to info, only for tablets & desktops
        $('.issue-info, .issue-number, .publication-info').addClass('info-visible');

        var coveroff = $('.cover-image').offset();
        $('.issue-info').offset({
            top : coveroff.top + 226,
            left :  coveroff.left + 840
        });
        $('.issue-number').offset({
            top : coveroff.top + 100,
            left :  coveroff.left + 670
        });
        $('.publication-info').offset({
            top : coveroff.top + $('.cover-image').outerHeight(true) - 150,
            left :  coveroff.left - 15
        });
  } else {
    $('.issue-info, .issue-number, .publication-info').removeClass('info-visible');
  }
}


//Runs offsets() once all content is loaded
$(window).bind("load", function() {
  offsets();
});

//Continually adjusts to cover image as it moves around as window is resized
$(document).ready(function() {
  $(window).resize(function() {
      offsets();
  });
});

$(document).ready(function(){
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
