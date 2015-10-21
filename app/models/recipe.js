import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  prepTime: DS.attr('number'),
  cookTime: DS.attr('number'),
  ovenTemperature: DS.attr('number'),
  servings: DS.attr('number'),
  imageUrl: DS.attr('string'),

  author: DS.belongsTo('user', { async: true })
});
