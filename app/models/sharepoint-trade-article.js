import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  short_title: DS.attr('string'),
  summary: DS.attr('string'),
  creation_date: DS.attr('string'),
  release_date: DS.attr('string'),
  expiration_date: DS.attr('string'),

  source_agencies: DS.attr('array'),
  source_business_units: DS.attr('array'),
  source_offices: DS.attr('array'),

  evergreen: DS.attr('string'),
  content: DS.attr('string'),
  keyword: DS.attr('string'),

  export_phases: DS.attr('array'),
  industries: DS.attr('array'),
  countries: DS.attr('array'),
  trade_regions: DS.attr('array'),
  trade_programs: DS.attr('array'),
  trade_initiatives: DS.attr('array'),
  geo_regions: DS.attr('array'),
  geo_subregions: DS.attr('array'),
  topics: DS.attr('array'),
  sub_topics: DS.attr('array'),

  seo_metadata_title: DS.attr('string'),
  seo_metadata_description: DS.attr('string'),
  seo_metadata_keyword: DS.attr('string'),
  trade_url: DS.attr('string'),
  file_url: DS.attr('array'),
  image_url: DS.attr('array'),
  url_html_source: DS.attr('array'),
  url_xml_source: DS.attr('array'),

  searchResultHeader: function() {
    return this.get('title');
  }.property('title')
});
