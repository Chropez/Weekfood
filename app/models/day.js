import DS from 'ember-data';

var Day = DS.Model.extend({
	date: DS.attr('string'),
	user: DS.attr('string'),
	dish: DS.belongsTo('dish', {async : true})

});

export default Day;


