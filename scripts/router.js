page('/', pageView.index);
page('/officers',
  officers.getOfficersTemplate,
  officers.getOfficers,
  pageView.renderOfficers,
  pageView.officers
);
page('/membership', pageView.membership);
page('/events',
  events.getEventsTemplate,
  events.getEvents,
  pageView.renderEvents,
  pageView.events
);
page('/activities', pageView.activities);

page.start();
