import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sign-in', {});
  this.authenticatedRoute('recipes', {}, function() {
    this.authenticatedRoute('new', {});
  });
  this.authenticatedRoute('calendar', {}, function() {});
  this.authenticatedRoute('calendar.week', { path: 'calendar/week/:year/:week' });
  this.authenticatedRoute('calendar.date', { path: 'calendar/:date' });
});

export default Router;
