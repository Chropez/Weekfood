import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  beforeModel() {
    const date = moment();
    const year = date.year();
    const week = date.week();
    this.transitionTo('calendar.week', year, week);
  }
});
