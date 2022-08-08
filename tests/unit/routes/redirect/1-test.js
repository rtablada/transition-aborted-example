import { module, test } from 'qunit';
import { setupTest } from 'router-example/tests/helpers';

module('Unit | Route | redirect/1', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:redirect/1');
    assert.ok(route);
  });
});
