import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany
} = DS;

export default Model.extend({
  /*firstName: DS.attr('string'),
  lastName: DS.attr('string'),*/
  displayName: attr('string'),

  email: attr('string'),
  created: attr('number'),

  avatar: attr('string'),

  weeks: hasMany('week'),
  recipes: hasMany('recipe'),

  // Utility functions
  generateWeekId(year, week) {
    const userId = this.get('id');
    return `${userId}-${year}-${week}`;
  }
});
