import Ember from 'ember';

const {
  Component,
  computed,
  computed: {
    equal,
    not,
    notEmpty
  },
  get,
  String: { htmlSafe },
  inject: { service },
  isEmpty
} = Ember;

export default Component.extend({
  wfNav: service(),
  tagName: 'header',
  classNames: 'mdl-layout__header',
  buttonIcon: 'menu',
  buttonGoToRoute: null,
  onButtonClick: null,

  // Transparent Not working
  // Scrolling on fixed transparent headers needs
  // to observe scrollbar position.
  transparent: false,
  bgImage: '',

  showIcon: not('showDrawerButton'),
  showBackgroundImage: notEmpty('bgImage'),
  attributeBindings: ['style'],

  style: computed('bgImage', function() {
    let bgImage = get(this, 'bgImage');
    if (isEmpty(bgImage)) {
      return htmlSafe('');
    }
    return htmlSafe(`background-image: url('${bgImage}')`);
  }),

  showDrawerButton: equal('buttonIcon', 'menu'),

  classNameBindings: [
    'showIcon:wf-header-with-icon',
    'transparent:mdl-layout__header--transparent'
  ],

  actions: {
    toggleDrawer() {
      get(this, 'wfNav').toggleDrawer();
    },

    buttonAction() {
      let onButtonClick = get(this, 'onButtonClick');
      if (onButtonClick) {
        onButtonClick();
      }
    }
  }
});
