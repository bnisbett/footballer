import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('team', { path: '/team/:team_id' });
  this.route('player');
  this.route('fixture', { path: '/fixture/:fixture_id' });
  this.route('soccerseason', {path: '/soccerseason/:soccerseason_id' });
});

export default Router;
