import Ember from 'ember';

export default Ember.View.extend({
	templateName : 'views/dish-chooser',


	showDishList : false,
	
	click : function(){
		this.set('showDishList', true);
			
	}
});
