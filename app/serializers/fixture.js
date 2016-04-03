import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeSingleResponse(store, type, payload) {
    return {
      data: this._normalizeFixture(payload.fixture, type.modelName)
    }
  },

  normalizeArrayResponse(store, type, payload, id, requestType) {
    return {
      data: this._normalizeFixtures(payload.fixtures, type.modelName)
    }
  },

  _normalizeFixture(fixture, type) {
    return {
      id: fixture.id,
      type: type,
      attributes: {
        date: fixture.date,
        status: fixture.status,
        homeTeam: {
          id: fixture.homeTeamId,
          name: fixture.homeTeamName,
          score: fixture.result.goalsHomeTeam
        },
        awayTeam: {
          id: fixture.awayTeamId,
          name: fixture.awayTeamName,
          score: fixture.result.goalsAwayTeam
        },
      }
    }
  },

  _normalizeFixtures(fixtures, type) {
    return fixtures.map((fixture) => {
      return this._normalizeFixture(fixture, type);
    });
  }
});
