import Ember from 'ember';
import { formatUserDateKey } from 'weekfood/models/day';
import moment from 'moment';
const {
  get,
  Route
} = Ember;
export default Route.extend({
  model() {
    const userId = get(this, 'session.currentUser.id');
    const startAt = formatUserDateKey(userId, moment('2010-01-12'));
    const endAt = formatUserDateKey(userId, moment('2016-12-12'));
    return this.store.query('day', {
      orderBy: '_userDateKey',
      startAt,
      endAt
    });
  }
});
