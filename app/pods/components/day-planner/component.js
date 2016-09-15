import Ember from 'ember';
import { formatUserDateKey } from 'weekfood/models/day';

const {
  Component,
  computed,
  get,
  inject: { service }
} = Ember;

export default Component.extend({
  routing: service('-routing'),
  store: service(),
  session: service(),

  currentDay: computed('day', function() {
    let day = get(this, 'day');
    let date = get(this, 'date');
    if (day) {
      return day;
    }
    let user = get(this, 'session.currentUser');
    let userDateKey = formatUserDateKey(get(user, 'id'), date);
    return get(this, 'store').createRecord('day', {
      date,
      user,
      '_userDateKey': userDateKey
    });
  }),

  date: computed('currentDay', function() {
    return get(this, 'routing.router.router.state.params')['calendar.day'].date;
  }),

  didDestroyElement(...args) {
    if (get(this, 'currentDay.isNew')) {
      get(this, 'currentDay').destroy();
    }
    get(this, 'currentDay').rollbackAttributes();
    this._super(...args);
  }
});
