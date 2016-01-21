import Ember from 'ember';

const {
  Route,
  get,
  set
} = Ember;

export default Route.extend({
  actions: {
    saveRecipe(recipe) {
      let author = get(this, 'session.currentUser');
      set(recipe, 'author', author);

      recipe.save().then(() => {
        author.save().then(() => {
          this.transitionTo('recipes');
        });
      });
    }
  }
});
