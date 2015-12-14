import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: { refreshModel: true },
    sources: { refreshModel: true },
    page: { refreshModel: true },
    final_year: { refreshModel: true },
    partner_start_year: { refreshModel: true },
    reporter_start_year: { refreshModel: true }
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
      this.controller.set('page', (page || 1));

      var yearRegex = /^[0-9]{4}$/;
      var finalYearFieldStart = this.controller.get('finalYearFieldStart'),
        finalYearFieldEnd = this.controller.get('finalYearFieldEnd'),
        partnerYearFieldStart = this.controller.get('partnerYearFieldStart'),
        partnerYearFieldEnd = this.controller.get('partnerYearFieldEnd'),
        reporterYearFieldStart = this.controller.get('reporterYearFieldStart'),
        reporterYearFieldEnd = this.controller.get('reporterYearFieldEnd');

      if (yearRegex.test(finalYearFieldStart) && yearRegex.test(finalYearFieldEnd)) {
        this.controller.set('final_year', finalYearFieldStart + " TO " + finalYearFieldEnd);
      } else {
        this.controller.set('final_year', null);
      }

      if (yearRegex.test(partnerYearFieldStart) && yearRegex.test(partnerYearFieldEnd)) {
        this.controller.set('partner_start_year', partnerYearFieldStart+ " TO " + partnerYearFieldEnd);
      } else {
        this.controller.set('partner_start_year', null);
      }

      if (yearRegex.test(reporterYearFieldStart) && yearRegex.test(reporterYearFieldEnd)) {
        this.controller.set('reporter_start_year', reporterYearFieldStart + " TO " + reporterYearFieldEnd);
      } else {
        this.controller.set('reporter_start_year', null);
      }

    }
  }
});
