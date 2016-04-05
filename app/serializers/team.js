import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeSingleResponse(store, type, payload) {
    return {
      data: this._normalizeTeam(payload, type.modelName)
    };
  },

  normalizeArrayResponse(store, type, payload) {
    return {
      data: this._normalizeTeams(payload.teams, type.modelName)
    };
  },

  _normalizeTeam(team, type) {
    return {
      id: team.id,
      type: type,
      attributes: {
        name: team.name,
        code: team.code,
        shortName: team.shortName,
        squadMarketValue: team.squadMarketValue,
        crestUrl: team.crestUrl
      },
      relationships: {
        players: {
          links: {
            related: `http://api.football-data.org/v1/teams/${team.id}/players`
          }
        },
        fixtures: {
          links: {
            related: `http://api.football-data.org/v1/teams/${team.id}/fixtures`
          }
        }
      }
    };
  },

  _normalizeTeams(teams, type) {
    return teams.map((team) => {
      return this._normalizeTeam(team, type);
    });
  }
});
