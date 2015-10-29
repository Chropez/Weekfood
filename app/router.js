import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', {});
  this.authenticatedRoute('recipes', {}, function() {
    this.authenticatedRoute('new', {});
  });
  this.authenticatedRoute('plan', {}, function() {});
  this.authenticatedRoute('plan.week', { path: 'plan/:year/:week' });
  this.authenticatedRoute('plan.date', { path: 'plan/:date' });
});

export default Router;
