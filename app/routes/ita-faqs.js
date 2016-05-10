import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: { refreshModel: true },
    page: { refreshModel: true },
    first_published_date: { refreshModel: true },
    last_published_date: { refreshModel: true },
    industries: { refreshModel: true },
    countries: { refreshModel: true },
    topics: { refreshModel: true },
    trade_regions: { refreshModel: true },
    world_regions: { refreshModel: true },
  },

  actions: {
    search: function(page) {
      var countries,
        industries,
        topics,
        trade_regions,
        world_regions,
        countriesField = this.controller.get('countriesField'),
        industriesField = this.controller.get('industriesField'),
        topicsField = this.controller.get('topicsField'),
        tradeRegionsField = this.controller.get('tradeRegionsField'),
        worldRegionsField = this.controller.get('worldRegionsField'),
        firstPublishedDateFieldStart = this.controller.get('firstPublishedDateFieldStart'),
        firstPublishedDateFieldEnd = this.controller.get('firstPublishedDateFieldEnd'),
        lastPublishedDateFieldStart = this.controller.get('lastPublishedDateFieldStart'),
        lastPublishedDateFieldEnd = this.controller.get('lastPublishedDateFieldEnd');

      this.controller.set('q', this.controller.get('qField'));
      this.controller.set('page', (page || 1));

      if (countriesField) {
        countries = countriesField.map(function(item) {
          return item.value;
        });
      }
      this.controller.set('countries', countries);

      if (industriesField) {
        industries = industriesField.map(function(item) {
          return item.value;
        });
      }
      this.controller.set('industries', industries);

      if (topicsField) {
        topics = topicsField.map(function(item) {
          return item.value;
        });
      }
      this.controller.set('topics', topics);

      if (tradeRegionsField) {
        trade_regions = tradeRegionsField.map(function(item) {
          return item.value;
        });
      }
      this.controller.set('trade_regions', trade_regions);

      if (worldRegionsField) {
        world_regions = worldRegionsField.map(function(item) {
          return item.value;
        });
      }
      this.controller.set('world_regions', world_regions);

      var dateRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

      if (dateRegex.test(firstPublishedDateFieldStart) && dateRegex.test(firstPublishedDateFieldEnd)){
        this.controller.set('first_published_date', firstPublishedDateFieldStart + " TO " + firstPublishedDateFieldEnd);
      }
      else{
        this.controller.set('first_published_date', null);
      }

      if (dateRegex.test(lastPublishedDateFieldStart) && dateRegex.test(lastPublishedDateFieldEnd)){
        this.controller.set('last_published_date', lastPublishedDateFieldStart + " TO " + lastPublishedDateFieldEnd);
      }
      else{
        this.controller.set('last_published_date', null);
      }
    }
  }
});
