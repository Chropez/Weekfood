import Ember from 'ember';

const {
  Service,
  get,
  set,
  isEmpty
} = Ember;

export default Service.extend({
  _mdlComponent: null,
  transparent: false,

  setMdlComponent(mdlComponent) {
    set(this, '_mdlComponent', mdlComponent);
  },

  toggleDrawer() {
    let mdlComponent = get(this, '_mdlComponent');
    if (!isEmpty(mdlComponent)) {
      mdlComponent.drawerToggleHandler_();
    }
  }
});
