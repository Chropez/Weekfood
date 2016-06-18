import Ember from 'ember';

const {
  Route,
  get
} = Ember;

export default Route.extend({
  model() {
    let author = get(this, 'session.currentUser');
    let store  = get(this, 'store');

    return store.createRecord('recipe', { author });
  },

  actions: {
    saveRecipe(recipe) {
      let author = get(this, 'session.currentUser');
      recipe.save().then((newRecipe) => {
        author.save().then(() => {
          this.transitionTo('recipes', newRecipe);
        });
      });
    },

    willTransition() {
      let model = get(this.controller, 'model');
      if (get(model, 'isNew')) {
        model.destroyRecord();
      }
    }
  }
});
