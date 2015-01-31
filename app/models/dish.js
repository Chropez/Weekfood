import DS from 'ember-data';

export default DS.Model.extend({
  name : DS.attr('string'),
  description: DS.attr('string'),
  timeToCook: DS.attr('number'),
  image: DS.attr('string'),

  days : DS.hasMany('day', { async: true }),

  user: DS.attr('string')
  //,ingredients: DS.hasMany('ingredient')

});