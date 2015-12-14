import DS from 'ember-data';

export default DS.Model.extend({
  address: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  postal_code: DS.attr('string'),
  country: DS.attr('string'),

  consolidatedScreeningListEntry: DS.belongsTo('consolidated-screening-list-entry')
});
