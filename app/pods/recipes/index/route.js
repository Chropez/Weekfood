import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    goToAddRecipe () {
      this.transitionTo('recipes.new');
    }
  }
});
