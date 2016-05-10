import DS from 'ember-data';

export default DS.Model.extend({
  year: DS.attr('string'),
  value: DS.attr('string'),

  tariffRate: DS.belongsTo('tariff-rate')
});
