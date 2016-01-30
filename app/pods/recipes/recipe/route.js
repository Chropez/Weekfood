import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  model({recipe_id}) {
    return this.store.find('recipe', recipe_id);
  }
});
