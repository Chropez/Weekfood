import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    goToEdit() {
      this.transitionToRoute('recipes.edit', this.get('model'));
    }
  }
});
