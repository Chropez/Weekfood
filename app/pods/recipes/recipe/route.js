import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  model({ id }) {
    return this.store.find('recipe', id);
  },

  actions: {
    goToEdit() {
      this.transitionTo('recipes.edit', this.get('controller.model'));
    }
  }
});
