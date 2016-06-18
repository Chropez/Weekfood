import Ember from 'ember';
const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend({
  session: service(),

  dishes: null,
  dish: null,
  dishesFetched: false,

  isPickingDish: false,

  actions: {
    toggleIsPickingDish () {
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
