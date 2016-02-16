import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo,
  hasMany
} = DS;

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  cookTime: attr('number'),
  ovenTemperature: attr('number'),
  servings: attr('number'),
  imageUrl: attr('string'),

  ingredients: hasMany(),
  instructions: attr('string'),
  author: belongsTo('user')
});
