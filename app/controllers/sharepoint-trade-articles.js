import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q', 'countries', 'industries', 'export_phases', 'topics',
    'sub_topics', 'geo_regions', 'geo_subregions', 'trade_regions',
    'trade_programs', 'trade_initiatives', 'page', 'creation_date', 'release_date',
    'expiration_date'
  ],

  q: null,
  qField: Ember.computed.oneWay('q'),

  creation_date: null,
  creationDateFieldStart: null,
  creationDateFieldEnd: null,

  release_date: null,
  releaseDateFieldStart: null,
  releaseDateFieldEnd: null,

  expiration_date: null,
  expirationDateFieldStart: null,
  expirationDateFieldEnd: null,

  industries: null,
  industriesField: function() {
    var industries = String(this.get('industries')).split(',');
    var selected = this.get('industryList').filter(function(item) {
      return industries.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('industries'),

  countries: null,
  countriesField: function() {
    var countries = String(this.get('countries')).split(',');
    var selected = this.get('countryList').filter(function(item) {
      return countries.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('countries'),

  export_phases: null,
  exportPhasesField: function() {
    var export_phases = String(this.get('export_phases')).split(',');
    var selected = this.get('exportPhaseList').filter(function(item) {
      return export_phases.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('export_phases'),

  topics: null,
  topicsField: function() {
    var topics = String(this.get('topics')).split(',');
    var selected = this.get('topicList').filter(function(item) {
      return topics.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('topics'),

  sub_topics: null,
  subTopicsField: function() {
    var sub_topics = String(this.get('sub_topics')).split(',');
    var selected = this.get('subTopicList').filter(function(item) {
      return sub_topics.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('sub_topics'),

  geo_regions: null,
  geoRegionsField: function() {
    var geo_regions = String(this.get('geo_regions')).split(',');
    var selected = this.get('geoRegionList').filter(function(item) {
      return geo_regions.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('geo_regions'),

  geo_subregions: null,
  geoSubregionsField: function() {
    var geo_subregions = String(this.get('geo_subregions')).split(',');
    var selected = this.get('geoSubregionList').filter(function(item) {
      return geo_subregions.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('geo_subregions'),

  trade_regions: null,
  tradeRegionsField: function() {
    var trade_regions = String(this.get('trade_regions')).split(',');
    var selected = this.get('tradeRegionList').filter(function(item) {
      return trade_regions.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('trade_regions'),

  trade_programs: null,
  tradeProgramsField: function() {
    var trade_programs = String(this.get('trade_programs')).split(',');
    var selected = this.get('tradeProgramList').filter(function(item) {
      return trade_programs.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('trade_programs'),

  trade_initiatives: null,
  tradeInitiativesField: function() {
    var trade_initiatives = String(this.get('trade_initiatives')).split(',');
    var selected = this.get('tradeInitiativeList').filter(function(item) {
      return trade_initiatives.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('trade_initiatives'),

  page: 1,
  pageField: Ember.computed.oneWay('pageField'),

  exportPhaseList: [
    {label: 'Expand', value: 'Expand'},
    {label: 'Exporting', value: 'Exporting'},
    {label: 'Learn', value: 'Learn'},
    {label: 'Ready', value: 'Ready'}
  ],

  industryList: [
    {label: 'Aerospace & Defense', value: 'Aerospace & Defense'},
    {label: 'Agribusiness', value: 'Agribusiness'},
    {label: 'Architecture & Engineering', value: 'Architecture & Engineering'},
    {label: 'Automotive & Ground Transportation', value: 'Automotive & Ground Transportation'},
    {label: 'Chemicals, Plastics & Composites', value: 'Chemicals, Plastics & Composites'},
    {label: 'Construction, Building & Heavy Equipment', value: 'Construction, Building & Heavy Equipment'},
    {label: 'Consumer Goods & Home Furnishings', value: 'Consumer Goods & Home Furnishings'},
    {label: 'Education', value: 'Education'},
    {label: 'Energy & Mining', value: 'Energy & Mining'},
    {label: 'Environmental Technologies', value: 'Environmental Technologies'},
    {label: 'Finance', value: 'Finance'},
    {label: 'Food Processing & Packaging', value: 'Food Processing & Packaging'},
    {label: 'Franchising', value: 'Franchising'},
    {label: 'Health Technologies', value: 'Health Technologies'},
    {label: 'Industrial Equipments & Supplies', value: 'Industrial Equipments & Supplies'},
    {label: 'Information & Communication', value: 'Information & Communication'},
    {label: 'Marine Technology', value: 'Marine Technology'},
    {label: 'Media & Entertainment', value: 'Media & Entertainment'},
    {label: 'Metal Manufacturing & Products', value: 'Metal Manufacturing & Products'},
    {label: 'Publishing', value: 'Publishing'},
    {label: 'Security & Safety', value: 'Security & Safety'},
    {label: 'Services', value: 'Services'},
    {label: 'Textiles, Apparel & Sporting Goods', value: 'Textiles, Apparel & Sporting Goods'},
    {label: 'Travel', value: 'Travel'},
    {label: 'Used & Reconditioned Equipment', value: 'Used & Reconditioned Equipment'}
  ],

  topicList: [
    {label: 'Export Training', value: 'Export Training'},
    {label: 'Exporting', value: 'Exporting'},
    {label: 'Free Trade Agreements', value: 'Free Trade Agreements'},
    {label: 'International Logistics', value: 'International Logistics'},
    {label: 'Market Intelligence', value: 'Market Intelligence'},
    {label: 'Trade Counseling', value: 'Trade Counseling'},
    {label: 'Trade Finance', value: 'Trade Finance'},
    {label: 'Trade Problems', value: 'Trade Problems'},
    {label: 'Trade Promotion', value: 'Trade Promotion'},
    {label: 'Trade Regulations', value: 'Trade Regulations'},
    {label: 'Trade Remedies', value: 'Trade Remedies'}
  ],

  subTopicList: [
    {label: 'Export Training', value: 'Export Training'},
    {label: 'Automated Export System', value: 'Automated Export System'},
    {label: 'Export Control Classification', value: 'Export Control Classification'},
    {label: 'Freight Forwarder', value: 'Freight Forwarder'},
    {label: 'Incoterms', value: 'Incoterms'},
    {label: 'Shipping', value: 'Shipping'},
    {label: 'Cargo Screening', value: 'Cargo Screening'},
    {label: 'Tariffs and Import Fees', value: 'Tariffs and Import Fees'},
    {label: 'Certificate of Origin', value: 'Certificate of Origin'},
    {label: 'Schedule B and HS Number', value: 'Schedule B and HS Number'},
    {label: 'Market Research', value: 'Market Research'},
    {label: 'Trade Data and Analysis', value: 'Trade Data and Analysis'},
    {label: 'Business Matchmaking', value: 'Business Matchmaking'},
    {label: 'Business Planning', value: 'Business Planning'},
    {label: 'Commercial Diplomacy', value: 'Commercial Diplomacy'},
    {label: 'Export Trade Certificate of Review', value: 'Export Trade Certificate of Review'},
    {label: 'Pricing', value: 'Pricing'},
    {label: 'Marketing', value: 'Marketing'},
    {label: 'E-Commerce', value: 'E-Commerce'},
    {label: 'Trade Leads', value: 'Trade Leads'},
    {label: 'Trade Missions', value: 'Trade Missions'},
    {label: 'Sales', value: 'Sales'},
    {label: 'U.S.-Israel Free Trade Area Agreement', value: 'U.S.-Israel Free Trade Area Agreement'},
    {label: 'U.S.-Jordan Free Trade Agreement', value: 'U.S.-Jordan Free Trade Agreement'},
    {label: 'U.S.-Australia Free Trade Agreement', value: 'U.S.-Australia Free Trade Agreement'},
    {label: 'U.S.-Chile Free Trade Agreement', value: 'U.S.-Chile Free Trade Agreement'},
    {label: 'U.S.-Singapore Free Trade Agreement', value: 'U.S.-Singapore Free Trade Agreement'},
    {label: 'U.S.-Bahrain Free Trade Agreement', value: 'U.S.-Bahrain Free Trade Agreement'},
    {label: 'U.S.-Morocco Free Trade Agreement', value: 'U.S.-Morocco Free Trade Agreement'},
    {label: 'U.S.-Oman Free Trade Agreement', value: 'U.S.-Oman Free Trade Agreement'},
    {label: 'U.S.-Peru Free Trade Agreement', value: 'U.S.-Peru Free Trade Agreement'},
    {label: 'U.S.-Panama Trade Promotion Agreement', value: 'U.S.-Panama Trade Promotion Agreement'},
    {label: 'U.S.-Colombia Trade Promotion Agreement', value: 'U.S.-Colombia Trade Promotion Agreement'},
    {label: 'U.S.-Korea Free Trade Agreement', value: 'U.S.-Korea Free Trade Agreement'},
    {label: 'CAFTA-DR', value: 'CAFTA-DR'},
    {label: 'NAFTA', value: 'NAFTA'},
    {label: 'Export Credit Insurance', value: 'Export Credit Insurance'},
    {label: 'Loans', value: 'Loans'},
    {label: 'Grants', value: 'Grants'},
    {label: 'Factoring and Forfaiting', value: 'Factoring and Forfaiting'},
    {label: 'Payments', value: 'Payments'},
    {label: 'Export Licenses', value: 'Export Licenses'},
    {label: 'Dual Use Export Licenses', value: 'Dual Use Export Licenses'},
    {label: 'Legal Assistance', value: 'Legal Assistance'},
    {label: 'Foreign Corrupt Practices Act', value: 'Foreign Corrupt Practices Act'},
    {label: 'Anti-Boycott Regulations', value: 'Anti-Boycott Regulations'},
    {label: 'Safe Harbor', value: 'Safe Harbor'},
    {label: 'CE Marking', value: 'CE Marking'},
    {label: 'Export Control', value: 'Export Control'},
    {label: 'Bribery', value: 'Bribery'},
    {label: 'Excessive Licensing Fees', value: 'Excessive Licensing Fees'},
    {label: 'Excessive Government Requirements', value: 'Excessive Government Requirements'},
    {label: 'Government Contracting Barriers', value: 'Government Contracting Barriers'},
    {label: 'Intellectual Property Infringement', value: 'Intellectual Property Infringement'},
    {label: 'Investment Barriers', value: 'Investment Barriers'},
    {label: 'Rules of Origin', value: 'Rules of Origin'},
    {label: 'Service Barriers', value: 'Service Barriers'},
    {label: 'Standards or Certification Barriers', value: 'Standards or Certification Barriers'},
    {label: 'Tariff and Customs Barriers', value: 'Tariff and Customs Barriers'},
    {label: 'Anti-Dumping', value: 'Anti-Dumping'},
    {label: 'Countervailing Duty Measures', value: 'Countervailing Duty Measures'},
    {label: 'Safeguards', value: 'Safeguards'}
  ],

  geoRegionList:[
    {label: 'Africa', value: 'Africa'},
    {label: 'Asia', value: 'Asia'},
    {label: 'Caribbean', value: 'Caribbean'},
    {label: 'Central America', value: 'Central America'},
    {label: 'Europe', value: 'Europe'},
    {label: 'Middle East', value: 'Middle East'},
    {label: 'North America', value: 'North America'},
    {label: 'Oceania', value: 'Oceania'},
    {label: 'South America', value: 'South America'}
  ],

  geoSubregionList: [
    {label: 'North Africa', value: 'North Africa'},
    {label: 'Sub-Saharan Africa', value: 'Sub-Saharan Africa'},
    {label: 'West Africa', value: 'West Africa'},
    {label: 'Asia Pacific', value: 'Asia Pacific'},
    {label: 'Central Asia', value: 'Central Asia'},
    {label: 'East Asia', value: 'East Asia'},
    {label: 'South Asia', value: 'South Asia'},
    {label: 'Southeast Asia', value: 'Southeast Asia'}
  ],

  tradeInitiativeList: [
    {label: 'Discover Global Markets', value: 'Discover Global Markets'},
    {label: 'Doing Business in Africa', value: 'Doing Business in Africa'},
    {label: 'Export Control Reform', value: 'Export Control Reform'},
    {label: 'Look South', value: 'Look South'},
    {label: 'National Export Initiative', value: 'National Export Initiative'},
    {label: 'NEI Next', value: 'NEI Next'},
    {label: 'Rural Export Initiative', value: 'Rural Export Initiative'}
  ],

  tradeProgramList: [
    {label: 'Advisory Committees', value: 'Advisory Committees'},
    {label: 'Advocacy', value: 'Advocacy'},
    {label: 'Afghanistan Investment and Reconstruction', value: 'Afghanistan Investment and Reconstruction'},
    {label: 'Americas Competitiveness Forum', value: 'Americas Competitiveness Forum'},
    {label: 'CE Marking', value: 'CE Marking'},
    {label: 'Civil Nuclear', value: 'Civil Nuclear'},
    {label: 'Environmental Solutions', value: 'Environmental Solutions'},
    {label: 'Export & Trade Counseling Certification', value: 'Export & Trade Counseling Certification'},
    {label: 'Export Control Reform', value: 'Export Control Reform'},
    {label: 'Good Governance', value: 'Good Governance'},
    {label: 'International Buyer Program', value: 'International Buyer Program'},
    {label: 'Invest in America', value: 'Invest in America'},
    {label: 'Iraq Investment and Reconstruction', value: 'Iraq Investment and Reconstruction'},
    {label: 'Market Development Cooperator Program', value: 'Market Development Cooperator Program'},
    {label: 'Minority Exporters Seminar', value: 'Minority Exporters Seminar'},
    {label: 'National Export Initiative', value: 'National Export Initiative'},
    {label: 'Presidents E & E Star Awards', value: 'Presidents E & E Star Awards'},
    {label: 'Renewable Energy and Energy Efficiency', value: 'Renewable Energy and Energy Efficiency'},
    {label: 'SABIT', value: 'SABIT'},
    {label: 'Safe Harbor', value: 'Safe Harbor'},
    {label: 'Seaports Partnership', value: 'Seaports Partnership'},
    {label: 'StopFakes', value: 'StopFakes'},
    {label: 'Strategic Partnership Program', value: 'Strategic Partnership Program'},
    {label: 'Sustainable Business', value: 'Sustainable Business'},
    {label: 'Trade Fair Certification', value: 'Trade Fair Certification'},
    {label: 'E-Awards', value: 'E-Awards'},
    {label: 'Featured U.S. Exporters - FUSE', value: 'Featured U.S. Exporters - FUSE'},
    {label: 'Strategic Partnerships', value: 'Strategic Partnerships'},
    {label: 'Business Service Providers- BSP', value: 'Business Service Providers- BSP'}
  ],

  tradeRegionList: [
    {label: 'African Growth and Opportunity Act', value: 'African Growth and Opportunity Act'},
    {label: 'Asia Pacific Economic Cooperation', value: 'Asia Pacific Economic Cooperation'},
    {label: 'Association of South East Asian Nations', value: 'Association of South East Asian Nations'},
    {label: 'Central America-Dominican Republic Free Trade Agreement', value: 'Central America-Dominican Republic Free Trade Agreement'},
    {label: 'Andean Community', value: 'Andean Community'},
    {label: 'Caribbean Community and Common Market', value: 'Caribbean Community and Common Market'},
    {label: 'Economic and Monetary Community of Central Africa', value: 'Economic and Monetary Community of Central Africa'},
    {label: 'Commonwealth of Independent States', value: 'Commonwealth of Independent States'},
    {label: 'Common Market for Eastern and Southern Africa', value: 'Common Market for Eastern and Southern Africa'},
    {label: 'Economic Cooperation Organization', value: 'Economic Cooperation Organization'},
    {label: 'European Free Trade Association', value: 'European Free Trade Association'},
    {label: 'European Union - 25', value: 'European Union - 25'},
    {label: 'European Union - 27', value: 'European Union - 27'},
    {label: 'Free Trade Area of the Americas', value: 'Free Trade Area of the Americas'},
    {label: 'Gulf Cooperation Council', value: 'Gulf Cooperation Council'},
    {label: 'Global System of Trade Preferences among Developing Countries', value: 'Global System of Trade Preferences among Developing Countries'},
    {label: 'Southern Common Market', value: 'Southern Common Market'},
    {label: 'North American Free Trade Agreement', value: 'North American Free Trade Agreement'},
    {label: 'Organization of the Petroleum Exporting Countries', value: 'Organization of the Petroleum Exporting Countries'},
    {label: 'South Asian Association for Regional Cooperation', value: 'South Asian Association for Regional Cooperation'},
    {label: 'South African Customs Union', value: 'South African Customs Union'},
    {label: 'South African Development Community', value: 'South African Development Community'},
    {label: 'West African Economic and Monetary Union', value: 'West African Economic and Monetary Union'}
  ],

  countryList: [
    {label: 'Afghanistan', value: 'AF'},
    {label: 'Åland', value: 'AX'},
    {label: 'Albania', value: 'AL'},
    {label: 'Algeria', value: 'DZ'},
    {label: 'American Samoa', value: 'AS'},
    {label: 'Andorra', value: 'AD'},
    {label: 'Angola', value: 'AO'},
    {label: 'Anguilla', value: 'AI'},
    {label: 'Antarctica', value: 'AQ'},
    {label: 'Antigua and Barbuda', value: 'AG'},
    {label: 'Argentina', value: 'AR'},
    {label: 'Armenia', value: 'AM'},
    {label: 'Aruba', value: 'AW'},
    {label: 'Australia', value: 'AU'},
    {label: 'Austria', value: 'AT'},
    {label: 'Azerbaijan', value: 'AZ'},
    {label: 'Bahamas', value: 'BS'},
    {label: 'Bahrain', value: 'BH'},
    {label: 'Bangladesh', value: 'BD'},
    {label: 'Barbados', value: 'BB'},
    {label: 'Belarus', value: 'BY'},
    {label: 'Belgium', value: 'BE'},
    {label: 'Belize', value: 'BZ'},
    {label: 'Benin', value: 'BJ'},
    {label: 'Bermuda', value: 'BM'},
    {label: 'Bhutan', value: 'BT'},
    {label: 'Bolivia', value: 'BO'},
    {label: 'Bosnia and Herzegovina', value: 'BA'},
    {label: 'Botswana', value: 'BW'},
    {label: 'Bouvet Island', value: 'BV'},
    {label: 'Brazil', value: 'BR'},
    {label: 'British Indian Ocean Territory', value: 'IO'},
    {label: 'Brunei Darussalam', value: 'BN'},
    {label: 'Bulgaria', value: 'BG'},
    {label: 'Burkina Faso', value: 'BF'},
    {label: 'Burundi', value: 'BI'},
    {label: 'Cambodia', value: 'KH'},
    {label: 'Cameroon', value: 'CM'},
    {label: 'Canada', value: 'CA'},
    {label: 'Cape Verde', value: 'CV'},
    {label: 'Cayman Islands', value: 'KY'},
    {label: 'Central African Republic', value: 'CF'},
    {label: 'Chad', value: 'TD'},
    {label: 'Chile', value: 'CL'},
    {label: 'China', value: 'CN'},
    {label: 'Christmas Island', value: 'CX'},
    {label: 'Cocos (Keeling) Islands', value: 'CC'},
    {label: 'Colombia', value: 'CO'},
    {label: 'Comoros', value: 'KM'},
    {label: 'Congo (Brazzaville)', value: 'CG'},
    {label: 'Congo (Kinshasa)', value: 'CD'},
    {label: 'Cook Islands', value: 'CK'},
    {label: 'Costa Rica', value: 'CR'},
    {label: "Côte d'Ivoire", value: 'CI'},
    {label: 'Croatia', value: 'HR'},
    {label: 'Cuba', value: 'CU'},
    {label: 'Cyprus', value: 'CY'},
    {label: 'Czech Republic', value: 'CZ'},
    {label: 'Denmark', value: 'DK'},
    {label: 'Djibouti', value: 'DJ'},
    {label: 'Dominica', value: 'DM'},
    {label: 'Dominican Republic', value: 'DO'},
    {label: 'Ecuador', value: 'EC'},
    {label: 'Egypt', value: 'EG'},
    {label: 'El Salvador', value: 'SV'},
    {label: 'Equatorial Guinea', value: 'GQ'},
    {label: 'Eritrea', value: 'ER'},
    {label: 'Estonia', value: 'EE'},
    {label: 'Ethiopia', value: 'ET'},
    {label: 'Falkland Islands', value: 'FK'},
    {label: 'Faroe Islands', value: 'FO'},
    {label: 'Fiji', value: 'FJ'},
    {label: 'Finland', value: 'FI'},
    {label: 'France', value: 'FR'},
    {label: 'French Guiana', value: 'GF'},
    {label: 'French Polynesia', value: 'PF'},
    {label: 'French Southern Lands', value: 'TF'},
    {label: 'Gabon', value: 'GA'},
    {label: 'Gambia', value: 'GM'},
    {label: 'Georgia', value: 'GE'},
    {label: 'Germany', value: 'DE'},
    {label: 'Ghana', value: 'GH'},
    {label: 'Gibraltar', value: 'GI'},
    {label: 'Greece', value: 'GR'},
    {label: 'Greenland', value: 'GL'},
    {label: 'Grenada', value: 'GD'},
    {label: 'Guadeloupe', value: 'GP'},
    {label: 'Guam', value: 'GU'},
    {label: 'Guatemala', value: 'GT'},
    {label: 'Guernsey', value: 'GG'},
    {label: 'Guinea', value: 'GN'},
    {label: 'Guinea-Bissau', value: 'GW'},
    {label: 'Guyana', value: 'GY'},
    {label: 'Haiti', value: 'HT'},
    {label: 'Heard and McDonald Islands', value: 'HM'},
    {label: 'Honduras', value: 'HN'},
    {label: 'Hong Kong', value: 'HK'},
    {label: 'Hungary', value: 'HU'},
    {label: 'Iceland', value: 'IS'},
    {label: 'India', value: 'IN'},
    {label: 'Indonesia', value: 'ID'},
    {label: 'Iran', value: 'IR'},
    {label: 'Iraq', value: 'IQ'},
    {label: 'Ireland', value: 'IE'},
    {label: 'Isle of Man', value: 'IM'},
    {label: 'Israel', value: 'IL'},
    {label: 'Italy', value: 'IT'},
    {label: 'Jamaica', value: 'JM'},
    {label: 'Japan', value: 'JP'},
    {label: 'Jersey', value: 'JE'},
    {label: 'Jordan', value: 'JO'},
    {label: 'Kazakhstan', value: 'KZ'},
    {label: 'Kenya', value: 'KE'},
    {label: 'Kiribati', value: 'KI'},
    {label: 'Korea, North', value: 'KP'},
    {label: 'Korea, South', value: 'KR'},
    {label: 'Kuwait', value: 'KW'},
    {label: 'Kyrgyzstan', value: 'KG'},
    {label: 'Laos', value: 'LA'},
    {label: 'Latvia', value: 'LV'},
    {label: 'Lebanon', value: 'LB'},
    {label: 'Lesotho', value: 'LS'},
    {label: 'Liberia', value: 'LR'},
    {label: 'Libya', value: 'LY'},
    {label: 'Liechtenstein', value: 'LI'},
    {label: 'Lithuania', value: 'LT'},
    {label: 'Luxembourg', value: 'LU'},
    {label: 'Macau', value: 'MO'},
    {label: 'Macedonia', value: 'MK'},
    {label: 'Madagascar', value: 'MG'},
    {label: 'Malawi', value: 'MW'},
    {label: 'Malaysia', value: 'MY'},
    {label: 'Maldives', value: 'MV'},
    {label: 'Mali', value: 'ML'},
    {label: 'Malta', value: 'MT'},
    {label: 'Marshall Islands', value: 'MH'},
    {label: 'Martinique', value: 'MQ'},
    {label: 'Mauritania', value: 'MR'},
    {label: 'Mauritius', value: 'MU'},
    {label: 'Mayotte', value: 'YT'},
    {label: 'Mexico', value: 'MX'},
    {label: 'Micronesia', value: 'FM'},
    {label: 'Moldova', value: 'MD'},
    {label: 'Monaco', value: 'MC'},
    {label: 'Mongolia', value: 'MN'},
    {label: 'Montenegro', value: 'ME'},
    {label: 'Montserrat', value: 'MS'},
    {label: 'Morocco', value: 'MA'},
    {label: 'Mozambique', value: 'MZ'},
    {label: 'Myanmar', value: 'MM'},
    {label: 'Namibia', value: 'NA'},
    {label: 'Nauru', value: 'NR'},
    {label: 'Nepal', value: 'NP'},
    {label: 'Netherlands', value: 'NL'},
    {label: 'Netherlands Antilles', value: 'AN'},
    {label: 'New Caledonia', value: 'NC'},
    {label: 'New Zealand', value: 'NZ'},
    {label: 'Nicaragua', value: 'NI'},
    {label: 'Niger', value: 'NE'},
    {label: 'Nigeria', value: 'NG'},
    {label: 'Niue', value: 'NU'},
    {label: 'Norfolk Island', value: 'NF'},
    {label: 'Northern Mariana Islands', value: 'MP'},
    {label: 'Norway', value: 'NO'},
    {label: 'Oman', value: 'OM'},
    {label: 'Pakistan', value: 'PK'},
    {label: 'Palau', value: 'PW'},
    {label: 'Palestine', value: 'PS'},
    {label: 'Panama', value: 'PA'},
    {label: 'Papua New Guinea', value: 'PG'},
    {label: 'Paraguay', value: 'PY'},
    {label: 'Peru', value: 'PE'},
    {label: 'Philippines', value: 'PH'},
    {label: 'Pitcairn', value: 'PN'},
    {label: 'Poland', value: 'PL'},
    {label: 'Portugal', value: 'PT'},
    {label: 'Puerto Rico', value: 'PR'},
    {label: 'Qatar', value: 'QA'},
    {label: 'Reunion', value: 'RE'},
    {label: 'Romania', value: 'RO'},
    {label: 'Russian Federation', value: 'RU'},
    {label: 'Rwanda', value: 'RW'},
    {label: 'Saint Barthélemy', value: 'BL'},
    {label: 'Saint Helena', value: 'SH'},
    {label: 'Saint Kitts and Nevis', value: 'KN'},
    {label: 'Saint Lucia', value: 'LC'},
    {label: 'Saint Martin (French part)', value: 'MF'},
    {label: 'Saint Pierre and Miquelon', value: 'PM'},
    {label: 'Saint Vincent and the Grenadines', value: 'VC'},
    {label: 'Samoa', value: 'WS'},
    {label: 'San Marino', value: 'SM'},
    {label: 'Sao Tome and Principe', value: 'ST'},
    {label: 'Saudi Arabia', value: 'SA'},
    {label: 'Senegal', value: 'SN'},
    {label: 'Serbia', value: 'RS'},
    {label: 'Seychelles', value: 'SC'},
    {label: 'Sierra Leone', value: 'SL'},
    {label: 'Singapore', value: 'SG'},
    {label: 'Slovakia', value: 'SK'},
    {label: 'Slovenia', value: 'SI'},
    {label: 'Solomon Islands', value: 'SB'},
    {label: 'Somalia', value: 'SO'},
    {label: 'South Africa', value: 'ZA'},
    {label: 'South Georgia and South Sandwich Islands', value: 'GS'},
    {label: 'Spain', value: 'ES'},
    {label: 'Sri Lanka', value: 'LK'},
    {label: 'Sudan', value: 'SD'},
    {label: 'Suriname', value: 'SR'},
    {label: 'Svalbard and Jan Mayen Islands', value: 'SJ'},
    {label: 'Swaziland', value: 'SZ'},
    {label: 'Sweden', value: 'SE'},
    {label: 'Switzerland', value: 'CH'},
    {label: 'Syria', value: 'SY'},
    {label: 'Taiwan', value: 'TW'},
    {label: 'Tajikistan', value: 'TJ'},
    {label: 'Tanzania', value: 'TZ'},
    {label: 'Thailand', value: 'TH'},
    {label: 'Timor-Leste', value: 'TL'},
    {label: 'Togo', value: 'TG'},
    {label: 'Tokelau', value: 'TK'},
    {label: 'Tonga', value: 'TO'},
    {label: 'Trinidad and Tobago', value: 'TT'},
    {label: 'Tunisia', value: 'TN'},
    {label: 'Turkey', value: 'TR'},
    {label: 'Turkmenistan', value: 'TM'},
    {label: 'Turks and Caicos Islands', value: 'TC'},
    {label: 'Tuvalu', value: 'TV'},
    {label: 'Uganda', value: 'UG'},
    {label: 'Ukraine', value: 'UA'},
    {label: 'United Arab Emirates', value: 'AE'},
    {label: 'United Kingdom', value: 'GB'},
    {label: 'United States Minor Outlying Islands', value: 'UM'},
    {label: 'United States of America', value: 'US'},
    {label: 'Uruguay', value: 'UY'},
    {label: 'Uzbekistan', value: 'UZ'},
    {label: 'Vanuatu', value: 'VU'},
    {label: 'Vatican City', value: 'VA'},
    {label: 'Venezuela', value: 'VE'},
    {label: 'Vietnam', value: 'VN'},
    {label: 'Virgin Islands, British', value: 'VG'},
    {label: 'Virgin Islands, U.S.', value: 'VI'},
    {label: 'Wallis and Futuna Islands', value: 'WF'},
    {label: 'Western Sahara', value: 'EH'},
    {label: 'Yemen', value: 'YE'},
    {label: 'Zambia', value: 'ZM'},
    {label: 'Zimbabwe', value: 'ZW'}
  ]
});
