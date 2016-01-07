var pageController = {};
var officersArray;

pageController.getTemplate = function(ctx, next) {
  if (pageView.template) {
    next();
  } else {
    $.get('/templates/officers.html', function(data, message, xhr) {
      pageView.template = Handlebars.compile(data);
      next();
    });
  }
};

pageController.getOfficers = function(ctx, next) {
  if (officersArray) {
    next();
  } else {
    $.getJSON('/data/officers.json', function (data) {
      officersArray = data;
      next();
    });
  }
};
