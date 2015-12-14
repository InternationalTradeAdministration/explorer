import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    toggleBody: function() {
      this.toggleProperty('expanded');
    }
  }
});
