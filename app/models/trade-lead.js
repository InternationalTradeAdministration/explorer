import DS from 'ember-data';

export default DS.Model.extend({

  specific_address: DS.attr('string'),
  project_number: DS.attr('string'),
  project_size: DS.attr('string'),
  tags: DS.attr('string'),
  funding_source: DS.attr('string'),
  borrowing_entity: DS.attr('string'),
  comments: DS.attr('string'),
  submitting_officer: DS.attr('string'),
  submitting_officer_contact: DS.attr('string'),
  country: DS.attr('string'),
  title: DS.attr('string'),
  reference_number: DS.attr('string'),
  contract_number: DS.attr('contract_number'),
  publish_date: DS.attr('string'),
  end_date: DS.attr('string'),
  publish_date_amended: DS.attr('string'),
  status: DS.attr('string'),
  industry: DS.attr('string'),
  specific_location: DS.attr('string'),
  notice_type: DS.attr('string'),
  trade_agreement: DS.attr('string'),
  bid_type: DS.attr('string'),
  competitive_procurement_strategy: DS.attr('string'),
  non_competitive_procurement_strategy: DS.attr('string'),
  procurement_organization: DS.attr('string'),
  procurement_organization_address: DS.attr('string'),
  implementing_entity: DS.attr('string'),
  description: DS.attr('string'),
  contact: DS.attr('string'),
  urls: DS.attr('string'),
  source: DS.attr('string'),
  procurement_office: DS.attr('string'),
  procurement_office_address: DS.attr('string'),
  classification_code: DS.attr('string'),
  url: DS.attr('string'),
  lead_source: DS.attr('string'),
  min_contract_value: DS.attr('string'),
  max_contract_value: DS.attr('string'),
  categories: DS.attr('array'),

  searchResultHeader: function() {
    return (this.get('title') || this.get('description'));
  }.property('title')
});
