import { mockServer } from './index';
import { registerActions } from '@nocobase/actions';

describe('update action', () => {
  let app;
  let Post;
  let Comment;
  let Tag;
  let PostTag;

  beforeEach(async () => {
    app = mockServer();
    registerActions(app);

    PostTag = app.collection({
      name: 'posts_tags',
      fields: [{ type: 'string', name: 'tagged_at' }],
    });

    Post = app.collection({
      name: 'posts',
      fields: [
        { type: 'string', name: 'title' },
        { type: 'hasMany', name: 'comments' },
        { type: 'belongsToMany', name: 'tags', through: 'posts_tags' },
        { type: 'string', name: 'status', defaultValue: 'draft' },
      ],
    });

    Comment = app.collection({
      name: 'comments',
      fields: [
        { type: 'string', name: 'content' },
        { type: 'belongsTo', name: 'post' },
      ],
    });

    Tag = app.collection({
      name: 'tags',
      fields: [
        { type: 'string', name: 'name' },
        { type: 'belongsToMany', name: 'posts', through: 'posts_tags' },
      ],
    });

    await app.db.sync();
  });

  test('update resource', async () => {
    const p1 = await Post.repository.create({
      values: {
        title: 'p1',
      },
    });

    const response = await app
      .agent()
      .resource('posts')
      .update({
        resourceIndex: p1.get('id'),
        values: {
          title: 'p0',
        },
      });

    await p1.reload();
    expect(p1.get('title')).toEqual('p0');
  });

  test('update has many resource', async () => {
    const p1 = await Post.repository.create({
      values: {
        title: 'p1',
        comments: [
          {
            content: 'c1',
          },
        ],
      },
    });

    const c1 = await Comment.repository.findOne();

    const response = await app
      .agent()
      .resource('posts.comments')
      .update({
        resourceIndex: c1.get('id'),
        associatedIndex: p1.get('id'),
        values: {
          content: 'c0',
        },
      });

    await c1.reload();
    expect(c1.get('content')).toEqual('c0');
  });

  test('update belongs to many through value', async () => {
    const p1 = await Post.repository.create({
      values: {
        title: 'p1',
        tags: [
          {
            name: 't1',
            posts_tags: {
              tagged_at: '123',
            },
          },
        ],
      },
    });

    const p1t1 = (await p1.getTags())[0];

    const response = await app
      .agent()
      .resource('posts.tags')
      .update({
        resourceIndex: p1.get('id'),
        associatedIndex: p1t1.get('id'),
        values: {
          posts_tags: {
            tagged_at: 'test',
          },
        },
      });

    await p1t1.reload();
    expect(p1t1.posts_tags.tagged_at).toEqual('test');
  });
});
