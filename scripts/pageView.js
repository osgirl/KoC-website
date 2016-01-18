var pageView = {};

pageView.index = function() {
  $('#home').fadeIn().siblings().hide();
};

pageView.officers = function() {
  $('#officers').fadeIn().siblings().hide();
};

pageView.membership = function() {
  $('#membership').fadeIn().siblings().hide();
};

pageView.events = function() {
  $('#events').fadeIn().siblings().hide();
};

pageView.activities = function() {
  $('#activities').fadeIn().siblings().hide();
};

pageView.renderOfficers = function(ctx, next) {
  if ($.trim($('.flex-container').html()) === '') {
    $('.flex-container').append(
      officersArray.map(function(ele, index, array) {
        return officers.template(ele);
      })
    );
    next();
  } else {
    next();
  }
};

pageView.renderEvents = function(ctx, next) {
  if ($.trim($('#events').html()) === '') {
    $('#events').append(
      eventsArray.map(function(ele, index, array) {
        return events.template(ele);
      })
    );
    next();
  } else {
    next();
  }
};
