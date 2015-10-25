import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  dish: DS.belongsTo('recipe', { async : true })
});
