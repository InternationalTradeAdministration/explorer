import DS from 'ember-data';

export default DS.Model.extend({
  ita_contact_email: DS.attr('string'),
  company_name: DS.attr('string'),
  company_phone: DS.attr('string'),
  company_address: DS.attr('string'),
  company_website: DS.attr('string'),
  company_description: DS.attr('string'),
  company_email: DS.attr('string'),
  ita_office: DS.attr('string'),
  contact_title: DS.attr('string'),
  contact_name: DS.attr('string'),
  category: DS.attr('string'),

  searchResultHeader: function() {
    return this.get('company_name');
  }.property('company_name')
});
