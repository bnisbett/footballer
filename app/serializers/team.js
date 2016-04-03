import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeFindRecordResponse(store, type, payload) {
    return {
      data: {
        id: payload.id,
        type: type.modelName,
        attributes: {
          name: payload.name,
          code: payload.code,
          shortName: payload.shortName,
          squadMarketValue: payload.squadMarketValue,
          crestUrl: payload.crestUrl
        },
        relationships: {
          players: {
            links: {
              related: `http://api.football-data.org/v1/teams/${payload.id}/players`
            }
          }
        }
      }
    };
  }
});
