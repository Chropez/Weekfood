import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    return this.get('session')
               .fetch()
               .catch(() => {
                 // not logged in
                 this.transitionTo('sign-in');
               });
  },

  actions: {
    signIn(provider) {
      const providerObj = { provider: provider };
      this.get('session')
          .open('firebase', providerObj)
          .then(() => {
            this.transitionTo('recipes');
          });
    },

    signOut() {
      this.get('session')
      .close()
      .then(() => {
        this.transitionTo('sign-in');
      });
    },

    accessDenied() {
      this.transitionTo('sign-in');
    }
  }

});
