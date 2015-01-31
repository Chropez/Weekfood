import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
	model: function(){
		var currentWeek = moment().isoWeek();
		//var currentYear = moment().weekYear();
		//this.transitionTo('week.week-number', currentYear, currentWeek );
	}
});
