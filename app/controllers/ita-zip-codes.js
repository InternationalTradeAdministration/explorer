import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q', 'zip_codes', 'page'],

  q: null,
  qField: Ember.computed.oneWay('q'),

  zip_codes: null,
  zipCodesField: Ember.computed.oneWay('zip_codes'),

  page: 1,
  pageField: Ember.computed.oneWay('pageField'),

});
