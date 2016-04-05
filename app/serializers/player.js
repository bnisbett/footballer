import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeSingleResponse(store, type, payload) {
    return {
      data: this._normalizePlayer(payload, type.modelName)
    }
  },

  normalizeArrayResponse(store, type, payload) {
    return {
      data: this._normalizePlayers(payload.players, type.modelName)
    }
  },

  _normalizePlayer(player, type) {
    return {
      id: player.id,
      type: type,
      attributes: {
        name: player.name,
        position: player.position,
        jerseyNumber: player.jerseyNumber,
        dateOfBirth: player.dateOfBirth,
        nationality: player.nationality,
        contractUntil: player.contractUntil,
        marketValue: player.marketValue
      }
    }
  },

  _normalizePlayers(players, type) {
    return players.map((player) => {
      return this._normalizePlayer(player, type);
    });
  }
});
