import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params, transition) {

    var p = transition.queryParams;

    return this.store.find('consolidated-screening-list-entry', {
      q: p.q,
      countries: p.countries,
      sources: p.sources,
      page: p.page,
      name: p.name,
      address: p.address,
      start_date: p.start_date,
      end_date: p.end_date,
      expiration_date: p.expiration_date,
      issue_date: p.issue_date,
      fuzzy_name: p.fuzzy_name
    });
  }
});

