import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
	model: function(params){
		var store = this.store;
		var date = params.date;
		var newDayData = { 'date' : date, 'user' : 'Luigi' } ;

		var days = store.all('day');

		// If store isn't cached
		if(!days.any()){
			var days = store.findAll('day');
			return days.then(function(days) {
				var day = days.filterBy('date', date);
				if(day.length>0) {
					return day.objectAt(0);
				}else{
					return store.createRecord('day', newDayData);
				}
			});
		}else{
			// Else store is cached
			var day = days.filterBy('date', date);
			if(day.length>0) {
				return day.objectAt(0);
			}else{
				return store.createRecord('day', newDayData);
			}

		}
		/*
		return store.find('day', { 'date': dayDate }).then(function(days){
			if(days !== undefined && days.get('length') > 0) { return days.objectAt(0); }
			else {
				var newDay = ;
				return store.createRecord('day', newDay);
			}
		});*/
	},

	serialize: function(model, params){
		var newDate = {};
		newDate[params[0]] = moment(model.get('date')).format('YYYY-MM-DD')	;
		
		return newDate;
	}
});
