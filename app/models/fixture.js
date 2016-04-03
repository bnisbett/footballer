import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr(),
  status: DS.attr(),
  homeTeam: DS.attr(),
  awayTeam: DS.attr()
});
