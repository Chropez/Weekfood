import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  beforeModel() {
    const date = moment(),
          year = date.year(),
          week = date.week();
    this.transitionTo('plan.week', year, week);
  }
});
