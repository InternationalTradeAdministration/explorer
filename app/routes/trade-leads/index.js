import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params, transition) {

    var p = transition.queryParams;

    return this.store.find('trade-lead', {
      q: p.q,
      countries: p.countries,
      sources: p.sources,
      page: p.page,
      publish_date: p.publish_date,
      end_date: p.end_date,
      publish_date_amended: p.publish_date_amended,
    });
  }
});
