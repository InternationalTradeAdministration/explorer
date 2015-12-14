import DS from 'ember-data';

export default DS.Model.extend({
  country: DS.attr('string'),
  state: DS.attr('string'),
  city: DS.attr('string'),
  venue: DS.attr('string')
});
