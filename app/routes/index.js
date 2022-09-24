import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return [
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
