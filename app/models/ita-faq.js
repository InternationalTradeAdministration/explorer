import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr('string'),
  answer: DS.attr('string'),

  update_date: DS.attr('string'),

  topic: DS.attr('array'),
  industry: DS.attr('array'),
  country: DS.attr('array'),

  searchResultHeader: function() {
    return this.get('question');
  }.property('question')
});
