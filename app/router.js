import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  
  this.route("plan", function() {
      this.route("week", { path: ':year/week/:week'});  
  });

  this.route("days", { path: 'days/:date' }) ;

  this.route('dishes');
});


export default Router;
