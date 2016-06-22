import Ember from 'ember';
import moment from 'moment';
import { formatUserDateKey } from 'weekfood/models/day';
const {
  get,
  Route
} = Ember;

export default Route.extend({
  model({ date }) {
    let day = moment(date);
    let userId = get(this, 'session.currentUser.id');
    let equalTo = formatUserDateKey(userId, day);

    return this.store.findAll('day', {
      orderBy: '_userDateKey',
      equalTo
    });
  }
});
