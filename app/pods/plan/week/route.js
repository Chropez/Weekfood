import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const year = params.year,
          week = params.week;

    return this.fetchOrCreateWeek(year, week);

  },

  setupController : function(controller, model, transition){
    this._super(controller, model);

    controller.set('yearNumber', transition.params['plan.week'].year);
    controller.set('weekNumber', transition.params['plan.week'].week);
  },

  fetchOrCreateWeek(year, week){
    let user = this.get('session').get('currentUser');
    const weekId = this.generateWeekId(user.get('id'), year, week);


    //Todo test to embed week and see if embedded records are sideloaded
    return this.store.find('week', weekId)
      .catch(() => {
        // the week was not found then create a week
        let newWeek = this.store.createRecord('week', {
          id: weekId,
          year: year,
          weekNumber: week
        });

        return newWeek;
      });
  },

  generateWeekId(userId, year, week){
    return `${userId}-${year}-${week}` ;
  },

  saveWeek(week) {
    /*user.get('weeks').addObject(newWeek);
    return newWeek.save().then((savedWeek) => {
      user.save();
      return savedWeek;
    });*/
  },

  actions: {
    saveWeek(week){
      this.saveWeek(week);
    }
  }


});
