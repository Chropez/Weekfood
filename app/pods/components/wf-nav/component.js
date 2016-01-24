import Ember from 'ember';
import MdlNav from 'ember-material-lite/components/mdl-nav';

const {
  inject: { service },
  get
} = Ember;

export default MdlNav.extend({
  session: service(),
  wfDrawer: service(),

  title: 'Weekfood',

  // mdlNav settings
  fixedDrawer:true,
  fixedHeader:true,
  includeDrawerTitle:false,
  includeHeaderLinks:false,
  closeDrawerOnItemClick:true,

  didInsertElement() {
    this._super(...arguments);
    const wfDrawer = get(this, 'wfDrawer');
    const mdlComponent = get(this, '_mdlComponent');
    wfDrawer.setMdlComponent(mdlComponent);
  },

  actions: {
    signOut() {
      get(this, 'onSignOut')();
    }
  }
});
