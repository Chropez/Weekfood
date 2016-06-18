import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany
} = DS;

export default Model.extend({
  /*firstName: DS.attr('string'),
  lastName: DS.attr('string'),*/
  avatar      : attr('string'),
  created     : attr('number'),
  displayName : attr('string'),
  email       : attr('string'),
  recipes     : hasMany('recipe')
});
