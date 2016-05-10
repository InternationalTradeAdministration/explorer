import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params, transition) {

    var p = transition.queryParams;

    return this.store.find('ita-office-location', {
      q: p.q,
      countries: p.countries,
      city: p.city,
      state: p.state,
      page: p.page
    });
  }
});
