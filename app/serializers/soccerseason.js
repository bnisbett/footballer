import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeSingleResponse(store, type, payload) {
    return {
      data: {
        id: payload.id,
        type: type.modelName,
        attributes: {
          caption: payload.caption,
          league: payload.league,
          year: payload.year,
          currentMatchDay: payload.currentMatchDay,
          numberOfMatchDays: payload.numberOfMatchDays,
          numberOfTeams: payload.numberOfTeams,
          numberOfGames: payload.numberOfGames
        },
        relationships: {
          fixtures: {
            links: {
              related: `http://api.football-data.org/v1/soccerseasons/${payload.id}/fixtures`
            }
          }
        }
      }
    }
  }
});
