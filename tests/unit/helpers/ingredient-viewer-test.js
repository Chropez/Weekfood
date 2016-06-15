import { ingredientViewer } from '../../../helpers/ingredient-viewer';
import { module, test } from 'qunit';
import Ember from 'ember';

const {
  String: { htmlSafe }
} = Ember;

module('Unit | Helper | ingredient viewer');

// Replace this with your real tests.
test('should return empty when empty text', (assert) => {
  let result = ingredientViewer();
  assert.notOk(result);

  result = ingredientViewer(['']);
  assert.notOk(result);
});

test('should not add any brs', (assert) => {
  const result = ingredientViewer(['egg']);
  assert.deepEqual(result, htmlSafe('egg'));
});

test('should add brs on linebreaks', (assert) => {
  const result = ingredientViewer(['egg\npotatoes\r\n\r']);
  assert.deepEqual(result, htmlSafe('egg<br>potatoes<br><br>'));
});

test('should add strong on first number of each line', (assert) => {
  let result = ingredientViewer(['1 egg\n2 potatoes\ntomatoes 3']);
  assert.deepEqual(result,
    htmlSafe('<strong>1</strong> egg<br><strong>2</strong> potatoes<br>tomatoes 3'),
    'Handles ints');

    result = ingredientViewer(['1.4 egg\n2.2 potatoes\ntomatoes 3.4']);
    assert.deepEqual(result,
      htmlSafe('<strong>1.4</strong> egg<br><strong>2.2</strong> potatoes<br>tomatoes 3.4'),
      'Handles floats');

    result = ingredientViewer(['1,4 egg\n2,2 potatoes\ntomatoes 3,4']);
    assert.deepEqual(result,
      htmlSafe('<strong>1,4</strong> egg<br><strong>2,2</strong> potatoes<br>tomatoes 3,4'),
      'Handles floats with comma');
});
