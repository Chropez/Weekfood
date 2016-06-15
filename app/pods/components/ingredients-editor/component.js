import Ember from 'ember';

const {
  A,
  Component,
  get,
  inject: { service },
  isEmpty
} = Ember ;

export default Component.extend({
  store: service(),
  ingredients: A,
  // input,

  actions: {
    addIngredient() {
      const input = get(this, 'input');
      if(isEmpty(input)) {
        console.log("Can't add ingredient");
        return;
      }

      const store       = get(this, 'store');
      const ingredients = get(this, 'ingredients');

      const newIngredient = store.createRecord('ingredient', { text: input });
      ingredients.addObject(newIngredient);
    }
  }
});
