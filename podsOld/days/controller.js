import Ember from 'ember';
import {moment} from 'ember-moment/computed';
import momentjs from 'moment';

export default Ember.Controller.extend({

	actions: {
		getDishes: function(){
			var dishes = this.get('dishes');
			
			if(dishes.length<1){
				this.set('dishes', this.store.findAll('dish'));
			}
				
		},

		selectDish: function(dish){
			var day = this.get('day');
			var _this = this;
			day.set('dish', dish);
			day.save().then(function(day){
				_this.set('day', day);
			});
		},	
	},

	//Properties
	dishes: Ember.A(),
	day: Ember.computed.alias('model'), //set by route

	//Nicer looks of data
	dayText: 		moment('day.date', 'dddd'),
	formattedDate: 	moment('day.date', 'YYYY-MM-DD'),

	//Back Button
	backWeek: function(){ return momentjs(this.get('formattedDate'), 'YYYY-MM-DD').isoWeek() ; }.property('formattedDate'),
	backYear: function() { return momentjs(this.get('formattedDate'), 'YYYY-MM-DD').weekYear() ; }.property('formattedDate')
});
