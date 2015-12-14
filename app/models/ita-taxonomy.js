import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  taxonomy: DS.attr('string'),
  parent_names: DS.attr('array'),

  searchResultHeader: function() {
    return this.get('name');
  }.property('name')
});
