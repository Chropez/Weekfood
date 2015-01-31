import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({ 
	beforeModel: function(){
		this.transitionTo('plan.week', 5);
	}
});