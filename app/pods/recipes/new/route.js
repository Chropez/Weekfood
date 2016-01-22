import Ember from 'ember';

const {
  Route,
  get,
  set
} = Ember;

export default Route.extend({
  model(){
    return this.store.createRecord('recipe');
  },

  actions: {
    saveRecipe(recipe) {
      let author = get(this, 'session.currentUser');
      set(recipe, 'author', author);

      recipe.save().then(() => {
        author.save().then(() => {
          this.transitionTo('recipes');
        });
      });
    },

    willTransition(/*transition*/){
      const model = get(this.controller, 'model');
      if(get(model, 'isNew')){
        model.destroyRecord();
      }
    }
  }
});
