import Ember from 'ember';

const {
  Route,
  get
} = Ember;

export default Route.extend({
  model({ id }) {
    return this.store.find('recipe', id);
  },

  actions: {
    saveRecipe(recipe) {
      let author = get(this, 'session.currentUser');
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
