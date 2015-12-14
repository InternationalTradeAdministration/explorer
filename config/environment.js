/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    environment: environment,
    locationType: 'auto',
    webservicesBaseURL: 'http://localhost:3000',
    webservicesApiKey: 'cfVhA_8HepggR81yU6yo1KGN',
    developerportalUrl: 'http://localhost:4000/developerportal',
    apiKeyUrl: 'http://localhost:3000',
    appTitle: 'ITA Explorer',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    ENV.baseURL = '/'; // Testem prefers this...
  }

  if (environment === 'production') {
    ENV.baseURL = '/explorer';
    ENV.locationType = 'hash';
    ENV.webservicesBaseURL = 'http://api.trade.gov';
    ENV.webservicesApiKey = 'VeaYLDhMLX_HwcbEbx27s5r3';
    ENV.developerportalUrl = 'http://developer.trade.gov';
    ENV.apiKeyUrl = 'https://api.trade.gov';
  }

  return ENV;
};
