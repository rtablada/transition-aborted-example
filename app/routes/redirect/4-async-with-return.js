import Route from '@ember/routing/route';
import { service } from '@ember/service';

// This is the example as shown in the ember docs, but a user has made `beforeModel` async and returned the transition
export default class Index1Route extends Route {
  @service router;

  async beforeModel(/* transition */) {
    return this.router.transitionTo('login'); // Implicitly aborts the on-going transition.
  }
}
