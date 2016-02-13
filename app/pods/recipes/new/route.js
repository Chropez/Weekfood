import Ember from 'ember';

const {
  Route,
  get
} = Ember;

export default Route.extend({
  model() {
    const author = get(this, 'session.currentUser');
    const store  = get(this, 'store');

    return store.createRecord('recipe', { author });
  },

  actions: {
    saveRecipe(recipe) {
      const author = get(this, 'session.currentUser');
      recipe.save().then((newRecipe) => {
        author.save().then(() => {
          this.transitionTo('recipes', newRecipe);
        });
      });
    },

    willTransition() {
      const model = get(this.controller, 'model');
      if (get(model, 'isNew')) {
        model.destroyRecord();
      }
    }
  }
});
