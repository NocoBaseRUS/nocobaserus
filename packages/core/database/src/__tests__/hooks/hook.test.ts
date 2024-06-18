/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { Database } from '../../database';
import { mockDatabase } from '../';

describe('hook', () => {
  let db: Database;

  beforeEach(async () => {
    db = mockDatabase();
    await db.clean({ drop: true });
  });

  afterEach(async () => {
    await db.close();
  });

  it('should get hook modelName', async () => {
    const Posts = db.collection({
      name: 'posts',
      fields: [
        {
          type: 'string',
          name: 'title',
        },
      ],
    });

    const Tags = db.collection({
      name: 'tags',
      fields: [
        {
          type: 'string',
          name: 'name',
        },
      ],
    });

    Posts.setField('tags', {
      type: 'belongsToMany',
      target: 'tags',
      through: 'post',
    });

    await db.sync();

    const throughCollection = db.getCollection('post');
    throughCollection.setField('test', { type: 'string' });

    const callback = vi.fn();
    db.on('post.afterSync', (options) => {
      callback(options);
    });

    await throughCollection.sync();

    expect(callback).toHaveBeenCalledOnce();
  });
});
