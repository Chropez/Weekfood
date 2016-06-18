import Ember from 'ember';
import getOrCreateUser from '../utils/get-or-create-user';

const {
  get,
  inject: { service },
  RSVP: {
    Promise: {
      reject,
      resolve
    }
  }
} = Ember;

// jscs:ignore disallowDirectPropertyAccess
export default Ember.Object.extend({
  firebase: service(),
  store: service(),

  open(authData) {
    let store = get(this, 'store');
    return getOrCreateUser(authData, store)
      .then((user) => {
        return { currentUser: user };
      });
  },
  fetch() {
    let ref = this.get('firebase');
    let authData = ref.getAuth();

    if (!authData) {
      return reject(new Error('No Firebase session found'));
    }
    let store = get(this, 'store');
    return getOrCreateUser(authData, store)
      .then((user) => {
        return { currentUser: user };
      });
  },
  close() {
    this.get('firebase').unauth();
    return resolve({ currentUser: null });
  }
});
