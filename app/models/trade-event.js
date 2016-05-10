import DS from 'ember-data';

export default DS.Model.extend({
  event_name: DS.attr('string'),
  event_type: DS.attr('string'),

  start_date: DS.attr('string'),
  start_time: DS.attr('string'),
  end_date: DS.attr('string'),
  end_time: DS.attr('string'),
  time_zone: DS.attr('string'),

  cost: DS.attr('string'),
  cost_currency: DS.attr('string'),
  registration_link: DS.attr('string'),
  registration_title: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  source: DS.attr('string'),

  industries: DS.attr('array'),
  ita_industries: DS.attr('array'),

  venues: DS.hasMany('venue'),
  country: DS.attr('string'),
  country_name: DS.attr('string'),
  state: DS.attr('string'),
  city: DS.attr('string'),
  venue: DS.attr('string'),

  contacts: DS.hasMany('contact'),

  trade_regions: DS.attr('string'),
  world_regions: DS.attr('string'),

  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  person_title: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string'),

  searchResultHeader: function() {
    return this.get('event_name');
  }.property('event_name')
});
