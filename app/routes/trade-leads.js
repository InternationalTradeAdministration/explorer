import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: { refreshModel: true },
    countries: { refreshModel: true },
    sources: { refreshModel: true },
    page: { refreshModel: true },
    publish_date: { refreshModel: true },
    end_date: { refreshModel: true },
    publish_date_amended: { refreshModel: true }
  },

  actions: {
    search: function(page) {
      var countries,
        sources,
        countriesField = this.controller.get('countriesField'),
        sourcesField = this.controller.get('sourcesField'),
        publishDateFieldStart = this.controller.get('publishDateFieldStart'),
        publishDateFieldEnd = this.controller.get('publishDateFieldEnd'),
        endDateFieldStart = this.controller.get('endDateFieldStart'),
        endDateFieldEnd = this.controller.get('endDateFieldEnd'),
        publishDateAmendedFieldStart = this.controller.get('publishDateAmendedFieldStart'),
        publishDateAmendedFieldEnd = this.controller.get('publishDateAmendedFieldEnd');

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

      var dateRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

      if (dateRegex.test(publishDateFieldStart) && dateRegex.test(publishDateFieldEnd)) {
        this.controller.set('publish_date', publishDateFieldStart + " TO " + publishDateFieldEnd);
      } else {
        this.controller.set('publish_date', null);
      }

      if (dateRegex.test(endDateFieldStart) && dateRegex.test(endDateFieldEnd)) {
        this.controller.set('end_date', endDateFieldStart + " TO " + endDateFieldEnd);
      } else {
        this.controller.set('end_date', null);
      }

      if (dateRegex.test(publishDateAmendedFieldStart) && dateRegex.test(publishDateAmendedFieldEnd)) {
        this.controller.set('publish_date_amended', publishDateAmendedFieldStart + " TO " + publishDateAmendedFieldEnd);
      } else {
        this.controller.set('publish_date_amended', null);
      }

      this.controller.set('q', this.controller.get('qField'));
      this.controller.set('page', (page || 1));
    }
  }
});
