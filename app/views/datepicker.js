import Ember from 'ember';

export default Ember.TextField.extend({
  didInsertElement: function() {
    this._super();
    this.launchDatepicker();
  },

  didSelectionChange: function() {
    this.launchDatepicker();
  }.observes('selection'),

  launchDatepicker: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      $('#'+this.get('elementId')).datepicker({
        dateFormat: "yy-mm-dd"
      });
    });
  }
});
