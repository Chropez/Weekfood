import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  model({ recipeId }) {
    return this.store.find('recipe', recipeId);
  }
});
