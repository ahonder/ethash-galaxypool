/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ethash-galaxypool',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // API host and port
      ApiUrl: '//66.42.52.2:8080/',

      // HTTP mining endpoint
      HttpHost: 'http://rol.galaxypool.org',
      HttpPort: 8888,

      // Stratum mining endpoint
      StratumHost: 'rol.galaxypool.org',
      StratumPort: 8008,

      // Fee and payout details
      PoolFee: '1 %',
      PayoutThreshold: '5 ROL',

      // For network hashrate (change for your favourite fork)
      BlockTime: 14,

      // Coin ticket
      Unit: 'ROL',

      //Chart config
      highcharts: {
        main: {
          enabled: true,
          height: 300,
          type: 'areaspline',
          color: '#357ab3',
          title: '',
          ytitle: '',
          interval: 180000,
          chartInterval: 900000
        },
        account: {
          enabled: true,
          height: 300,
          type: 'spline',
          color: [ '', '' ],
          title: '',
          ytitle: '',
          interval: 180000,
          chartInterval: 900000,
          paymentInterval: 30000
        }
      }
    }
  };

  if (environment === 'development') {
    /* Override ApiUrl just for development, while you are customizing
      frontend markup and css theme on your workstation.
    */
    ENV.APP.ApiUrl = 'http://localhost:8080/'
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
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
