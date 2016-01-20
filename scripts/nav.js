var nav = {};

nav.$main = $('#main-nav');
nav.$inner = $('#inner-nav');
nav.$arrowDown = $('.fa-angle-down');
nav.$arrowUp = $('.fa-angle-up');
nav.$hamburger = $('#hamburger');

nav.dropDown = function() {
  $('#hamburger').on('click', function(event) {
    event.preventDefault();
    nav.$main.slideToggle();
  });
  $('#links').on('click', function() {
    nav.$inner.slideToggle();
    nav.$arrowUp.toggle();
    nav.$arrowDown.toggle();
  });
};

nav.menuClose = function() {
  nav.mainClose();
  nav.innerClose();
};

nav.mainClose = function() {
  $('#main-nav li:not(.submenu)').on('click', function() {
    if (nav.$hamburger.css('display') === 'flex') {
      nav.$main.slideUp('fast');
      nav.$inner.slideUp('fast');
    }
  });
};

nav.innerClose = function() {
  $('#inner-nav').on('click', function() {
    if (nav.$hamburger.css('display') === 'none') {
      nav.$inner.slideUp('fast');
      nav.$arrowUp.toggle();
      nav.$arrowDown.toggle();
    }
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
  nav.menuClose();
  nav.resized();
});
