import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const year = params.year,
          week = params.week;

    return this.fetchOrCreateWeek(year, week);

  },

  fetchOrCreateWeek(year, week){
    const weekId = this.get('session.currentUser').generateWeekId(year, week);

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
