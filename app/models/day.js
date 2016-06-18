import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

const {
  computed,
  get,
  observer,
  set
} = Ember;

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  date: attr('date'),
  recipe: belongsTo(),
  user: belongsTo(),

  /*
   *
   * hack for easier firebase query
   */
  _userDateKey: attr('string'),
  userDateKey: computed('date', 'recipe', function() {
    return formatUserDateKey(get(this, 'user.id'), get(this, 'date'));
  }),
  userDateKeyChanged: observer('date', 'recipe', function() {
    set(this, '_userDateKey', get(this, 'userDateKey'));
  })
});

export function formatUserDateKey(userId, date) {
  let formattedDate = moment(date).format('YYYY-MM-DD');
  return `${userId}-${formattedDate}`;
}
