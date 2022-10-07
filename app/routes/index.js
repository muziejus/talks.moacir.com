import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return [
      {
        id: 'scholarly-writing-markdown-zotero-latex-2022',
        title:
          'Scholarly Writing with Markdown, Zotero, and <span class="latex">L<sup>a</sup>T<sub>e</sub>X</span>',
      },
      {
        id: 'gitsertation-2022',
        title:
          '“Gitsertation”: Scholarly Project Workflows with Git, Zotero, and Pandoc',
      },
      {
        id: 'data-management-plans-and-more-2022',
        title: 'Research Data Management (Plans and More)',
      },
    ];
  }
}
