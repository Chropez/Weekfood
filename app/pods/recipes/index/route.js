import Ember from 'ember';

const {
  Route,
  get
} = Ember;

export default Route.extend({
  model(){
    const store  = get(this, 'store'),
          userId = get(this, 'session.currentUser.id');
    return store.query('recipe', { orderBy: 'author', equalTo: userId});
  },
  actions: {
    goToAddRecipe () {
      this.transitionTo('recipes.new');
    }
  }
});
