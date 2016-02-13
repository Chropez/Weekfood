import Ember from 'ember';

const {
  Handlebars: { SafeString }
} = Ember;

export function safestringBgimage([bgImage]) {
  if (!bgImage) {
    return new SafeString('');
  }
  return new SafeString(`background-image: url('${bgImage}')`);
}

export default Ember.Helper.helper(safestringBgimage);
