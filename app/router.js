import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('week', function(){
  	this.route('index', { path: '/'} );	
  	this.route('week-number', { path : ':week_number'});	
  });
  this.resource('day', function(){
  	this.route('day-date', {path: ':day_date'}, function(){
      this.route('choose-dish'  );
    });	
  });

  this.route('dishes');
  this.resource('dish', { path: 'dishes/:dish_id' });
});


export default Router;
