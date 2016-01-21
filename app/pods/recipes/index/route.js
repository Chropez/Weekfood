import Ember from 'ember';

const {
  get
} = Ember;

export default Ember.Route.extend({
  model(){
    const store = this.store;
    var userId = get(this, 'session.currentUser.id');
    return store.query('recipe', { orderBy: 'author', equalTo: userId});
  },
  actions: {
    goToAddRecipe () {
      this.transitionTo('recipes.new');
    }
  }
});
