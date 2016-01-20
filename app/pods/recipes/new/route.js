import Ember from 'ember';

const {
  get,
  set
} = Ember;

export default Ember.Route.extend({
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
