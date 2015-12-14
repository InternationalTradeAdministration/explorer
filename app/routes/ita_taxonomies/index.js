import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params, transition) {

    var p = transition.queryParams;

    return this.store.find('ita-taxonomy', {
      q: p.q,
      taxonomies: p.taxonomies,
      page: p.page
    });
  }
});
