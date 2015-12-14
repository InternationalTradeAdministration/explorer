import Ember from 'ember';
import ENV from 'explorer/config/environment';

export default Ember.Component.extend({
  developerportalUrl: ENV.developerportalUrl,
  apiKeyUrl: ENV.apiKeyUrl,
  webservices_baseurl: 'https://api.govwizely.com',
  webservices_baseurl_users_signup: 'https://api.govwizely.com/users/sign_up',
  topApisNavItems: [
    { text: 'Consolidated Screening List', path: 'consolidated-screening-list.html' },
    { text: 'Trade Events', path: 'trade-events.html' },
    { text: 'Trade Leads', path: 'trade-leads.html' },
    { text: 'Tariff Rates', path: 'tariff-rates.html' },
    { text: 'De Minimis', path: 'de-minimis.html' }
  ],
  apiResourcesNavItems: [
    { text: 'List of all APIs', path: 'api-list.html' },
    { text: 'Search Widgets', path: 'search-widgets.html' }
  ],
  additionalResourcesNavItems: [
    { text: 'Guidance', path: 'guidance.html' },
    { text: 'Contact', path: 'contact.html' },
    { text: 'App Gallery', path: 'app-gallery.html' },
    { text: 'List of all APIs', path: 'api-list.html' },
    { text: 'Search Widgets', path: 'search-widgets.html' },
    { text: 'API FAQs', path: 'api-faqs.html' },
    { text: 'Change Log', path: 'change-log.html' },
    { text: 'APIs from Trade Agencies', path: 'trade-agency-apis.html' },
    { text: 'Terms of Service', path: 'tos.html' }
  ]
});
