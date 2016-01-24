import Ember from 'ember';
import DS from 'ember-data';
import moment from 'moment';

const {
  Model,
  attr,
  hasMany
} = DS;

const { computed } = Ember;

export default Model.extend({
  year: attr('number'),
  weekNumber: attr('number'),
  days: hasMany('day'),

  momentWeek: computed('year', 'weekNumber', function() {
    const weekNumber = this.get('weekNumber');
    const year = this.get('year');
    const dateString = `${year}-${weekNumber}`;

    return moment(dateString, 'YYYY-ww');
  })
});
