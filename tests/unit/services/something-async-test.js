import { module, test } from 'qunit';
import { setupTest } from 'router-example/tests/helpers';

module('Unit | Service | something-async', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:something-async');
    assert.ok(service);
  });
});
