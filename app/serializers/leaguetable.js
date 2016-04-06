import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeSingleResponse(store, type, payload) {
    return {
      data: {
        id: payload.matchday,
        type: type.modelName,
        attributes: {
          leagueCaption: payload.leagueCaption,
          matchday: payload.matchday,
          standing: payload.standing
        }
      }
    };
  }
});
