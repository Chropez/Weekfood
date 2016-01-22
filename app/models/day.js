import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  recipe: DS.belongsTo('recipe', { async: true })
});
