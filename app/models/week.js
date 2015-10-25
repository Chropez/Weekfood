import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  year: DS.attr('number'),
  weekNumber: DS.attr('number'),
  days: DS.hasMany('day', { async : true }),
});
