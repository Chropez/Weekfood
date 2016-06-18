import Ember from 'ember';
import moment from 'moment';

const { Route } = Ember;

export default Route.extend({
  beforeModel() {
    let date = moment();
    let year = date.year();
    let week = date.isoWeek();
    this.transitionTo('calendar.week', year, week);
  }
});
