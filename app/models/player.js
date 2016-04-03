import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  position: DS.attr(),
  jerseyNumber: DS.attr(),
  dateOfBirth: DS.attr(),
  nationality: DS.attr(),
  contractUntil: DS.attr(),
  marketValue: DS.attr()
});
