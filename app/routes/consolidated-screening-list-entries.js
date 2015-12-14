import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    q: { refreshModel: true },
    countries: { refreshModel: true },
    sources: { refreshModel: true },
    page: { refreshModel: true },
    name: { refreshModel: true },
    address: { refreshModel: true },
    start_date: { refreshModel: true },
    end_date: { refreshModel: true },
    expiration_date: { refreshModel: true },
    issue_date: { refreshModel: true },
    fuzzy_name: { refreshModel: true }
  },

  actions: {
    search: function(page) {
      var countries,
        sources,
        countriesField = this.controller.get('countriesField'),
        sourcesField = this.controller.get('sourcesField'),
        startDateFieldStart = this.controller.get('startDateFieldStart'),
        startDateFieldEnd = this.controller.get('startDateFieldEnd'),
        endDateFieldStart = this.controller.get('endDateFieldStart'),
        endDateFieldEnd = this.controller.get('endDateFieldEnd'),
        expirationDateFieldStart = this.controller.get('expirationDateFieldStart'),
        expirationDateFieldEnd = this.controller.get('expirationDateFieldEnd'),
        issueDateFieldStart = this.controller.get('issueDateFieldStart'),
        issueDateFieldEnd = this.controller.get('issueDateFieldEnd');

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

      this.controller.set('q', this.controller.get('qField'));
      this.controller.set('name', this.controller.get('nameField'));
      this.controller.set('address', this.controller.get('addressField'));
      this.controller.set('fuzzy_name', this.controller.get('fuzzyNameField'));
      this.controller.set('page', (page || 1));

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

      if (dateRegex.test(expirationDateFieldStart) && dateRegex.test(expirationDateFieldEnd)) {
        this.controller.set('expiration_date', expirationDateFieldStart + " TO " + expirationDateFieldEnd);
      } else {
        this.controller.set('expiration_date', null);
      }

      if (dateRegex.test(issueDateFieldStart) && dateRegex.test(issueDateFieldEnd)) {
        this.controller.set('issue_date', issueDateFieldStart + " TO " + issueDateFieldEnd);
      } else {
        this.controller.set('issue_date', null);
      }
    }
  }
});
