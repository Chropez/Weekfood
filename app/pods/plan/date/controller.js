import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    didPickDish(dish){
      var day = this.get('day');
      debugger;
      return true;
    }
  }
});
