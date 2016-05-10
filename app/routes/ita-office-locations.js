import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: { refreshModel: true },
    countries: { refreshModel: true },
    city: { refreshModel: true },
    state: { refreshModel: true },
    page: { refreshModel: true }
  },

  actions: {
    search: function(page) {
      this.controller.set('q', this.controller.get('qField'));
      this.controller.set('city', this.controller.get('cityField'));
      this.controller.set('state', this.controller.get('stateField'));
      this.controller.set('page', (page || 1));

      var countries,
        countriesField = this.controller.get('countriesField');

      if (countriesField) {
        countries = countriesField.map(function(item) {
          return item.value;
        });
      }
      this.controller.set('countries', countries);
    }
  }
});
