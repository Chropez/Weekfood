import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  date: attr('date'),
  recipe: belongsTo('recipe')
});
