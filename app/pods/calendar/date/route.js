import Ember from 'ember';
import moment from 'moment';
const { Route } = Ember;

export default Route.extend({
  model(params) {
    let day  = moment(params.day);
    let week = day.week();
    let year = day.year();
    let weekId = this.get('session.currentUser').generateWeekId(year, week);

    return this.store.find('week', weekId).then((week) => {
      return week.get('days');
    }).catch(() => {
      return null;
    });
  },

  setupController(controller, model, transition) {
    controller.set('day', model);
    controller.set('date', transition.params['calendar.date'].date);
  },

  serialize (model, params){
    let newDate = {};
    newDate[params[0]] = moment(model.get('date')).format('YYYY-MM-DD');
    return newDate;
  }
});
