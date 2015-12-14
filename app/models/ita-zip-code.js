import DS from 'ember-data';

export default DS.Model.extend({

  zip_code: DS.attr('string'),
  zip_city: DS.attr('string'),

  post: DS.attr('string'),
  office_name: DS.attr('string'),
  country: DS.attr('string'),
  state: DS.attr('string'),

  address: DS.attr('array'),

  email: DS.attr('string'),
  fax: DS.attr('string'),
  mail_instructions: DS.attr('string'),
  phone: DS.attr('string'),
  post_city: DS.attr('string'),

  searchResultHeader: function() {
    return this.get('zip_code') + ' - ' + this.get('zip_city') + ' ' + this.get('state');
  }.property('zip_code', 'zip_city', 'state')
});
