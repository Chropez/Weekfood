import Ember from 'ember';
import moment from 'moment';

const { get } = Ember;

export default Ember.Controller.extend({
  date: '2016-06-16',
  actions: {
    saveDay() {
      const date = moment(get(this, 'date'))._d;
      const user = get(this, 'session.currentUser');
      const record = this.store.createRecord('day', { date, user });
      record.save();
    }
  }
});
