import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q', 'sources', 'page', 'final_year', 'partner_start_year', 'reporter_start_year'],

  q: null,
  qField: Ember.computed.oneWay('q'),

  final_year: null,
  finalYearFieldStart: null,
  finalYearFieldEnd: null,

  partner_start_year: null,
  partnerYearFieldStart: null,
  partnerYearFieldEnd: null,

  reporter_start_year: null,
  reporterYearFieldStart: null,
  reporterYearFieldEnd: null,

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
