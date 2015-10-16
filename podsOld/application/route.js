import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return Ember.RSVP.hash({ 
			dishes: this.store.findAll('dish'),
			days: this.store.findAll('day')
		});
	}
});
