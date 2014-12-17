import Ember from 'ember';
import moment from 'moment';

export default Ember.ArrayController.extend({

	sortProperties: ['date'],
	sortAscending: true, 

	itemController: 'day/dayDate',
	currentWeek : null,

	nextWeek: function(){ 
		return moment().isoWeek(this.get('currentWeek')).add(1, 'week').week();
	}.property('currentWeek'),
	prevWeek: function(){ 
		return moment().isoWeek(this.get('currentWeek')).subtract(1, 'week').week();
	}.property('currentWeek')

});
