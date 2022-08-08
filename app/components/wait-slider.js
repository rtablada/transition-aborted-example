import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class WaitSlider extends Component {
  @service('something-async') config;
}
