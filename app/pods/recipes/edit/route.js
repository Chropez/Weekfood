import Ember from 'ember';

const {
  Route,
  get
} = Ember;

export default Route.extend({
  model({ recipeId }) {
    return this.store.find('recipe', recipeId);
  },

  actions: {
    saveRecipe(recipe) {
      const author = get(this, 'session.currentUser');
      recipe.save().then(() => {
        author.save().then(() => {
          this.transitionTo('recipes.recipe', recipe);
        });
      });
    },

    goToRecipes() {
      this.transitionTo('recipes');
    }
  }
});
