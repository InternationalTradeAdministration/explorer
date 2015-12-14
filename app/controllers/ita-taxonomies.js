import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q', 'taxonomies', 'page'],

  q: null,
  qField: Ember.computed.oneWay('q'),

  page: 1,
  pageField: Ember.computed.oneWay('pageField'),

  taxonomies: null,
  taxonomiesField: function() {
    var taxonomies = String(this.get('taxonomies')).split(',');
    var selected = this.get('taxonomyList').filter(function(item) {
      return taxonomies.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('taxonomies'),

  taxonomyList: [
    {label: 'Industries', value: 'industries'},
    {label: 'Countries', value: 'countries'},
    {label: 'Initiatives', value: 'initiatives'},
    {label: 'World Regions', value: 'world regions'}
  ]
});
