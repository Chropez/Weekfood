import Ember from 'ember';
import moment from 'moment';

const { get } = Ember;

export default Ember.Controller.extend({
  date: '2016-06-16',
  actions: {
    saveDay() {
      const dateString = get(this, 'date');
      const user = get(this, 'session.currentUser');
      const date = new moment(dateString)._d;
      debugger;
      this.store.createRecord('day', { date, user }).save();
    }
  }
});
