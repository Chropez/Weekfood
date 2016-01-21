/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'weekfood',
    podModulePrefix: 'weekfood/pods',
    environment: environment,
    contentSecurityPolicy: {
      'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com",
      'default-src': "https://s-dal5-nss-20.firebaseio.com/",
      'font-src': "'self' http://fonts.gstatic.com/",
      'img-src': "'self' https://lh5.googleusercontent.com https://scontent.xx.fbcdn.net",
      'script-src': "'self' 'unsafe-eval' https://s-dal5-nss-20.firebaseio.com",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com"
    },
    firebase: 'https://sizzling-fire-1482.firebaseio.com/',
    torii: {
      sessionServiceName: 'session'
    },
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    sassOptions: {
      includePaths: ['bower_components/material-design-lite/src']
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
