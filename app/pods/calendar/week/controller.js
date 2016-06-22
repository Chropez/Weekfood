import Ember from 'ember';
import moment from 'moment';

const {
  Controller,
  computed,
  computed: { alias },
  get
} = Ember;

export default Controller.extend({
  days: alias('model'),
  prevWeek: computed('week', 'year', function() {
    let isoWeek = get(this, 'week');
    let year = get(this, 'year');
    return moment().set({ year, isoWeek }).subtract(1, 'week').isoWeek();
  }),
  nextWeek: computed('week', 'year', function() {
    let isoWeek = get(this, 'week');
    let year = get(this, 'year');
    return moment().set({ year, isoWeek }).add(1, 'week').isoWeek();
  }),
  prevWeekYear: computed('week', 'year', function() {
    let isoWeek = get(this, 'week');
    let year = get(this, 'year');
    return moment().set({ year, isoWeek }).subtract(1, 'week').isoWeekYear();
  }),
  nextWeekYear: computed('week', 'year', function() {
    let isoWeek = get(this, 'week');
    let year = get(this, 'year');
    return moment().set({ year, isoWeek }).add(1, 'week').isoWeekYear();
  })

});
