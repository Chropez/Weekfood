import Ember from 'ember';

export default Ember.Route.extend({
  model({ year, week }) {
    return this.fetchOrCreateWeek(year, week);
  },

  fetchOrCreateWeek (year, weekNumber){
    const id = this.get('session.currentUser').generateWeekId(year, weekNumber);

    // Todo test to embed week and see if embedded records are sideloaded
    return this.store.find('week', id)
      .catch(() => {
        // the week was not found then create a week
        let newWeek = this.store.createRecord('week', {
          id,
          year,
          weekNumber
        });

        return newWeek;
      });
  },

  /* jshint unused: false */
  saveWeek (week) {
    /*user.get('weeks').addObject(newWeek);
    return newWeek.save().then((savedWeek) => {
      user.save();
      return savedWeek;
    });*/
  },

  actions: {
    saveWeek (week){
      this.saveWeek(week);
    }
  }
});
