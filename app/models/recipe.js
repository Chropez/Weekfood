import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  prepTime: attr('number'),
  cookTime: attr('number'),
  ovenTemperature: attr('number'),
  servings: attr('number'),
  imageUrl: attr('string'),

  author: belongsTo('user')
});
