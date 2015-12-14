import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: { refreshModel: true },
    taxonomies: { refreshModel: true },
    page: { refreshModel: true }
  },

  actions: {
    search: function(page) {
      var taxonomies, taxonomiesField = this.controller.get('taxonomiesField');

      if (taxonomiesField) {
        taxonomies = taxonomiesField.map(function(item) {
          return item.value;
        });
      }
      this.controller.set('taxonomies', taxonomies);

      this.controller.set('q', this.controller.get('qField'));
      this.controller.set('page', (page || 1));
    }
  }
});
