import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  eccn0: DS.attr('string'),
  eccn1: DS.attr('string'),
  eccn2: DS.attr('string'),
  eccn3: DS.attr('string'),
  eccn4: DS.attr('string'),
  url0: DS.attr('string'),
  url1: DS.attr('string'),
  url2: DS.attr('string'),

  searchResultHeader: function() {
    return this.get('eccn0') + ' - ' + this.get('description');
  }.property('eccn0', 'description')
});
