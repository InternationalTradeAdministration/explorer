import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params, transition) {
    var p = transition.queryParams;
    return this.store.find('business-service-provider', {
      q: p.q,
      ita_offices: p.ita_offices,
      categories: p.categories,
      page: p.page
    });
  }
});
