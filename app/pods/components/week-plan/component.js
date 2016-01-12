import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  week : null,
  /* @todo: convert to observable */
  weekDays: Ember.computed('week.days', function(){
    const weekDateString = this.get('week.momentWeek').format('YYYY-MM-DD');
    let weekDay = moment(weekDateString),
        store = this.get('store'),
        weekDays = this.get('week.days');

    for(let i = 0; i < 7; i++){
      if(!this.get('week.days').findBy('id', weekDay.format('YYYY-MM-DD'))) {
        const newDay = store.createRecord('day', {
          date : new Date(weekDay.format('YYYY-MM-DD')),
          id : weekDay.format('YYYY-MM-DD')
        });

        weekDays.addObject(newDay);
        weekDay.add(1, 'day');
      }
    }
    return this.get('week.days').sortBy('date');
  }),

  prevWeek : Ember.computed('week', function() {
    return moment(this.get('week.momentWeek')).subtract(1, 'week').week();
  }),
  nextWeek : Ember.computed('week', function() {
    return moment(this.get('week.momentWeek')).add(1, 'week').week();
  }),
  prevWeekYear : Ember.computed('week', function() {
    return moment(this.get('week.momentWeek')).subtract(1, 'week').weekYear();
  }),
  nextWeekYear : Ember.computed('week', function() {
    return moment(this.get('week.momentWeek')).add(1, 'week').weekYear();
  })
});
