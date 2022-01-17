import { modifier } from 'ember-modifier';
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import RevealNotes from 'reveal.js/plugin/notes/notes';

export default modifier(function reveal(element, _, { markdown }) {
  const deck = new Reveal(element);
  const plugins = [RevealNotes];
  if (markdown) {
    plugins.push(RevealMarkdown);
  }
  deck.initialize({
    plugins,
  });

  return undefined;
});
