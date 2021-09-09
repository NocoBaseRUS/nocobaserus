import { mockServer, MockServer } from '@nocobase/test';
import { registerActions } from '..';

describe('get', () => {
  let api: MockServer;

  beforeEach(async () => {
    api = mockServer({
      dataWrapping: false,
    });
    registerActions(api);
    api.database.table({
      name: 'posts',
      fields: [
        { type: 'string', name: 'title' },
        { type: 'hasMany', name: 'comments' },
      ],
    });
    api.database.table({
      name: 'comments',
      fields: [
        { type: 'string', name: 'content' },
      ],
    });
    await api.database.sync();
  });

  afterEach(async () => {
    return api.destroy();
  });

  it('get', async () => {
    const Post = api.database.getModel('posts');
    const post = await Post.create({ title: 't1' });
    const response = await api.resource('posts').get({
      resourceKey: post.id,
      fields: ['id', 'title']
    });
    expect(post.toJSON()).toMatchObject(response.body);
  });

  it('get associations', async () => {
    const [Post, Comment] = api.database.getModels(['posts', 'comments']);
    const post = await Post.create();
    const comment = await Comment.create({ content: 'c2' });
    await post.updateAssociations({
      comments: [comment]
    });
    const response = await api.resource('posts.comments').get({
      resourceKey: comment.id,
      associatedKey: post.id,
      fields: ['id', 'post_id', 'content']
    });
    const comment2 = await Comment.findByPk(comment.id);
    expect(comment2.toJSON()).toMatchObject(response.body);
  });
});
