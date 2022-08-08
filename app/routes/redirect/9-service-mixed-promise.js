import Route from '@ember/routing/route';
import { service } from '@ember/service';

// When using services *MAYBE* you are awaiting non-RSVP promises...
// If you're mixing in application or non-ember library code you likely have native promises mixed in
// Worse... You likely can't control this or even have a good way to know it's happening...
export default class Index1Route extends Route {
  @service router;
  @service('something-async') myService;

  beforeModel(/* transition */) {
    this.myService.mixedRsvpAndNativeThing().then(() => {
      this.router.transitionTo('login'); // Implicitly aborts the on-going transition.
    });
  }
}
