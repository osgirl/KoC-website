var nav = {};

nav.$mainNav = $('#main-nav');
nav.$innerNav = $('#inner-nav');
nav.$arrowDown = $('.fa-angle-down');
nav.$arrowUp = $('.fa-angle-up');

nav.dropDown = function() {
  $('#hamburger').on('click', function(event) {
    event.preventDefault();
    // $('#links').show();
    nav.$mainNav.slideToggle();
  });
  $('#links').on('click', function() {
    nav.$innerNav.slideToggle();
    nav.$arrowUp.toggle();
    nav.$arrowDown.toggle();
  });
};

nav.resized = function() {
  $(window).resize(function() {
    if (window.innerWidth >= 800) {
      nav.$mainNav.css('display', 'block');
    };
    if (window.innerWidth <= 800) {
      nav.$mainNav.css('display', 'none');
    };
  });
};

$(function(){
  nav.dropDown();
  nav.resized();
});
