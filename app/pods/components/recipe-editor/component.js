import Ember from 'ember';

const {
  Component,
  inject: { service },
  get
} = Ember;

export default Component.extend({
  classNames: 'recipe-editor',
  store: service(),
  session: service(),

  actions: {
    addRecipe() {
      let recipe = get(this, 'recipe');
      get(this, 'saveRecipe')(recipe);
    }
  }
});
