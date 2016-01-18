var officers = {};
var officersArray;

officers.getOfficersTemplate = function(ctx, next) {
  if (officers.template) {
    next();
  } else {
    $.get('/templates/officers.html', function(data, message, xhr) {
      officers.template = Handlebars.compile(data);
      ctx.save();
      next();
    });
  }
};

officers.getOfficers = function(ctx, next) {
  if (officersArray) {
    next();
  } else {
    $.getJSON('/data/officers.json', function (data) {
      officersArray = data;
      ctx.save();
      next();
    });
  }
};
