import EmberRouter from '@ember/routing/router';
import config from 'router-example/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');

  this.route('redirect', function () {
    this.route('1-docs');
    this.route('2-return');
    this.route('3-async-no-return');
    this.route('4-async-with-return');
    this.route('6-native-promise-chain');
    this.route('7-rsvp-promise-chain');
    this.route('8-service-rsvp');
    this.route('9-service-async');
    this.route('10-service-mixed-promise');
  });
});
