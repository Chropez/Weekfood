import Ember from 'ember';

const {
  A,
  Component,
  get,
  inject: { service },
  isEmpty
} = Ember;

export default Component.extend({
  store: service(),
  ingredients: A,

  actions: {
    addIngredient() {
      let input = get(this, 'input');
      if (isEmpty(input)) {
        console.log("Can't add ingredient");
        return;
      }

      let store = get(this, 'store');
      let ingredients = get(this, 'ingredients');
      let newIngredient = store.createRecord('ingredient', { text: input });
      ingredients.addObject(newIngredient);
    }
  }
});
