import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q', 'sources', 'page', 'final_years', 'partner_start_years', 'reporter_start_years'],

  q: null,
  qField: Ember.computed.oneWay('q'),

  final_years: null,
  finalYearsField: Ember.computed.oneWay('final_years'),

  partner_start_years: null,
  partnerStartYearsField: Ember.computed.oneWay('partner_start_years'),

  reporter_start_years: null,
  reporterStartYearsField: Ember.computed.oneWay('reporter_start_years'),

  sources: null,
  sourcesField: function() {
    var sources = String(this.get('sources')).split(',');
    var selected = this.get('sourceList').filter(function(item) {
      return sources.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('sources'),

  page: 1,
  pageField: Ember.computed.oneWay('pageField'),

  sourceList: [
    {value: 'AU', label: 'Australia'},
    {value: 'BH', label: 'Bahrain'},
    {value: 'CL', label: 'Chile'},
    {value: 'CO', label: 'Colombia'},
    {value: 'CR', label: 'Costa Rica'},
    {value: 'DO', label: 'Dominican Republic'},
    {value: 'SV', label: 'El Salvador'},
    {value: 'GT', label: 'Guatemala'},
    {value: 'HN', label: 'Honduras'},
    {value: 'MA', label: 'Morocco'},
    {value: 'NI', label: 'Nicaragua'},
    {value: 'OM', label: 'Oman'},
    {value: 'PA', label: 'Panama'},
    {value: 'PE', label: 'Peru'},
    {value: 'SG', label: 'Singapore'},
    {value: 'KR', label: 'South Korea'}
  ],
});
