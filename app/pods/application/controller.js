import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
	currentYear: function(){
		return moment().year();
	}.property(),
	currentWeek: function(){
		return moment().isoWeek();
	}.property(),

	planTabIsActive: function(){
		var currentPath = this.get('currentPath');
		if(currentPath==='plan.week' || currentPath==='days')
			return true;
		return false;
	}.property('currentPath')
});
