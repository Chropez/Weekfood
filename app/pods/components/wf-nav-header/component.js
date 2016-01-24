import Ember from 'ember';

const {
  Component,
  computed: {
    equal,
    not
  },
  get,
  inject: { service }
} = Ember;

export default Component.extend({
  wfDrawer: service(),
  tagName: 'header',
  classNames: 'mdl-layout__header',
  buttonIcon: 'menu',
  buttonGoToRoute: null,
  onButtonClick: null,
  showIcon: not('showDrawerButton'),

  showDrawerButton: equal('buttonIcon', 'menu'),

  classNameBindings: [
    'showIcon:header-with-icon'
  ],

  actions: {
    toggleDrawer() {
      get(this, 'wfDrawer').toggle();
    },

    buttonAction() {
      const onButtonClick = get(this, 'onButtonClick');
      if(onButtonClick){
        onButtonClick();
      }
    }
  }
});
