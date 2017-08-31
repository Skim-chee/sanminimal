//Sets up side bar info for date and publishing info for cover images, only works for tablets & desktops
function offsets(){
  if ($(window).width() > 920){
        // Adds visibility back to info, only for tablets & desktops
        $('.issue-info, .issue-number, .publication-info').addClass('info-visible');

        var coveroff = $('.cover-image').offset();
        $('.issue-info').offset({
            top : coveroff.top + 122,
            left :  coveroff.left + 840
        });
        $('.issue-number').offset({
            top : coveroff.top - 33,
            left :  coveroff.left + 670
        });
        $('.publication-info').offset({
            top : coveroff.top + $('.cover-image').outerHeight(true) - 150,
            left :  coveroff.left - 16
        });
  } else {
    $('.issue-info, .issue-number, .publication-info').removeClass('info-visible');
  }
}


//Runs offsets() once cover-image is loaded
$(".cover-image > img").one("load", function() {
  offsets();
  $('p:empty').remove();
}).each(function() {
  if(this.complete) $(this).load();
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

// Lazy load

[].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
    img.removeAttribute('data-src');
  };
});

function waitForElementToDisplay(selector, time) {
  if(document.querySelector(selector)!=null) {
        offsets();
        return;
  }
  else {
      setTimeout(function() {
      waitForElementToDisplay(selector, time);
    }, time);
  }
}

waitForElementToDisplay(".cover-image > img[src]:not([data-src])", 1);
