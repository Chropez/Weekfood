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
  Handlebars: { SafeString },
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
  transparent:false,
  bgImage:'',

  showIcon: not('showDrawerButton'),
  showBackgroundImage: notEmpty('bgImage'),
  attributeBindings: ['style'],

  style: computed('bgImage', function(){
    const bgImage = get(this, 'bgImage');
    if(isEmpty(bgImage)){
      return new SafeString('');
    }
    return new SafeString(`background-image: url('${bgImage}')`);
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
      const onButtonClick = get(this, 'onButtonClick');
      if(onButtonClick){
        onButtonClick();
      }
    }
  }
});
