import Route from '@ember/routing/route';
import { service } from '@ember/service';

// This is the example as shown in the ember docs
export default class Index1Route extends Route {
  @service router;

  beforeModel(/* transition */) {
    this.router.transitionTo('login'); // Implicitly aborts the on-going transition.
  }
}
