import Component from '@glimmer/component';
import { action } from '@ember/object';
import Reveal from 'reveal.js';

export default class RevealComponent extends Component {
  @action initReveal() {
    const deck = new Reveal();
    deck.initialize();
  }
}
