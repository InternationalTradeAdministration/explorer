import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  post: DS.attr('string'),
  person_title: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string')
});
