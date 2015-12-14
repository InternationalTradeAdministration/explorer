import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: { refreshModel: true },
    countries: { refreshModel: true },
    page: { refreshModel: true }
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

      this.controller.set('countries', countries);
      this.controller.set('q', this.controller.get('qField'));
      this.controller.set('page', (page || 1));
    }
  }
});
