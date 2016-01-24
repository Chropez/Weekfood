import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('wf-nav-header', 'Integration | Component | wf nav header', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{wf-nav-header}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#wf-nav-header}}
      template block text
    {{/wf-nav-header}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
