import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params, transition) {

    var p = transition.queryParams;

    return this.store.find('tariff-rate', {
      q: p.q,
      sources: p.sources,
      page: p.page,
      final_years: p.final_years,
      partner_start_years: p.partner_start_years,
      reporter_start_years: p.reporter_start_years
    });
  }
});
