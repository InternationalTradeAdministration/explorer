import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: { refreshModel: true },
    countries: { refreshModel: true },
    sources: { refreshModel: true },
    page: { refreshModel: true },
    start_date: { refreshModel: true },
    end_date: { refreshModel: true },
    trade_regions: { refreshModel: true},
    world_regions: { refreshModel: true}
  },

  actions: {
    search: function(page) {
      var countries,
        sources,
        trade_regions,
        world_regions,
        countriesField = this.controller.get('countriesField'),
        sourcesField = this.controller.get('sourcesField'),
        startDateFieldStart = this.controller.get('startDateFieldStart'),
        startDateFieldEnd = this.controller.get('startDateFieldEnd'),
        endDateFieldStart = this.controller.get('endDateFieldStart'),
        endDateFieldEnd = this.controller.get('endDateFieldEnd'),
        tradeRegionsField = this.controller.get('tradeRegionsField'),
        worldRegionsField = this.controller.get('worldRegionsField');

      if (countriesField) {
        countries = countriesField.map(function(item) {
          return item.value;
        });
      }
      this.controller.set('countries', countries);

      if (sourcesField) {
        sources = sourcesField.map(function(item) {
          return item.value;
        });
      }
      this.controller.set('sources', sources);

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

      if (dateRegex.test(startDateFieldStart) && dateRegex.test(startDateFieldEnd)) {
        this.controller.set('start_date', startDateFieldStart + " TO " + startDateFieldEnd);
      } else {
        this.controller.set('start_date', null);
      }

      if (dateRegex.test(endDateFieldStart) && dateRegex.test(endDateFieldEnd)) {
        this.controller.set('end_date', endDateFieldStart + " TO " + endDateFieldEnd);
      } else {
        this.controller.set('end_date', null);
      }

      this.controller.set('q', this.controller.get('qField'));
      this.controller.set('page', (page || 1));
    }
  }
});
