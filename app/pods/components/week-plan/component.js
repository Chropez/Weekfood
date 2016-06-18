import Ember from 'ember';
import moment from 'moment';

const {
  Component,
  computed,
  get,
  inject: { service }
} = Ember;

export default Component.extend({
  store: service(),
  week: null,

  /* @todo: convert to observable */
  weekDays: computed('week.days', function() {
    let weekDateString = get(this, 'week.momentWeek').format('YYYY-MM-DD');
    let weekDay = moment(weekDateString);
    let store = get(this, 'store');
    let weekDays = get(this, 'week.days');

    for (let i = 0; i < 7; i++) {
      if (!get(this, 'week.days').findBy('id', weekDay.format('YYYY-MM-DD'))) {
        let newDay = store.createRecord('day', {
          date: new Date(weekDay.format('YYYY-MM-DD')),
          id: weekDay.format('YYYY-MM-DD')
        });

        weekDays.addObject(newDay);
        weekDay.add(1, 'day');
      }
    }
    return get(this, 'week.days').sortBy('date');
  }),

  prevWeek: computed('week', function() {
    return moment(get(this, 'week.momentWeek')).subtract(1, 'week').week();
  }),
  nextWeek: computed('week', function() {
    return moment(get(this, 'week.momentWeek')).add(1, 'week').week();
  }),
  prevWeekYear: computed('week', function() {
    return moment(get(this, 'week.momentWeek')).subtract(1, 'week').weekYear();
  }),
  nextWeekYear: computed('week', function() {
    return moment(get(this, 'week.momentWeek')).add(1, 'week').weekYear();
  })
});
