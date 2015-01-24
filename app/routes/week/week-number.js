import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({

	model: function(params, transition){
		var weekNumber = params.week_number,
			yearNumber = transition.params.week.year_number, //Gets the param of parent route
			momentWeek = moment().weekYear(yearNumber).isoWeek(weekNumber);

		var startDay = 1, //1 is monday
			daysVisible = 7;
		var _this = this;	

		var daysOfTheWeek = Ember.A() ;	

		for(var i = 0 ; i < daysVisible ; i++){
			var date = momentWeek.isoWeekday(i+startDay).format('YYYY-MM-DD');
			daysOfTheWeek.pushObject(_this.store.find('day', { date : date }));
		}

		var days = Ember.RSVP.Promise.all(daysOfTheWeek).then(function(values){
			var modelWeek = Ember.A();
			values.forEach(function(item, index){
				var _day = item.objectAt(0);
				if(_day!==undefined) {
					modelWeek.pushObject(_day);
				}else{
					modelWeek.pushObject(_this.store.createRecord('day', 
						{ 
							date: new Date(momentWeek.isoWeekday(index+startDay).format('YYYY-MM-DD')) ,
							user: 'Luigi'
						}
					));
				}

			});
			return modelWeek;
		});
		return days;
	},

	setupController : function(controller, model, transition){
		this._super(controller, model);

		controller.set('year', transition.params.week.year_number); //gets the year from the week route
		controller.set('week', transition.params["week.week-number"].week_number);
	},

	actions : {
		willTransition : function() {
			var modelArray = this.get('currentModel');
			modelArray.forEach(function(model){
				if(model.get('isNew')){
					model.destroyRecord();	
				}
				
			});
		}
	}

});
 