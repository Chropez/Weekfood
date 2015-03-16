import Ember from 'ember';
import moment from 'moment';

// Settings
const startDay 	= 1 , 
	daysVisible = 7 ;

export default Ember.Route.extend({
	// Attributes 
	week : null,
	year : null,

	model: function(params){
		// Params
		var week 	= params.week,
			year 	= params.year;

		this.week = week ;
		this.year = year ;

		var _this = this;
		return new Ember.RSVP.Promise(function(resolve){
			resolve(_this.getWeekDays());
		});
		

	},

	setupController : function(controller, model, transition){
		this._super(controller, model);

		controller.set('year', transition.params['plan.week'].year); 
		controller.set('week', transition.params['plan.week'].week);

		controller.set('firstDay', this.getFirstDay());
		controller.set('lastDay', this.getLastDay());


	},

	actions : {
	},

	// Param - year-string and week-string
	// Returns Array of existing days this week
	getWeekDays : function(){
		var	firstDay = this.getFirstDay(), 
			lastDay	 = this.getLastDay(), 
			allDays  = this.store.all('day');

		var filteredDays = allDays.filter(function(day){
			var dayDate = day.get('momentDate');
			if (firstDay.isSame(dayDate) || lastDay.isSame(dayDate) || 
				dayDate.isBetween(firstDay, lastDay)) {
					return true;
				}
			return false;
		});

		return 	this.addNonExistingDays(filteredDays, firstDay, lastDay);
		
	},

	addNonExistingDays : function(weekDays, firstDay, lastDay){
		var newArray = Ember.A(),
			dayIter = moment(firstDay);

		for(var i = 0; i <= lastDay.diff(firstDay, 'days'); i++){
			var thisDay = weekDays.findBy('date', dayIter.format('YYYY-MM-DD'));
			if(thisDay !== undefined){
				newArray.pushObject(thisDay);
			}else{
				newArray.pushObject(this.createDummyDay(dayIter.format('YYYY-MM-DD')));
			}
			dayIter.add(1, 'day'); // adds one day to iterator
		}
		return newArray;
	},

	createDummyDay : function(date){
		return this.store.createRecord('day', { 
			'date': date, 
			'user': 'Luigi'
		});
	},

	// Returns a moment obj
	getFirstDay: function(){
		var thisWeek = moment().weekYear(this.year).isoWeek(this.week);
		return moment(thisWeek.isoWeekday(startDay));	
	},

	getLastDay: function(){
		return this.getFirstDay().add(daysVisible-1, 'days');
	}
});
