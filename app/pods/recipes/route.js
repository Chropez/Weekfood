import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.get('session').get('currentUser').get('recipes');
  }
});
