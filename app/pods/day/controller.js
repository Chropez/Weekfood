import Ember from 'ember';
import moment from 'moment';

const { Controller, get } = Ember;

export default Controller.extend({
  date: '2016-06-20',
  actions: {
    saveDay() {
      let date = moment(get(this, 'date')).format('YYYY-MM-DD');
      let user = get(this, 'session.currentUser');
      let record = this.store.createRecord('day', { date, user });
      record.save();
    }
  }
});
