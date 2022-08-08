import Route from '@ember/routing/route';
import { service } from '@ember/service';

// When using services *MAYBE* you are awaiting RSVP promises...
// For instance when `then` chaining from Ember Data
export default class Index1Route extends Route {
  @service router;
  @service('something-async') myService;

  beforeModel(/* transition */) {
    this.myService.rsvpBasedThing().then(() => {
      this.router.transitionTo('login'); // Implicitly aborts the on-going transition.
    });
  }
}
