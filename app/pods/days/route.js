import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
	model: function(params){
		var _this = this;
		var dayDate = params.date;
		return _this.store.find('day', { 'date': dayDate }).then(function(days){
			if(days !== undefined && days.get('length') > 0) { return days.objectAt(0); }
			else {
				var newDay = { 'date' : new Date(dayDate), 'user' : 'Luigi' } ;
				return _this.store.createRecord('day', newDay);
			}
		});
	},

	serialize: function(model, params){
		var newDate = {};
		newDate[params[0]] = moment(model.get('date')).format('YYYY-MM-DD')	;
		
		return newDate;
	}
});
