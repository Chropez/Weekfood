import Ember from 'ember';

const {
  Component,
  get
} = Ember;

export default Component.extend({
  recipe: null,
  classNames: 'mdl-card mdl-shadow--2dp recipe-card',
  defaultImageUrl: 'img/empty-plate.png',

  actions: {
    edit() {
      let recipe = get(this, 'recipe');
      get(this, 'edit')(recipe);
    },
    delete() {
      let recipe = get(this, 'recipe');
      get(this, 'delete')(recipe);
    }
  }

});
