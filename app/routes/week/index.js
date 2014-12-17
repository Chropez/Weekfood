import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
	/* Redirects with the current week as a parameter */
	redirect: function(){
		var currentWeek = moment().week();
		this.transitionTo('week.week-number', currentWeek );

	}
});
