import Ember from 'ember';
import {moment} from 'ember-moment/computed';
import momentObj from 'moment';

export default Ember.ObjectController.extend({

	actions: {
		chooseDish : function(dish){
			var model = this.get('model');
			model.set('dish', dish);
			this.transitionTo('day.day-date', this.get('formattedDate'));
			model.save();
		}
	},


	//Nice looks of data
	dayText: moment('model.date', 'dddd'),
	formattedDate: moment('model.date', 'YYYY-MM-DD'),

	backToWeek : function(){
		return momentObj(this.get('formattedDate')).week();
	}.property('formattedDate')
});
