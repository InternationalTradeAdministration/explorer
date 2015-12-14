import DS from 'ember-data';

export default DS.Model.extend({

  country_name: DS.attr('string'),
  country: DS.attr('string'),
  de_minimis_value: DS.attr('string'),
  de_minimis_currency: DS.attr('string'),
  vat_amount: DS.attr('string'),
  vat_currency: DS.attr('string'),
  notes: DS.attr('string'),

  searchResultHeader: function() {
    return this.get('country_name');
  }.property('country_name')
});