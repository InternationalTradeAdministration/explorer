import DS from 'ember-data';

export default DS.Model.extend({

  post: DS.attr('string'),
  office_name: DS.attr('string'),
  country: DS.attr('string'),
  state: DS.attr('string'),

  address: DS.attr('array'),

  email: DS.attr('string'),
  fax: DS.attr('string'),
  mail_instructions: DS.attr('string'),
  phone: DS.attr('string'),
  post_type: DS.attr('string'),

  searchResultHeader: function() {
    return this.get('post');
  }.property('post')
});
