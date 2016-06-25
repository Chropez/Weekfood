import Ember from 'ember';
import getOrCreateUser from '../../utils/get-or-create-user';

const {
  get,
  Route,
  RSVP: { reject },
  set
} = Ember;

export default Route.extend({

  beforeModel() {
    return get(this, 'session')
      .fetch()
      .then((data) => {
        this.setSessionUser(get(this, 'session.currentUser'));
      })
      .catch(() => {
        this.transitionTo('sign-in');
      });
  },

  setupController(...args) {
    this._super(...args);
    set(this, 'controller.showDefaultHeader', true);
  },

  setSessionUser(currentUser) {
    return getOrCreateUser(currentUser, this.store).then((user) => {
      set(this, 'session.content.currentUser', user);
    });
  },

  actions: {
    signIn(provider) {
      this.get('session')
        .open('firebase', {
          provider
        })
        .then((data) => {
          this.setSessionUser(data.currentUser);
        });
      this.transitionTo('recipes');
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
