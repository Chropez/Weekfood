import Ember from 'ember';
import config from './config/environment';

const { Router } = Ember;
const {
  locationType,
  rootURL
} = config;

const router = Router.extend({
  location: locationType,
  rootURL
});

router.map(function() {
  this.route('sign-in', {});
  this.authenticatedRoute('recipes', {}, function() {
    this.authenticatedRoute('new');
    this.authenticatedRoute('edit', { path: 'edit/:id' });
    this.authenticatedRoute('recipe', { path: ':id' });
  });

  this.authenticatedRoute('calendar', {}, function() {
    this.authenticatedRoute('week', { path: ':year/week/:week' });
    this.authenticatedRoute('day', { path: ':date' });
  });
  this.authenticatedRoute('day');
});

export default router;
