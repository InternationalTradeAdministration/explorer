import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: { refreshModel: true },
    sources: { refreshModel: true },
    page: { refreshModel: true },
    final_years: { refreshModel: true },
    partner_start_years: { refreshModel: true },
    reporter_start_years: { refreshModel: true }
  },

  actions: {
    search: function(page) {
      var sources,
        sourcesField = this.controller.get('sourcesField');

      if (sourcesField) {
        sources = sourcesField.map(function(item) {
          return item.value;
        });
      }
      this.controller.set('sources', sources);

      this.controller.set('q', this.controller.get('qField'));
      this.controller.set('final_years', this.controller.get('finalYearsField'));
      this.controller.set('partner_start_years', this.controller.get('partnerStartYearsField'));
      this.controller.set('reporter_start_years', this.controller.get('reporterStartYearsField'));

      this.controller.set('page', (page || 1));
    }
  }
});
