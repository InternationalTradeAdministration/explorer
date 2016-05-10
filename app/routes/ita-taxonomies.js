import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: { refreshModel: true },
    types: { refreshModel: true },
    labels: { refreshModel: true },
    page: { refreshModel: true }
  },

  actions: {
    search: function(page) {
      var types, typesField = this.controller.get('typesField');

      if (typesField) {
        types = typesField.map(function(item) {
          return item.value;
        });
      }
      this.controller.set('types', types);

      this.controller.set('q', this.controller.get('qField'));
      this.controller.set('labels', this.controller.get('labelsField'));
      this.controller.set('page', (page || 1));
    }
  }
});
