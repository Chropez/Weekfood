import DS from 'ember-data';

export default DS.Model.extend({
  /*firstName: DS.attr('string'),
  lastName: DS.attr('string'),*/
  displayName: DS.attr('string'),

  email: DS.attr('string'),
  created: DS.attr('number'),

  weeks: DS.hasMany('week', { async: true }),
  recipes: DS.hasMany('recipe', { async: true }),

  //Utility functions
  generateWeekId(year, week){
    const userId = this.get('id');
    return `${userId}-${year}-${week}` ;
  }


});
