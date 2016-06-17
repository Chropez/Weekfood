import MdlTextArea from 'ember-material-lite/components/mdl-textarea';
import Ember from 'ember';

const {
  computed,
  get
} = Ember;

export default MdlTextArea.extend({
  formattedPlaceholder: computed('placholder', function() {
    const placeholder = get(this, 'placeholder');
    if(placeholder) {
      return placeholder.replace(/\\n/g, '\n');
    }
    return ;
  })
});
