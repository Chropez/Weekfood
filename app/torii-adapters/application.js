/*import Ember from 'ember';
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';
export default ToriiFirebaseAdapter.extend({
  firebase: Ember.inject.service()
});
*/
// app/torii-adapters/application.js

import Ember from 'ember';

const { $, get, getProperties, setProperties } = Ember;

export default Ember.Object.extend({
  firebase: Ember.inject.service(),
  store: Ember.inject.service(),

  /**
   * Executed after Firebase authentication.
   *
   * Find or create the user based on the Firebase `authData`
   *
   * @param  {Object} authData
   * @return {Promise<Object>} Updated session info
   */
  open(authData) {
    return this._findOrCreateUser(authData)
      .then((user) => {
        return { currentUser: user };
      });
  },

  /**
   * Fetch an existing Firebase auth session and place into `session.currentUser`
   *
   * @return {Promise<Object>} Updated session info
   */
  fetch() {
    let ref = this.get('firebase');
    let authData = ref.getAuth();

    if (!authData) {
      return Ember.RSVP.Promise.reject(new Error('No Firebase session found'));
    }

    return this._findOrCreateUser(authData)
      .then((user) => {
        return { currentUser: user };
      });
  },

  /**
   * Teardown a session. Remove the `session.currentUser`.
   *
   * @return {Promise<Object>} Updated session info
   */
  close() {
    this.get('firebase').unauth();
    return Ember.RSVP.Promise.resolve({ currentUser: null });
  },

  /**
   * Find the user with the given `authData`, create if not found
   *
   * @param  {Object} authData
   * @return {Promise<Object>} The user
   */
  _findOrCreateUser(authData) {
    let store = this.get('store');
    const authUserProps = this.extractUserProperties(authData);
    return store.find('user', authData.uid)
      .then((user) => {
        // Check if any user values have changed
debugger;
        if(this.userHasChanged(user, authUserProps)) {
          return setProperties(user, authUserProps);
        }
        return user;
      })
      .catch(() => {
          authUserProps['created'] = new Date().getTime();
          let newUser = store.createRecord('user', authUserProps);
          return newUser.save();
      });

  },

  /**
   * Extract the user properties from `authData` that you care about.
   *
   * @param  {Object} authData
   * @return {Object} An updated property hash
   */
  extractUserProperties(authData) {
    let name = 'Unknown';
    const provider = authData.provider;
    let userData = authData[provider];
    let avatar = userData.profileImageURL;

    if (userData.displayName) {
      name = userData.displayName;
    } else if (userData.username) {
      name = userData.username;
    }

    return {
      id: authData.uid,
      displayName: name,
      email: userData.email,
      avatar
    };
  },


  userHasChanged(user, authProps){
    const userProps = getProperties(user, 'avatar', 'displayName', 'email') ;
    return userProps.avatar       !== authProps.avatar ||
           userProps.displayName  !== authProps.displayName ||
           userProps.email        !== authProps.email ;
  }


});
