import Ember from 'ember';
const {
  Controller,
  computed,
  get,
  isArray,
  isEmpty
} = Ember;

export default Controller.extend({
  day: computed('model.[]', function() {
    let model = get(this, 'model');

    if (isEmpty(model)) {
      return;
    }

    if (isArray(model)) {
      return model.objectAt(0);
    }

    return model;
  })
});
