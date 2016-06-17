import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('wf-mdl-textarea', 'Integration | Component | wf mdl textarea', {
  integration: true
});

test('sets correct textarea attributes', function(assert) {
  this.placeholder = 'one\ntwo';
  this.rows = 5;
  this.render(hbs`{{wf-mdl-textarea placeholder=placeholder rows=rows}}`);
  assert.equal(this.$('textarea').prop('placeholder'), this.placeholder);
  assert.equal(this.$('textarea').prop('rows'), this.rows);
});
