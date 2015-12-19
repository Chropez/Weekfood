import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    return this.get('session').fetch().catch(function(){});
  },

  actions: {

    signIn (provider) {
      this.get('session')
        .open('firebase', { provider : provider });

    },

    signOut(){
      this.get('session').close();
    },

    accessDenied() {
      this.transitionTo('login');
    }
  }

});