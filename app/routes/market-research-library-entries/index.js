import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params, transition) {

    var p = transition.queryParams;

    return this.store.find('market-research-library-entry', {
      q: p.q,
      countries: p.countries,
      page: p.page,
      expiration_date: p.expiration_date,
      industries: p.industries
    });
  }
});
