import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signInWithFacebook() {
      this.send('signIn', 'facebook');
    },
    signInWithGoogle() {
      this.send('signIn', 'google');
    },
  }
});
