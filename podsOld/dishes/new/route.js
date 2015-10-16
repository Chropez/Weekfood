import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.createRecord('dish');
	},

	deactivate : function() {
		var model = this.get('currentModel');
		if(model.get('isNew')){
			model.destroyRecord();	
			//Change to store.unloadRecord ?
		}
	}
});
