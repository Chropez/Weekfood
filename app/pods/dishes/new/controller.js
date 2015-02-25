import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createDish : function(){
			var dish = this.get('model');
			dish.save();

			dish.then(function(){
				this.transitionToRoute('dishes');
			});

		}
	}
});
