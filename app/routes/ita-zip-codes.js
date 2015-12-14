import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: { refreshModel: true },
    zip_codes: { refreshModel: true },
    page: { refreshModel: true }
  },

  actions: {
    search: function(page) {
      this.controller.set('zip_codes', this.controller.get('zipCodesField'));
      this.controller.set('q', this.controller.get('qField'));
      this.controller.set('page', (page || 1));
    }
  }
});
