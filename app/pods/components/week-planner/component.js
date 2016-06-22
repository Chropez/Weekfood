import Ember from 'ember';
import moment from 'moment';

const {
  A,
  Component,
  computed,
  get
} = Ember;

export default Component.extend({
  weekDays: computed('year', 'week', 'days.[]', function() {
    let year = get(this, 'year');
    let isoWeek = get(this, 'week');
    let dayOfWeek = moment().set({ year, isoWeek }).startOf('isoWeek');
    let weekDays = A();

    for (let i = 0; i < 7; i++) {
      let formattedDay = dayOfWeek.format('YYYY-MM-DD');
      let day = get(this, 'days').findBy('date', formattedDay);
      if (day) {
        weekDays.pushObject(day);
      } else {
        weekDays.pushObject(formattedDay);
      }
      dayOfWeek.add(1, 'day');
    }
    return weekDays;
  })
});
