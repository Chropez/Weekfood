import Ember from 'ember';
import { formatUserDateKey } from 'weekfood/models/day';
import moment from 'moment';

const {
  get,
  Route
} = Ember;

export default Route.extend({
  model() {
    let userId = get(this, 'session.currentUser.id');
    let startAt = formatUserDateKey(userId, moment('2010-01-12'));
    let endAt = formatUserDateKey(userId, moment('2016-12-12'));
    return this.store.query('day', {
      orderBy: '_userDateKey',
      startAt,
      endAt
    });
  }
});
