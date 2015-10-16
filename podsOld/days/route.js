import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
	model: function(params){
		var store = this.store;
		var date = params.date;
		var newDayData = { 'date' : date, 'user' : 'Luigi' } ;

		var days = store.all('day');

		var day = days.filterBy('date', date);
		if(day.length>0) {
			return day.objectAt(0);
		}else{
			return store.createRecord('day', newDayData);
		}
	},

	serialize: function(model, params){
		var newDate = {};
		newDate[params[0]] = moment(model.get('date')).format('YYYY-MM-DD');
		
		return newDate;
	}
});
