import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params, transition) {

    var p = transition.queryParams;

    return this.store.find('ita-faq', {
      q: p.q,
      page: p.page,
      update_date: p.update_date,
      industries: p.industries,
      countries: p.countries,
      topics: p.topics
    });
  }
});
