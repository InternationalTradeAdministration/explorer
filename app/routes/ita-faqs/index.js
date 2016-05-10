import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params, transition) {

    var p = transition.queryParams;

    return this.store.find('ita-faq', {
      q: p.q,
      page: p.page,
      first_published_date: p.first_published_date,
      last_published_date: p.last_published_date,
      industries: p.industries,
      countries: p.countries,
      topics: p.topics,
      trade_regions: p.trade_regions,
      world_regions: p.world_regions
    });
  }
});
