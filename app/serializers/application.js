import DS from 'ember-data';

export default DS.JSONSerializer.extend({

  extractArray: function(store, type, payload) {
    return payload.results.map(function(json) {
      return this.extractSingle(store, type, json);
    }, this);
  },

  extractSingle: function(store, type, payload) {
    var that = this;

    if (!payload.id) {
      payload.id = this.generateId(type, payload);
    }

    if (payload.addresses) {
      payload.addresses = payload.addresses.map(function(a) {
        // TODO find a way to convert model name to Ember type here.
        if (!a.id) {
          a.id = that.generateId('explorer@model:address:', a);
        }
        store.push('address', a);
        return a.id;
      });
    }

    if (payload.ids) {
      payload.identifications = payload.ids.map(function(id) {
        if (!id.id) {
          id.id = that.generateId('explorer@model:identification:', id);
        }
        store.push('identification', id);
        return id.id;
      });
      delete payload.ids;
    }

    if (payload.contacts) {
      payload.contacts = payload.contacts.map(function(c) {
        if (!c.id) {
          c.id = that.generateId('explorer@model:contact:', c);
        }
        store.push('contact', c);
        return c.id;
      });
    }

    if (payload.venues) {
      payload.venues = payload.venues.map(function(v) {
        if (!v.id) {
          v.id = that.generateId('explorer@model:venue:', v);
        }
        store.push('venue', v);
        return v.id;
      });
    }

    ['annual_rates', 'alt_annual_rates'].forEach(function(item) {
      var annualRates;
      if (payload[item]) {
        annualRates = [];
        for (var year in payload[item]) {
          if (!payload[item].hasOwnProperty(year)) { continue; }

          var annualRate = {year: year, value: payload[item][year]};
          annualRate.id = that.generateId('explorer@model:annual-rate:', annualRate);

          store.push('annual-rate', annualRate);
          annualRates.push(annualRate.id);
        }
        payload[item] = annualRates;
      }
    });

    return payload;
  },

  extractMeta: function(store, type, payload) {
    if (payload) {
      store.metaForType(type, {total: payload.total, searchPerformedAt: payload.search_performed_at});
    }
  },

  generateId: function(type, payload) {
    var representation = type;
    for (var prop in payload) {
      if (payload.hasOwnProperty(prop) && typeof(payload[prop]) === 'string') {
        representation += payload[prop];
      }
    }
    return md5(representation);
  }
});
