import Route from '@ember/routing/route';
import { service } from '@ember/service';

const wait = (num) => new Promise((r) => setTimeout(r, num));

// This is if a user sees that "async/await" causes issues, so tries promise chaining
export default class Index1Route extends Route {
  @service router;

  beforeModel(/* transition */) {
    return wait(200).then(() => {
      this.router.transitionTo('login'); // Implicitly aborts the on-going transition.
    });
  }
}
