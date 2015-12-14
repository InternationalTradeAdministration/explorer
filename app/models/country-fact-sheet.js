import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content_html: DS.attr('string'),
  published_date: DS.attr('string'),
  source: DS.attr('string'),

  country: DS.attr('array'),
  topic: DS.attr('array'),

  searchResultHeader: function() {
    return this.get('title');
  }.property('title')
});
