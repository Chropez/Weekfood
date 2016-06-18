import Ember from 'ember';

const {
  Route,
  set
} = Ember;

export default Route.extend({

  beforeModel() {
    return this.get('session')
      .fetch()
      .catch(() => {
        // not logged in
        this.transitionTo('sign-in');
      });
  },

  setupController(...args) {
    this._super(...args);
    set(this, 'controller.showDefaultHeader', true);
  },

  actions: {
    signIn(provider) {
      this.get('session')
        .open('firebase', {
          provider
        })
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
