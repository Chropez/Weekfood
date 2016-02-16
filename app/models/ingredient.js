import DS from 'ember-data';

const {
  attr,
  belongsTo,
  Model
} = DS;

const {
  computed,
  get,
  isEmpty
} = Ember;

export default Model.extend({
  text: attr('string'),
  recipe: belongsTo(),

  amount: computed('text', function() {
    const text = get(this, 'text').trim();
    return this.extractNumber(text);
  }),

  unit: computed('amount', function() {

  }),

  name: computed('unit', 'amount', function() {

  }),

  extractNumber(text) {
    const newText = text.replace(',', '.');
    const regex = /[+-]?\d+(\.\d+)?/g;
    const floats = newText.match(regex).map(function(v) {
      return parseFloat(v);
    });

    if (floats.length < 1) {
      return;
    }

    return floats[0];
  }
});
