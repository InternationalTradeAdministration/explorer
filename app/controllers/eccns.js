import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q', 'description', 'page'],

  q: null,
  qField: Ember.computed.oneWay('q'),

  description: null,
  descriptionField: Ember.computed.oneWay('description'),

  page: 1,
  pageField: Ember.computed.oneWay('pageField')
});
