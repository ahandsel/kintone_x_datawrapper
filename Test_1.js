// Just insert a Datawrapper into Kintone Header Space | Working
(function() {
  'use strict';

  kintone.events.on('app.record.index.show', function(event) {
    var chart_iframe = document.createElement('iframe');
    var headerSpace = kintone.app.getHeaderSpaceElement(); // Fetches the header space
    var createChartIframe = function() {
      chart_iframe.setAttribute('title', 'Presidential Approval Ratings Since Kennedy');
      chart_iframe.setAttribute('aria-label', 'Interactive line chart');
      chart_iframe.setAttribute('id', "datawrapper-chart-Lyuqk");
      chart_iframe.setAttribute('src', "//datawrapper.dwcdn.net/Lyuqk/1/");
      chart_iframe.setAttribute('scrolling', "no");
      chart_iframe.setAttribute('style', "width: 100; min-width: 100% !important; border: 1px solid black;");
      chart_iframe.setAttribute('height', "400");
      headerSpace.appendChild(chart_iframe);
    };
    createChartIframe();
  });
})();
