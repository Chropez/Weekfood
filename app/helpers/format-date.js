import Ember from 'ember';
import moment from 'moment';

const { Helper: { helper } } = Ember;

export function formatDate(params) {
  return moment(params[0]).format('YYYY-MM-DD');
}

export default helper(formatDate);
