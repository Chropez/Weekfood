import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    signInWithFacebook() {
      this.send('signIn', 'facebook');
    },
    signInWithGoogle() {
      this.send('signIn', 'google');
    },
  }
});
