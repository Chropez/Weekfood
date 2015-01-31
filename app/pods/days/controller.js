import Ember from 'ember';
import {moment} from 'ember-moment/computed';
import momentjs from 'moment';

export default Ember.ObjectController.extend({

	dishes: Ember.A(),

	actions: {
		getDishes: function(){
			this.set('dishes', this.store.findAll('dish'));
		},

		selectDish: function(dish){
			var day = this.get('model');
			day.set('dish', dish);
			this.transitionTo('day.day-date', this.get('formattedDate'));
			day.save();
		},
	},

	//Nicer looks of data
	dayText: 		moment('model.date', 'dddd'),
	formattedDate: 	moment('model.date', 'YYYY-MM-DD'),

	//Back Button
	backWeek: function(){ return momentjs(this.get('formattedDate')).isoWeek() ; }.property('formattedDate'),
	backYear: function() { return momentjs(this.get('formattedDate')).weekYear() ; }.property('formattedDate')
});
