import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q', 'types', 'page', 'labels'],

  q: null,
  qField: Ember.computed.oneWay('q'),

  labels: null,
  labelsField: Ember.computed.oneWay('labels'),

  page: 1,
  pageField: Ember.computed.oneWay('pageField'),

  types: null,
  typesField: function() {
    var types = String(this.get('types')).split(',');
    var selected = this.get('typeList').filter(function(item) {
      return types.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('types'),

  typeList: [
    {label: 'Industries', value: 'Industries'},
    {label: 'Countries', value: 'Countries'},
    {label: 'Topics', value: 'Topics'},
    {label: 'World Regions', value: 'World Regions'},
    {label: 'Trade Regions', value: 'Trade Regions'}
  ]
});
