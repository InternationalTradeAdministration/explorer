import Ember from 'ember';

export default Ember.Select.extend({
  didInsertElement: function() {
    this._super();
    this.select2ify();
  },

  didSelectionChange: function() {
    this.select2ify();
  }.observes('selection'),

  select2ify: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      $('#'+this.get('elementId')).select2();
    });
  }
});
