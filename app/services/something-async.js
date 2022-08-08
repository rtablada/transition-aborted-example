import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { Promise as RsvpPromise } from 'rsvp';

const rsvpWait = (num) => new RsvpPromise((r) => setTimeout(r, num));
const wait = (num) => new Promise((r) => setTimeout(r, num));

export default class SomethingAsyncService extends Service {
  @tracked waitTime = 200;

  // This method actually mixes RSVP, but uses native async/await
  rsvpBasedThing() {
    return rsvpWait(this.waitTime);
  }
  // This method actually mixes RSVP, but uses native async/await
  async mixedRsvpAndNativeThing() {
    await rsvpWait(this.waitTime);
  }

  // This method actually mixes RSVP, but uses native async/await
  async nativeBasedThing() {
    await wait(this.waitTime);
  }
}
