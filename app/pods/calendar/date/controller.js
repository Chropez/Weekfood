import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    didPickDish(dish) {
      const day = this.get('day');
      return true;
    }
  }
});
