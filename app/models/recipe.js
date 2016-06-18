import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  name        : attr('string'),
  description : attr('string'),
  cookTime    : attr('number'),
  servings    : attr('number'),
  imageUrl    : attr('string'),
  ovenTemperature: attr('number'),
  ingredients : attr('string'),
  instructions: attr('string'),
  author      : belongsTo('user')
});
