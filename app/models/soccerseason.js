import DS from 'ember-data';

export default DS.Model.extend({
  caption: DS.attr(),
  league: DS.attr(),
  year: DS.attr(),
  currentMatchDay: DS.attr(),
  numberOfMatchDays: DS.attr(),
  numberOfTeams: DS.attr(),
  numberOfGames: DS.attr(),
  fixtures: DS.hasMany('fixture'),
  teams: DS.hasMany('team'),
  leagueTable: DS.belongsTo('leaguetable')
});
