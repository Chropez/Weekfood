import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const { Application } = Ember;
const { modulePrefix, podModulePrefix } = config;

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Application.extend({
  modulePrefix: modulePrefix,
  podModulePrefix: podModulePrefix,
  Resolver
});

loadInitializers(App, modulePrefix);

export default App;
