import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: { refreshModel: true },
    countries: { refreshModel: true },
    industries: { refreshModel: true },
    expiration_date: { refreshModel: true },
    page: { refreshModel: true }
  },

  actions: {
    search: function(page) {
      var countries, industries,
        countriesField = this.controller.get('countriesField'),
        industriesField = this.controller.get('industriesField'),
        expirationDateFieldStart = this.controller.get('expirationDateFieldStart'),
        expirationDateFieldEnd = this.controller.get('expirationDateFieldEnd');

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

      this.controller.set('q', this.controller.get('qField'));

      var dateRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

      if (dateRegex.test(expirationDateFieldStart) && dateRegex.test(expirationDateFieldEnd)){
          this.controller.set('expiration_date', expirationDateFieldStart + " TO " + expirationDateFieldEnd);
      }
      else{
        this.controller.set('expiration_date', null);
      }

      this.controller.set('page', (page || 1));
    }
  }
});
