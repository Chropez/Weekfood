import Ember from 'ember';

const {
  Route,
  get
} = Ember;

export default Route.extend({
  actions: {
    saveRecipe(recipe) {
      const author = get(this, 'session.currentUser');
      recipe.save().then(() => {
        author.save().then(() => {
          this.transitionTo('recipes');
        });
      });
    },

    goToRecipes() {
      this.transitionTo('recipes');
    }
  }
});
