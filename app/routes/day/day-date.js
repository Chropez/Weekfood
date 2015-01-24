import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
	model : function(params){
		var _this = this;
		var dayDate = params.day_date;
		return _this.store.find('day', { 'date': dayDate }).then(function(days){
			if(days!=undefined && days.get('length') > 0){
				return days.objectAt(0);
			}else{
				return _this.store.createRecord('day', { 'date' : new Date(dayDate), 'user' : 'Luigi'});
			}
		});

	},

	serialize: function(model, params){
		var day_date = params[0];
		return { day_date : moment(model.get('date')).format('YYYY-MM-DD') };
	}
});
