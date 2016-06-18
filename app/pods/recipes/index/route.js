import Ember from 'ember';

const {
  Route,
  get
} = Ember;

export default Route.extend({
  model() {
    let store  = get(this, 'store');
    let userId = get(this, 'session.currentUser.id');
    return store.query('recipe', { orderBy: 'author', equalTo: userId });
  },
  actions: {
    goToAddRecipe() {
      this.transitionTo('recipes.new');
    },

    goToEditRecipe(recipe) {
      this.transitionTo('recipes.edit', recipe);
    },

    deleteRecipe(recipe) {
      recipe.destroyRecord();
    }

  }
});
