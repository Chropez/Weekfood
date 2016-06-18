import Ember from 'ember';
import moment from 'moment';

const { Controller, get } = Ember;

export default Controller.extend({
  date: '2016-06-16',
  actions: {
    saveDay() {
      let date = moment(get(this, 'date'))._d;
      let user = get(this, 'session.currentUser');
      let record = this.store.createRecord('day', { date, user });
      record.save();
    }
  }
});
