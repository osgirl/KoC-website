var nav = {};

nav.$main = $('#main-nav');
nav.$inner = $('#inner-nav');
nav.$arrowDown = $('.fa-angle-down');
nav.$arrowUp = $('.fa-angle-up');

nav.dropDown = function() {
  $('#hamburger').on('click', function(event) {
    event.preventDefault();
    // $('#links').show();
    nav.$main.slideToggle();
  });
  $('#links').on('click', function() {
    nav.$inner.slideToggle();
    nav.$arrowUp.toggle();
    nav.$arrowDown.toggle();
  });
};

nav.resized = function() {
  $(window).resize(function() {
    if (window.innerWidth >= 800) {
      nav.$main.css('display', 'block');
    };
    if (window.innerWidth <= 800) {
      nav.$main.css('display', 'none');
    };
  });
};

$(function(){
  nav.dropDown();
  nav.resized();
});
