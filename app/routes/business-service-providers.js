import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: { refreshModel: true },
    ita_offices: { refreshModel: true },
    categories: { refreshModel: true },
    page: { refreshModel: true }
  },

  actions: {
    search: function(page) {
      this.controller.set('ita_offices', this.controller.get('itaOfficesField'));
      this.controller.set('categories', this.controller.get('categoriesField'));
      this.controller.set('q', this.controller.get('qField'));
      this.controller.set('page', (page || 1));
    }
  }
});
