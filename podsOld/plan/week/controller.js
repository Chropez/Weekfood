import Ember from 'ember';
import moment from 'moment';

export default Ember.ArrayController.extend({
	// Sorting
	sortProperties: ['date'],
	sortAscending: true, 

	// Items
	itemController: 'days',
	week : null, 
	year : null,
	
	// Generates properties to create the nextWeek link 
	// @Todo: Merge the properties into one that  
	nextWeek: function(){ 
		return moment().weekYear(this.get('year')).isoWeek(this.get('week')).add(1, 'week');
	}.property('year', 'week'),
	nextWeekNumber: function(){ 
		return this.get('nextWeek').isoWeek();
	}.property('nextWeek'),
	nextWeekYear: function(){
		return this.get('nextWeek').weekYear();
	}.property('nextWeek'),

	// Generates properties to create the prevWeek link 
	// @Todo: Merge the properties into one that  
	prevWeek: function(){ 
		return moment().weekYear(this.get('year')).isoWeek(this.get('week')).subtract(1, 'week');
	}.property('year', 'week'),
	prevWeekNumber: function(){
		return this.get('prevWeek').isoWeek();
	}.property('prevWeek'),
	prevWeekYear: function(){
		return this.get('prevWeek').weekYear();
	}.property('prevWeek')
});