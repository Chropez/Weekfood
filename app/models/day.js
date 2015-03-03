import DS from 'ember-data';
import moment from 'moment';

var Day = DS.Model.extend({
	date : DS.attr('string'),
	user : DS.attr('string'),
	dish : DS.belongsTo('dish', {async : true}),

	week : function() {
		return moment(this.get('date')).isoWeek();
	}.property('date'),

	formattedDate : function(){
		return moment(this.get('date')).format('YYYY-MM-DD');
	}.property('date'),

	momentDate: function(){
		return moment(this.get('date'));
	}.property('date')

});

export default Day;


