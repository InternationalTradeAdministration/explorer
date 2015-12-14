import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: { refreshModel: true },
    page: { refreshModel: true }
  },

  actions: {
    search: function(page) {
      this.controller.set('q', this.controller.get('qField'));
      this.controller.set('page', (page || 1));
    }
  }
});
