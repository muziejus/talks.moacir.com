import Route from '@ember/routing/route';

export default class TalkRoute extends Route {
  async model({ talk_id }) {
    const response = await fetch(`/md/${talk_id}.md`);
    const markdown = await response.text();
    return {
      talk_id,
      markdown,
    };
  }
}
