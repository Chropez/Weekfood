import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  year: DS.attr('number'),
  weekNumber: DS.attr('number'),
  days: DS.hasMany('day', { async : true }),

  momentWeek : Ember.computed('year', 'weekNumber', function(){
    const weekNumber = this.get('weekNumber'),
                year = this.get('year'),
          dateString = `${year}-${weekNumber}`;

    return moment(dateString, 'YYYY-ww');
  })
});
