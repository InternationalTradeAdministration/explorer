import DS from 'ember-data';

export default DS.Model.extend({
  source_id: DS.attr('string'),
  name_chinese: DS.attr('string'),
  name_english: DS.attr('string'),
  name_french: DS.attr('string'),
  name_portuguese: DS.attr('string'),
  name_spanish: DS.attr('string'),
  source_created_at: DS.attr('string'),
  source_updated_at: DS.attr('string'),

  searchResultHeader: function() {
    return this.get('name_english');
  }.property('name_english')
});
