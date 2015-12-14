import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ExplorerENV.locationType
});

Router.map(function() {
  this.resource('consolidated-screening-list-entries', function(){});
  this.resource('trade-events', function(){});
  this.resource('ita-faqs', function(){});
  this.resource('tariff-rates', function(){});
  this.resource('trade-leads', function(){});
  this.resource('market-research-library-entries', function(){});
  this.resource('ita-office-locations', function(){});
  this.resource('ita-zip-codes', function(){});
  this.resource('sharepoint-trade-articles', function(){});
  this.resource('eccns', function(){});
  this.resource('business-service-providers', function(){});
  this.resource('environmental-solutions', function(){});
  this.resource('ita-taxonomies', function(){});
  this.resource('country-fact-sheets', function(){});
  this.resource('de-minimis', function(){});
});

export default Router;
