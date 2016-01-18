var events = {};
var eventsArray;

events.getEventsTemplate = function(ctx, next) {
  if (events.template) {
    next();
  } else {
    $.get('/templates/events.html', function(data, message, xhr) {
      events.template = Handlebars.compile(data);
      next();
    });
  }
};

events.getEvents = function(ctx, next) {
  if (eventsArray) {
    next();
  } else {
    $.getJSON('/data/events.json', function (data) {
      eventsArray = data;
      next();
    });
  }
};
