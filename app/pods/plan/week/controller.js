import Ember from 'ember';

export default Ember.Controller.extend({
  week: Ember.computed.alias('model')

});
