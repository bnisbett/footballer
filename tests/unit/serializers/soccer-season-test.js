import { moduleForModel, test } from 'ember-qunit';

moduleForModel('soccer-season', 'Unit | Serializer | soccer season', {
  // Specify the other units that are required for this test.
  needs: ['serializer:soccer-season']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
