import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params, transition) {

    var p = transition.queryParams;

    return this.store.find('environmental-solution', {
      q: p.q
    });
  }
});
