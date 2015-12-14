import Ember from 'ember';
import ENV from 'explorer/config/environment';

export default Ember.Controller.extend({
  title: ENV.appTitle,
  showCcg: false,
  showCcgReport: false,

  navItems: [
    { label: "Market Research Library", value: "market-research-library-entries"},
    { label: "Consolidated Screening List", value: "consolidated-screening-list-entries"},
    { label: "Trade Events", value: "trade-events"},
    { label: "Trade Leads", value: "trade-leads"},
    { label: "Tariff Rates", value: "tariff-rates"},
    { label: "FAQs on Exporting", value: "ita-faqs"},
    { label: "ITA Offices & Centers", value: "ita-office-locations"},
    { label: "Trade News & Articles", value: "sharepoint-trade-articles"},
    //{ label: "ECCNs", value: "eccns"},
    { label: "Zip Code to USEAC", value: "ita-zip-codes"},
    { label: "Business Service Providers", value: "business-service-providers"},
    { label: "Environmental Solutions", value: "environmental-solutions"},
    { label: "ITA Taxonomies", value: "ita-taxonomies"},
    { label: "De Minimis", value: "de-minimis"}
    //{ label: "Country Fact Sheets", value: "country-fact-sheets"}
  ],

  selectedSearchApi: undefined,
  watchType: function() {
    if (this.get('selectedSearchApi')) {
      var selected = this.get('selectedSearchApi').value;

      // To make it so that the select is always set to the default prompt.
      this.set('selectedSearchApi', undefined);

      this.transitionToRoute(selected);
    }
  }.observes('selectedSearchApi')
});
