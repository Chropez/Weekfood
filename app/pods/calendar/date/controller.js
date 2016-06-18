import Ember from 'ember';
const { Controller } = Ember;

export default Controller.extend({
  actions: {
    didPickDish(dish) {
      let day = this.get('day');
      return true;
    }
  }
});
