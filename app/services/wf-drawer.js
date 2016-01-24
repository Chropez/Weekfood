import Ember from 'ember';

const {
  Service,
  get,
  set,
  isEmpty
} = Ember;

export default Service.extend({
  _mdlComponent: null,
  setMdlComponent(mdlComponent) {
    set(this, '_mdlComponent', mdlComponent);
  },

  toggle() {
    const mdlComponent = get(this, '_mdlComponent');
    if(!isEmpty(mdlComponent)){
      mdlComponent.drawerToggleHandler_();
    }
  }
});
