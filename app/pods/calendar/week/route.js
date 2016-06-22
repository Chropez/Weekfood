import Ember from 'ember';
import moment from 'moment';
import { formatUserDateKey } from 'weekfood/models/day';

const {
  get,
  Route
} = Ember;

export default Route.extend({
  model({ year, week }) {
    let userId    = get(this, 'session.currentUser.id');
    let weekDate  = moment().set({ year, isoWeek: week });
    let startAt   = formatUserDateKey(userId, weekDate.startOf('isoweek'));
    let endAt     = formatUserDateKey(userId, weekDate.endOf('isoweek'));

    return this.store.query('day', {
      orderBy: '_userDateKey',
      startAt,
      endAt
    });
  },

  setupController(controller, model, { params }) {
    this._super(...arguments);
    let year = params['calendar.week'].year;
    let week = params['calendar.week'].week;
    controller.set('year', year);
    controller.set('week', week);
  },

  actions: {
    goToWeek(year, week) {
      this.transitionTo('calendar.week', year, week);
    }
  }
});
