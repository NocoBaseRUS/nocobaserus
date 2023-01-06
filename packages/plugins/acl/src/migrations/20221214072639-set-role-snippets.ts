import { Migration } from '@nocobase/server';

export default class SetRoleSnippetsMigration extends Migration {
  async up() {
    await this.app.db.getRepository('roles').update({
      filter: {
        allowConfigure: true,
      },
      values: {
        snippets: ['ui.*', 'pm', 'pm.*'],
        allowConfigure: false,
      },
    });
  }

  async down() {}
}
