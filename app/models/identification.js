import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),
  number: DS.attr('string'),
  country: DS.attr('string'),
  issue_date: DS.attr('string'),
  expiration_date: DS.attr('string'),

  consolidatedScreeningListEntry: DS.belongsTo('consolidated-screening-list-entry')
});
