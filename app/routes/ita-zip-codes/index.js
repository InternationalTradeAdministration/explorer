import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params, transition) {

    var p = transition.queryParams;

    return this.store.find('ita-zip_code', {
      q: p.q,
      zip_codes: p.zip_codes,
      page: p.page
    });
  }
});
