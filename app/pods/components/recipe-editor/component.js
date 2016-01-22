import Ember from 'ember';

const {
  Component,
  inject: { service },
  get
} = Ember;

export default Component.extend({
  store: service(),
  session: service(),

  actions: {
    addRecipe() {
      const recipe = get(this, 'recipe');
      get(this, 'onAddRecipe')(recipe);
    }
  }
});
