page('/', pageView.index);
page('/officers',
  pageController.getTemplate,
  pageController.getOfficers,
  pageView.renderOfficers,
  pageView.officers
);
page('/membership', pageView.membership);
page('/events', pageView.events);
page('/activities', pageView.activities);

page.start();
