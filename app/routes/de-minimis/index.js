import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params, transition) {

    var p = transition.queryParams;

    return this.store.find('de-minimis', {
      q: p.q,
      countries: p.countries,
      page: p.page
    });
  }
});
