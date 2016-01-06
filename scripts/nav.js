var nav = {};

nav.$mainNav = $('#main-nav');
nav.$innerNav = $('#inner-nav');

nav.hideAll = function() {
  nav.$mainNav.hide();
  nav.$innerNav.hide();
};

nav.dropDown = function() {
  $('#hamburger').on('click', function(event) {
    event.preventDefault();
    // $('#links').show();
    nav.$mainNav.slideToggle();
  });
  $('#links').on('click', function() {
    nav.$innerNav.slideToggle();
  });
};

$(function(){
  nav.hideAll();
  nav.dropDown();
});
