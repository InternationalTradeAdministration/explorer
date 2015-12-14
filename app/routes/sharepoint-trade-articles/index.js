import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params, transition) {

    var p = transition.queryParams;

    return this.store.find('sharepoint-trade-article', {
      q: p.q,
      countries: p.countries,
      industries: p.industries,
      export_phases: p.export_phases,
      topics: p.topics,
      sub_topics: p.sub_topics,
      geo_regions: p.geo_regions,
      geo_subregions: p.geo_subregions,
      trade_regions: p.trade_regions,
      trade_programs: p.trade_programs,
      trade_initiatives: p.trade_initiatives,
      page: p.page,
      creation_date: p.creation_date,
      release_date: p.release_date,
      expiration_date: p.expiration_date
    });
  }
});
