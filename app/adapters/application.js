import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://api.football-data.org',
  namespace: 'v1',
  headers: {
    "X-Auth-Token": 'ACCESS TOKEN GOES HERE',
    "X-Response-Control": 'minified'
  }
});
