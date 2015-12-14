import Ember from 'ember';

export default Ember.Component.extend({
  totalText: function() {
    return (this.get('total') || 'No');
  }.property('total'),

  resultText: function() {
    return ((this.get('total') === 1) ? 'result' : 'results');
  }.property('total')
});
