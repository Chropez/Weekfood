import Ember from 'ember';
const {
  get,
  Route
} = Ember;
export default Route.extend({
  model() {
    const userId = get(this, 'session.currentUser.id');
    debugger;
    return this.store.findAll('day', {
      orderBy: 'user',
      equalTo: userId
    });
  }
});
