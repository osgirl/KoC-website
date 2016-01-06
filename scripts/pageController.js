var pageController = {};

pageController.index = function() {
  $('#home').fadeIn().siblings().hide();
}

pageController.showHide = function() {
  $('#main-nav > li').on('click', function(event) {
    var $this = $(this);
    var $index = $this.index();
    var $section = $('section')[$index];
    $($section).fadeIn().siblings().hide();
  });
}

$(function(){
  pageController.showHide();
});
