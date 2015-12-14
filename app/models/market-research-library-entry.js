import DS from 'ember-data';

export default DS.Model.extend({

  countries: DS.attr('array'),

  description: DS.attr('string'),
  expiration_date: DS.attr('string'),
  industries: DS.attr('array'),
  ita_industries: DS.attr('array'),
  report_type: DS.attr('string'),
  title: DS.attr('string'),
  url: DS.attr('string'),

  searchResultHeader: function() {
    return this.get('title');
  }.property('title')
});
