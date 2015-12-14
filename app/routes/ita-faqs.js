import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: { refreshModel: true },
    page: { refreshModel: true },
    update_date: { refreshModel: true },
    industries: { refreshModel: true },
    countries: { refreshModel: true },
    topics: { refreshModel: true },
  },

  actions: {
    search: function(page) {
      var countries,
        industries,
        topics,
        countriesField = this.controller.get('countriesField'),
        industriesField = this.controller.get('industriesField'),
        topicsField = this.controller.get('topicsField'),
        updateDateFieldStart = this.controller.get('updateDateFieldStart'),
        updateDateFieldEnd = this.controller.get('updateDateFieldEnd');

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

      var dateRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

      if (dateRegex.test(updateDateFieldStart) && dateRegex.test(updateDateFieldEnd)){
        this.controller.set('update_date', updateDateFieldStart + " TO " + updateDateFieldEnd);
      }
      else{
        this.controller.set('update_date', null);
      }
    }
  }
});
