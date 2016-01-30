import Ember from 'ember';

const {
  Component,
  computed,
  get,
  Handlebars: { SafeString },
  isEmpty
} = Ember;

export default Component.extend({
  recipe:null,
  classNames: 'mdl-card mdl-shadow--2dp recipe-card',
  defaultImageUrl: 'img/empty-plate.png',

  imageStyle: computed('recipe.imageUrl', function() {
    const defaultImageUrl = get(this, 'defaultImageUrl');
    const imageUrl = get(this, 'recipe.imageUrl') ;
    const imageToUse = isEmpty(imageUrl) ? defaultImageUrl : imageUrl;
    return new SafeString(`background-image: url('${imageToUse}')`);
  }),

  actions: {
    edit() {
        const recipe = get(this, 'recipe');
        get(this, 'edit')(recipe);
    },
    delete() {
      const recipe = get(this, 'recipe');
      get(this, 'delete')(recipe);
    }
  }

});
