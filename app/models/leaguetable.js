import DS from 'ember-data';

export default DS.Model.extend({
  leagueCaption: DS.attr(),
  matchday: DS.attr(),
  standing: DS.attr()
});
