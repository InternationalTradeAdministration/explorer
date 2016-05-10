import DS from 'ember-data';

export default DS.Model.extend({
  label: DS.attr('string'),
  type: DS.attr('array'),
  sub_class_of: DS.attr(),
  
  annotations: DS.attr(),
  datatype_properties: DS.attr(),
  object_properties: DS.attr(),

  searchResultHeader: function() {
    return this.get('label');
  }.property('label')
});
