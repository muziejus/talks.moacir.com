import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return [
      {
        id: 'python-project-in-2026',
        title: 'Starting a Python Project in 2026',
      },
      {
        id: 'gitsertation-2025',
        title: 'Git and Gitting Organized (Also, Text Editing)',
      },
      {
        id: 'day-one-javascript-2024',
        title: 'Day One JavaScript',
      },
      {
        id: 'resistant-digital-map-2022',
        title: 'The Resistant Digital Map',
      },
      {
        id: 'pacl-data-storage-and-education-2022',
        title: 'PACL Data Storage and Education Update',
      },
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
