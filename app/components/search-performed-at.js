import Ember from 'ember';

export default Ember.Component.extend({
  formattedDate: function() {
    var date = new Date(this.get('date'));
    return date.toUTCString();
  }.property()
});
