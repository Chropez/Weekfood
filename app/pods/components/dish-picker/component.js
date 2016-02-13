import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

  dishes: null,
  dish: null,
  dishesFetched: false,

  isPickingDish: false,

  actions: {
    toggleIsPickingDish (){
      this.set('isPickingDish', !this.get('isPickingDish'));
      if (!this.get('dishesFetched')) {
        this.set('dishes', this.get('session.currentUser.recipes'));
        this.set('dishesFetched', true);
      }
    },
    chooseDish (dish) {
      this.get('onPickDish')(dish);
    }
  }
});
