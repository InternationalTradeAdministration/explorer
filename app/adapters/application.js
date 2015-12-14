import DS from 'ember-data';
import ENV from 'explorer/config/environment';

export default DS.RESTAdapter.extend({

  find: function() {
    throw new Error("find() not implemented.");
  },
  createRecord: function() {
    throw new Error("createRecord() not implemented.");
  },
  updateRecord: function() {
    throw new Error("updateRecord() not implemented.");
  },
  deleteRecord: function() {
    throw new Error("deleteRecord() not implemented.");
  },

  findAll: function(store, type) {
    return this.ajax(this.buildUrl(type, {}), 'GET');
  },

  findQuery: function(store, type, query) {
    return this.ajax(this.buildUrl(type, query), 'GET');
  },

  buildUrl: function(type, query) {
    if (!query) {
      query = {page: 0};
    }
    var page = Math.max(query.page, 1),
      offset = 10 * (page - 1);

    delete query.page;

    return ENV.webservicesBaseURL + this.path(type) + this.queryString(offset, query);
  },

  path: function(type) {
    var supported = {
      'explorer@model:consolidated-screening-list-entry:': 'consolidated_screening_list',
      'explorer@model:ita-faq:': 'ita_faqs',
      'explorer@model:trade-event:': 'trade_events',
      'explorer@model:tariff-rate:': 'tariff_rates',
      'explorer@model:trade-lead:': 'trade_leads',
      'explorer@model:market-research-library-entry:': 'market_research_library',
      'explorer@model:ita-office-location:': 'ita_office_locations',
      'explorer@model:ita-zip-code:': 'ita_zipcode_to_post',
      'explorer@model:sharepoint-trade-article:': 'trade_articles',
      'explorer@model:eccn:': 'eccns',
      'explorer@model:business-service-provider:': 'business_service_providers',
      'explorer@model:environmental-solution:': 'environmental_solutions',
      'explorer@model:ita-taxonomy:': 'ita_taxonomies',
      'explorer@model:country-fact-sheet:': 'country_fact_sheets',
      'explorer@model:de-minimis:': 'v1/de_minimis'
    };
    var path = supported[type];

    if (!path) {
      throw new Error('Type "'+type+'" not supported');
    }

    return '/' + path + '/search';
  },

  queryString: function(offset, query) {
    var params = ['api_key=' + ENV.webservicesApiKey],
      key;

    if (offset > 0) {
      params.push('offset='+offset);
    }

    for (key in query) {
      if (query[key] && query[key] !== 'undefined') {
        params.push(key+'='+encodeURIComponent(query[key]));
      }
    }

    return ((params.length > 0) ? '?' + params.join('&') : '');
  },
});
