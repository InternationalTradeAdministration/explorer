import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q', 'page'],

  q: null,
  qField: Ember.computed.oneWay('q'),

  page: 1,
  pageField: Ember.computed.oneWay('pageField')
});
