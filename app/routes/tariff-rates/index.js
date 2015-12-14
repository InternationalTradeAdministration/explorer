import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params, transition) {

    var p = transition.queryParams;

    return this.store.find('tariff-rate', {
      q: p.q,
      sources: p.sources,
      page: p.page,
      final_year: p.final_year,
      partner_start_year: p.partner_start_year,
      reporter_start_year: p.reporter_start_year
    });
  }
});
