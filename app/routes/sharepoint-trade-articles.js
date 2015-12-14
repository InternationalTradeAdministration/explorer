import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: { refreshModel: true },
    countries: { refreshModel: true },
    industries: { refreshModel: true },
    export_phases: { refreshModel: true },
    topics: { refreshModel: true },
    sub_topics: { refreshModel: true },
    geo_regions: { refreshModel: true },
    geo_subregions: { refreshModel: true },
    trade_regions: { refreshModel: true },
    trade_programs: { refreshModel: true },
    trade_initiatives: { refreshModel: true },
    page: { refreshModel: true },
    creation_date: { refreshModel: true },
    release_date: { refreshModel: true },
    expiration_date: { refreshModel: true },
  },

  actions: {
    search: function(page) {
      var countries,
        countriesField = this.controller.get('countriesField');
      if (countriesField) {
        countries = countriesField.map(function(item) {
          return item.value;
        });
      }

      var industries,
        industriesField = this.controller.get('industriesField');
      if (industriesField) {
        industries = industriesField.map(function(item) {
          return item.value;
        });
      }

      var export_phases,
        exportPhasesField = this.controller.get('exportPhasesField');
      if (exportPhasesField) {
        export_phases = exportPhasesField.map(function(item) {
          return item.value;
        });
      }

      var topics,
         topicsField = this.controller.get('topicsField');
      if (topicsField) {
        topics = topicsField.map(function(item) {
          return item.value;
        });
      }

      var sub_topics,
         subTopicsField = this.controller.get('subTopicsField');
      if (subTopicsField) {
        sub_topics = subTopicsField.map(function(item) {
          return item.value;
        });
      }

      var geo_regions,
         geoRegionsField = this.controller.get('geoRegionsField');
      if (geoRegionsField) {
        geo_regions = geoRegionsField.map(function(item) {
          return item.value;
        });
      }

      var geo_subregions,
         geoSubregionsField = this.controller.get('geoSubregionsField');
      if (geoSubregionsField) {
        geo_subregions = geoSubregionsField.map(function(item) {
          return item.value;
        });
      }

      var trade_regions,
         tradeRegionsField = this.controller.get('tradeRegionsField');
      if (tradeRegionsField) {
        trade_regions = tradeRegionsField.map(function(item) {
          return item.value;
        });
      }

      var trade_programs,
         tradeProgramsField = this.controller.get('tradeProgramsField');
      if (tradeProgramsField) {
        trade_programs = tradeProgramsField.map(function(item) {
          return item.value;
        });
      }

      var trade_initiatives,
         tradeInitiativesField = this.controller.get('tradeInitiativesField');
      if (tradeInitiativesField) {
        trade_initiatives = tradeInitiativesField.map(function(item) {
          return item.value;
        });
      }

      this.controller.set('countries', countries);
      this.controller.set('industries', industries);
      this.controller.set('export_phases', export_phases);
      this.controller.set('topics', topics);
      this.controller.set('sub_topics', sub_topics);
      this.controller.set('geo_regions', geo_regions);
      this.controller.set('geo_subregions', geo_subregions);
      this.controller.set('trade_regions', trade_regions);
      this.controller.set('trade_programs', trade_programs);
      this.controller.set('trade_initiatives', trade_initiatives);
      this.controller.set('q', this.controller.get('qField'));
      this.controller.set('page', (page || 1));

      var creationDateFieldStart = this.controller.get('creationDateFieldStart'),
        creationDateFieldEnd = this.controller.get('creationDateFieldEnd'),
        releaseDateFieldStart = this.controller.get('releaseDateFieldStart'),
        releaseDateFieldEnd = this.controller.get('releaseDateFieldEnd'),
        expirationDateFieldStart = this.controller.get('expirationDateFieldStart'),
        expirationDateFieldEnd = this.controller.get('expirationDateFieldEnd');

      var dateRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

      if (dateRegex.test(creationDateFieldStart) && dateRegex.test(creationDateFieldEnd)) {
        this.controller.set('creation_date', creationDateFieldStart + " TO " + creationDateFieldEnd);
      } else {
        this.controller.set('creation_date', null);
      }

      if (dateRegex.test(releaseDateFieldStart) && dateRegex.test(releaseDateFieldEnd)) {
        this.controller.set('release_date', releaseDateFieldStart + " TO " + releaseDateFieldEnd);
      } else {
        this.controller.set('release_date', null);
      }

      if (dateRegex.test(expirationDateFieldStart) && dateRegex.test(expirationDateFieldEnd)) {
        this.controller.set('expiration_date', expirationDateFieldStart + " TO " + expirationDateFieldEnd);
      } else {
        this.controller.set('expiration_date', null);
      }
    }
  }
});
