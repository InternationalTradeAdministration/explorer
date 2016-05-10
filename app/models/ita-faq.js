import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr('string'),
  answer: DS.attr('string'),

  first_published_date: DS.attr('string'),
  last_published_date: DS.attr('string'),
  url: DS.attr('string'),

  topics: DS.attr('array'),
  industries: DS.attr('array'),
  countries: DS.attr('array'),
  trade_regions: DS.attr('array'),
  world_regions: DS.attr('array'),

  searchResultHeader: function() {
    return this.get('question');
  }.property('question')
});
