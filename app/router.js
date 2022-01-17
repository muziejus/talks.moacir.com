import EmberRouter from '@ember/routing/router';
import config from 'talks.moacir.com/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('reveal');
  this.route('talk', { path: '/-/:talk_id' });
});
