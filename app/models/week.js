import DS from 'ember-data';

export default DS.Model.extend({
  year: DS.attr('number'),
  week: DS.attr('number'),

  days: DS.hasMany('day')
});
