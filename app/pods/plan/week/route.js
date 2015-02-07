import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
	model: function(params){
		var week = params.week,
			year = params.year;

		//Settings
		var startDay = 1, daysVisible = 7; // 1 is monday
		
		var _this = this, 
			momentWeek 		= moment().weekYear(year).isoWeek(week),
			daysOfTheWeek 	= Ember.A();

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

		controller.set('year', transition.params['plan.week'].year); //gets the year from the week route
		controller.set('week', transition.params['plan.week'].week);
	},

	actions : {
		willTransition : function() {
			var modelArray = this.get('currentModel');
			modelArray.forEach(function(model){
				if(model.get('isNew')){
					model.destroyRecord();	
					//Change to store.unloadRecord ?
				}
				
			});
		}
	}
});
