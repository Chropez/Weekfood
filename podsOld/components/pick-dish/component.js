import Ember from 'ember';

export default Ember.Component.extend({
	classNames : ['div'], //Default

	showDishList : false,
	dishes : null,
	selectDish: null,


	actions : {
		selectDish : function(dish) {
			this.sendAction('onSelectDish', dish);
			this.set('showDishList', false);
		},
		getDishes : function() {
			this.sendAction('onGetDishes');
			this.set('showDishList', true);
		},
		hideDishList: function() { this.set('showDishList', false); }
	}
});
