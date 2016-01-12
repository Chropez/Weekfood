import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  model(params) {
    const day = moment(params.day),
         week = day.week(),
         year = day.year();
    const weekId = this.get('session.currentUser').generateWeekId(year, week);
    return this.store.find('week', weekId).then((week) => {
      return week.get('days');
    }).catch(() => { return null ; });
  },

  setupController: function(controller, model, transition){
    controller.set('day', model);
    controller.set('date', transition.params['calendar.date'].date);
  },

  serialize(model, params){
    var newDate = {};
    newDate[params[0]] = moment(model.get('date')).format('YYYY-MM-DD');

    return newDate;
  }
});
