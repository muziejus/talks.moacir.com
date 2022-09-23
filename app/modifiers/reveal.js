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
    markdown: {
      gfm: true,
    },
    width: '100%',
    height: '90%',
    margin: 0.1,
    minScale: 1,
    maxScale: 1,
    controls: false,
    progress: true,
    history: true,
    center: true,
    transition: 'slide', // none/fade/slide/convex/concave/zoom
    plugins,
  });

  return deck.destroy();
});
