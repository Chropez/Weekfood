import Ember from 'ember';

export default Ember.Controller.extend({
  init () {
    this.set('name', '');
    this.set('description', '');
  },

  actions: {
    addRecipe() {
      // const name = this.get('name');
      // const description = this.get('description');
      // const author = this.get('session').get('currentUser');
      //
      // var newRecipe = this.store.createRecord('recipe', {
      //   name: name,
      //   description: description,
      //   author: author
      // });
      //
      // author.get('recipes').addObject(newRecipe);
      //
      // newRecipe.save().then(() => {
      //   author.save().then(() => this.transitionToRoute('recipes'));
      // });
      //
      // Ember.setProperties(this, {name: '', description: ''})

    }
  }
});
