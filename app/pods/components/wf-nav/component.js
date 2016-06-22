import Ember from 'ember';
import MdlNav from 'ember-material-lite/components/mdl-nav';
import moment from 'moment';
const {
  computed,
  inject: { service },
  get
} = Ember;

export default MdlNav.extend({
  session: service(),
  wfNav: service(),

  title: 'Weekfood',
  week: computed(() => {
    return moment().isoWeek();
  }),
  year: computed(() => {
    return moment().isoWeekYear();
  }),

  // mdlNav settings
  fixedDrawer: true,
  fixedHeader: true,
  includeDrawerTitle: false,
  includeHeaderLinks: false,
  closeDrawerOnItemClick: true,

  didInsertElement() {
    this._super(...arguments);
    let wfNav = get(this, 'wfNav');
    let mdlComponent = get(this, '_mdlComponent');
    wfNav.setMdlComponent(mdlComponent);
  },

  actions: {
    signOut() {
      get(this, 'onSignOut')();
    }
  }
});
