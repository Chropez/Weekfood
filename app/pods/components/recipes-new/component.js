import Ember from 'ember';

const {
  Component,
  get,
  getProperties,
  inject: { service }
} = Ember;

const recipeProperties = [
  'name',
  'description',
  'prepTime',
  'cookTime',
  'ovenTemperature',
  'servings',
  'imageUrl'
];

export default Component.extend({
  store: service(),
  session: service(),

  actions: {
    addRecipe() {
      const recipeProps = getProperties(this, recipeProperties);
      const store = this.get('store');

      let recipe = store.createRecord('recipe', recipeProps);
      get(this, 'onAddRecipe')(recipe);
    }
  }
});
