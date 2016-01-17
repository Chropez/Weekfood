import Ember from 'ember';
import MdlNav from 'ember-material-lite/components/mdl-nav';

const { inject, get } = Ember;

export default MdlNav.extend({
  session : inject.service(),

  actions : {
    signOut() {
      get(this, 'signOutAction')();
    }
  }
});
