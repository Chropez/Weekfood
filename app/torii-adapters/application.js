import Ember from 'ember';
import getOrCreateUser from '../utils/get-or-create-user' ;

const {
  get,
  inject: { service }
} = Ember;

export default Ember.Object.extend({
  firebase: service(),
  store: service(),

  open(authData) {
    const store = get(this, 'store');
    return getOrCreateUser(authData, store)
      .then((user) => {
        return { currentUser: user };
      });
  },
  fetch() {
    let ref = this.get('firebase');
    let authData = ref.getAuth();

    if (!authData) {
      return Ember.RSVP.Promise.reject(new Error('No Firebase session found'));
    }
    const store = get(this, 'store');
    return getOrCreateUser(authData, store)
      .then((user) => {
        return { currentUser: user };
      });
  },
  close() {
    this.get('firebase').unauth();
    return Ember.RSVP.Promise.resolve({ currentUser: null });
  }
});
