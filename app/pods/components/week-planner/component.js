import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  //Contains the week sent in
  week : null,

  momentWeek : Ember.computed('week.year', 'week.weekNumber', function(){
    const weekNumber = this.get('week.weekNumber');
    const year = this.get('week.year');
    const dateString = `${year}-${weekNumber}`;
    return moment(dateString, 'YYYY-ww');
  }),
  prevWeek : Ember.computed('momentWeek', function() {
    return moment(this.get('momentWeek')).subtract(1, 'week').week();
  }),
  nextWeek : Ember.computed('momentWeek', function() {
    return moment(this.get('momentWeek')).add(1, 'week').week();
  }),

  weekDays: Ember.computed('week.days', function(){
    const weekDateString = this.get('momentWeek').format('YYYY-mm-DD');
    let weekDay = moment(weekDateString);
    debugger;
    for(let i = 0; i < 7; i++){
      let newDay = this.store.createRecord('day', { date: new Date(weekDay.format('YYYY-mm-DD')) });
      this.get('week.days').addObject(newDay);
      weekDay.add(1, 'day');
    }

  })



});
