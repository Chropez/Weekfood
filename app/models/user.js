import DS from 'ember-data';

export default DS.Model.extend({
  /*firstName: DS.attr('string'),
  lastName: DS.attr('string'),*/
  displayName: DS.attr('string'),

  email: DS.attr('string'),
  created: DS.attr('number'),

  weeks: DS.hasMany('week', { async: false }),
  recipes: DS.hasMany('recipe', { async: true })
});
