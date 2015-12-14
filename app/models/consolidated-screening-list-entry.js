import DS from 'ember-data';

export default DS.Model.extend({

  addresses: DS.hasMany('address'),
  alt_names: DS.attr('array'),

  call_sign: DS.attr('string'),
  citizenships: DS.attr('array'),

  dates_of_birth: DS.attr('array'),

  end_date: DS.attr('string'),
  entity_number: DS.attr('string'),

  federal_register_notice: DS.attr('string'),

  gross_registered_tonnage: DS.attr('string'),
  gross_tonnage: DS.attr('string'),

  identifications: DS.hasMany('identification'),

  license_policy: DS.attr('string'),
  license_requirement: DS.attr('string'),

  name: DS.attr('string'),
  nationalities: DS.attr('array'),

  places_of_birth: DS.attr('array'),
  programs: DS.attr('array'),

  remarks: DS.attr('string'),

  source: DS.attr('string'),
  source_information_url: DS.attr('string'),
  source_list_url: DS.attr('string'),
  standard_order: DS.attr('string'),
  start_date: DS.attr('string'),

  title: DS.attr('string'),
  type: DS.attr('string'),

  vessel_flag: DS.attr('string'),
  vessel_owner: DS.attr('string'),
  vessel_type: DS.attr('string'),

  score: DS.attr('string'),

  searchResultHeader: function() {
    return this.get('name');
  }.property('name')
});
