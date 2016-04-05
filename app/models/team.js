import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  shortName: DS.attr(),
  code: DS.attr(),
  squadMarketValue: DS.attr(),
  crestUrl: DS.attr(),
  players: DS.hasMany('player'),
  fixtures: DS.hasMany('fixture')
});
