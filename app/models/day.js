import DS from 'ember-data';
import {moment} from 'ember-moment/computed';

var Day = DS.Model.extend({
	date: DS.attr('date'),
	user: DS.attr('string'),
	dish: DS.belongsTo('dish', {async : true})

});
/*
Day.reopenClass({
	FIXTURES:[
		{ id: 1, date: momentLib().week(momentLib().week()).day(1), user: 'Luigi' },
		{ id: 2, date: momentLib().week(momentLib().week()).day(2), user: 'Luigi' },
		{ id: 3, date: momentLib().week(momentLib().week()).day(3), user: 'Luigi' },
		{ id: 4, date: momentLib().week(momentLib().week()).day(5), user: 'Luigi' },
		{ id: 5, date: momentLib().week(momentLib().week()).day(6), user: 'Luigi' },		
		{ id: 6, date: momentLib().week(momentLib().week()-1).day(1), user: 'Luigi' },
		{ id: 7, date: momentLib().week(momentLib().week()-1).day(4), user: 'Luigi' },
		{ id: 8, date: momentLib().week(momentLib().week()-1).day(7), user: 'Luigi' },
		{ id: 9, date: momentLib().week(momentLib().week()+1).day(3), user: 'Luigi' },
		{ id: 10, date: momentLib().week(momentLib().week()+1).day(4), user: 'Luigi' }
	]
});
*/

export default Day;


