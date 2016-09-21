import Ember from 'ember';

const {
  String: { htmlSafe }
} = Ember;

export function safestringBgimage([bgImage]) {
  if (!bgImage) {
    return htmlSafe('');
  }
  return htmlSafe(`background-image: url('${bgImage}');`);
}

export default Ember.Helper.helper(safestringBgimage);
