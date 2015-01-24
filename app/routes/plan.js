import Ember from 'ember';

export default Ember.Route.extend({
	
	/* Redirects with the current week as a parameter */
	redirect: function(){
		var currentWeek = moment().isoWeek();
		var currentYear = moment().weekYear();
		this.transitionTo('week.week-number', currentYear, currentWeek );

	}
});
