import Ember from 'ember';
import moment from 'moment';
import { formatUserDateKey } from 'weekfood/models/day';

const {
  get,
  Route
} = Ember;

export default Route.extend({
  model({ year, week }) {
    const userId    = get(this, 'session.currentUser.id');
    const weekDate  = moment(`${year}${week}`, 'YYYYww');
    const startAt   = formatUserDateKey(userId, weekDate.startOf('isoweek'));
    const endAt     = formatUserDateKey(userId, weekDate.endOf('isoweek'));

    return this.store.query('day', {
      orderBy: '_userDateKey',
      startAt,
      endAt
    });
  },

  setupController(controller, model, transition) {
    const year = transition.params['calendar.week'].year;
    const week = transition.params['calendar.week'].week;
    controller.set('year', year);
    controller.set('week', week);
  },

  fetchOrCreateWeek(year, weekNumber) {
    const id = this.get('session.currentUser').generateWeekId(year, weekNumber);

    return this.store.find('week', id)
      .catch(() => {
        // the week was not found then create a week
        let newWeek = this.store.createRecord('week', {
          id,
          year,
          weekNumber
        });

        return newWeek;
      });
  }
});
