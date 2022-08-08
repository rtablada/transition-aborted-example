import Route from '@ember/routing/route';
import { service } from '@ember/service';

// This is the example as shown in the ember docs but with a return statement
export default class Index1Route extends Route {
  @service router;

  beforeModel(/* transition */) {
    return this.router.transitionTo('login');
  }
}
