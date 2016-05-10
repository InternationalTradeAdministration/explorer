import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params, transition) {

    var p = transition.queryParams;

    return this.store.find('ita-taxonomy', {
      q: p.q,
      types: p.types,
      labels: p.labels,
      page: p.page
    });
  }
});
