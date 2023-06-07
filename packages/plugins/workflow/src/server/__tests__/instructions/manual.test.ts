import Database from '@nocobase/database';
import UserPlugin from '@nocobase/plugin-users';
import { MockServer } from '@nocobase/test';
import { getApp, sleep } from '..';
import { EXECUTION_STATUS, JOB_STATUS } from '../../constants';
import jwt from 'jsonwebtoken';

// NOTE: skipped because time is not stable on github ci, but should work in local
describe('workflow > instructions > manual', () => {
  let app: MockServer;
  let agent;
  let userAgents;
  let db: Database;
  let PostRepo;
  let CommentRepo;
  let WorkflowModel;
  let workflow;
  let UserModel;
  let users;
  let UserJobModel;

  beforeEach(async () => {
    app = await getApp({
      plugins: ['users', 'auth'],
    });
    await app.getPlugin('auth').install();
    agent = app.agent();
    db = app.db;
    WorkflowModel = db.getCollection('workflows').model;
    PostRepo = db.getCollection('posts').repository;
    CommentRepo = db.getCollection('comments').repository;
    UserModel = db.getCollection('users').model;
    UserJobModel = db.getModel('users_jobs');

    users = await UserModel.bulkCreate([
      { id: 1, nickname: 'a' },
      { id: 2, nickname: 'b' },
    ]);

    const userPlugin = app.getPlugin('users') as UserPlugin;
    userAgents = users.map((user) =>
      app
        .agent()
        .auth(
          jwt.sign(
            {
              userId: user.id,
            },
            'test-key',
          ),
          { type: 'bearer' },
        )
        .set('X-Authenticator', 'basic'),
    );

    workflow = await WorkflowModel.create({
      enabled: true,
      type: 'collection',
      config: {
        mode: 1,
        collection: 'posts',
      },
    });
  });

  afterEach(() => db.close());

  describe('mode: 0 (single record)', () => {
    it('the only user assigned could submit', async () => {
      const n1 = await workflow.createNode({
        type: 'manual',
        config: {
          assignees: [users[0].id],
          forms: {
            f1: {
              actions: [JOB_STATUS.RESOLVED],
            },
          },
        },
      });

      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const [pending] = await workflow.getExecutions();
      expect(pending.status).toBe(EXECUTION_STATUS.STARTED);
      const [j1] = await pending.getJobs();
      expect(j1.status).toBe(JOB_STATUS.PENDING);

      const usersJobs = await UserJobModel.findAll();
      expect(usersJobs.length).toBe(1);
      expect(usersJobs[0].status).toBe(JOB_STATUS.PENDING);
      expect(usersJobs[0].userId).toBe(users[0].id);
      expect(usersJobs[0].jobId).toBe(j1.id);

      const res1 = await agent.resource('users_jobs').submit({
        filterByTk: usersJobs[0].id,
        values: { status: JOB_STATUS.RESOLVED },
      });
      expect(res1.status).toBe(401);

      const res2 = await userAgents[1].resource('users_jobs').submit({
        filterByTk: usersJobs[0].id,
        values: {
          status: JOB_STATUS.RESOLVED,
          result: { f1: {} },
        },
      });
      expect(res2.status).toBe(403);

      const res3 = await userAgents[0].resource('users_jobs').submit({
        filterByTk: usersJobs[0].id,
        values: {
          status: JOB_STATUS.RESOLVED,
          result: { f1: { a: 1 } },
        },
      });
      expect(res3.status).toBe(202);

      await sleep(1000);

      const [j2] = await pending.getJobs();
      expect(j2.status).toBe(JOB_STATUS.RESOLVED);
      expect(j2.result).toEqual({ f1: { a: 1 } });

      const usersJobsAfter = await UserJobModel.findAll();
      expect(usersJobsAfter.length).toBe(1);
      expect(usersJobsAfter[0].status).toBe(JOB_STATUS.RESOLVED);
      expect(usersJobsAfter[0].result).toEqual({ f1: { a: 1 } });

      const res4 = await userAgents[0].resource('users_jobs').submit({
        filterByTk: usersJobs[0].id,
        values: {
          status: JOB_STATUS.RESOLVED,
          result: { f1: { a: 2 } },
        },
      });
      expect(res4.status).toBe(400);
    });

    it('any user assigned could submit', async () => {
      const n1 = await workflow.createNode({
        type: 'manual',
        config: {
          assignees: [users[0].id, users[1].id],
          forms: {
            f1: { actions: [JOB_STATUS.RESOLVED] },
          },
        },
      });

      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const [pending] = await workflow.getExecutions();
      expect(pending.status).toBe(EXECUTION_STATUS.STARTED);
      const [j1] = await pending.getJobs();
      expect(j1.status).toBe(JOB_STATUS.PENDING);

      const usersJobs = await j1.getUsersJobs();

      const res1 = await userAgents[1].resource('users_jobs').submit({
        filterByTk: usersJobs.find((item) => item.userId === users[1].id).id,
        values: {
          status: JOB_STATUS.RESOLVED,
          result: { f1: { a: 1 } },
        },
      });
      expect(res1.status).toBe(202);

      await sleep(1000);

      const [j2] = await pending.getJobs();
      expect(j2.status).toBe(JOB_STATUS.RESOLVED);
      expect(j2.result).toEqual({ f1: { a: 1 } });

      const res2 = await userAgents[0].resource('users_jobs').submit({
        filterByTk: usersJobs.find((item) => item.userId === users[0].id).id,
        values: {
          status: JOB_STATUS.RESOLVED,
          result: { f1: { a: 1 } },
        },
      });
      expect(res2.status).toBe(400);
    });

    it('also could submit to users_jobs api', async () => {
      const n1 = await workflow.createNode({
        type: 'manual',
        config: {
          assignees: [users[0].id],
          forms: {
            f1: { actions: [JOB_STATUS.RESOLVED] },
          },
        },
      });

      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const UserJobModel = db.getModel('users_jobs');
      const usersJobs = await UserJobModel.findAll();
      expect(usersJobs.length).toBe(1);
      expect(usersJobs[0].get('status')).toBe(JOB_STATUS.PENDING);
      expect(usersJobs[0].get('userId')).toBe(users[0].id);

      const res = await userAgents[0].resource('users_jobs').submit({
        filterByTk: usersJobs[0].get('id'),
        values: {
          status: JOB_STATUS.RESOLVED,
          result: { f1: { a: 1 } },
        },
      });
      expect(res.status).toBe(202);

      await sleep(1000);

      const [execution] = await workflow.getExecutions();
      expect(execution.status).toBe(EXECUTION_STATUS.RESOLVED);
      const [job] = await execution.getJobs();
      expect(job.status).toBe(JOB_STATUS.RESOLVED);
      expect(job.result).toEqual({ f1: { a: 1 } });
    });
  });

  describe('mode: 1 (multiple record, all)', () => {
    it('all resolved', async () => {
      const n1 = await workflow.createNode({
        type: 'manual',
        config: {
          assignees: [users[0].id, users[1].id],
          mode: 1,
          forms: {
            f1: { actions: [JOB_STATUS.RESOLVED] },
          },
        },
      });

      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const UserJobModel = db.getModel('users_jobs');
      const pendingJobs = await UserJobModel.findAll({
        order: [['userId', 'ASC']],
      });
      expect(pendingJobs.length).toBe(2);

      const res1 = await userAgents[0].resource('users_jobs').submit({
        filterByTk: pendingJobs[0].get('id'),
        values: {
          status: JOB_STATUS.RESOLVED,
          result: { f1: { a: 1 } },
        },
      });
      expect(res1.status).toBe(202);

      await sleep(1000);

      const [e1] = await workflow.getExecutions();
      expect(e1.status).toBe(EXECUTION_STATUS.STARTED);
      const [j1] = await e1.getJobs();
      expect(j1.status).toBe(JOB_STATUS.PENDING);
      expect(j1.result).toBe(0.5);
      const usersJobs1 = await UserJobModel.findAll({
        order: [['userId', 'ASC']],
      });
      expect(usersJobs1.length).toBe(2);

      const res2 = await userAgents[1].resource('users_jobs').submit({
        filterByTk: pendingJobs[1].get('id'),
        values: {
          status: JOB_STATUS.RESOLVED,
          result: { f1: { a: 2 } },
        },
      });
      expect(res2.status).toBe(202);

      await sleep(1000);

      const [e2] = await workflow.getExecutions();
      expect(e2.status).toBe(EXECUTION_STATUS.RESOLVED);
      const [j2] = await e2.getJobs();
      expect(j2.status).toBe(JOB_STATUS.RESOLVED);
      expect(j2.result).toBe(1);
    });

    it('first rejected', async () => {
      const n1 = await workflow.createNode({
        type: 'manual',
        config: {
          assignees: [users[0].id, users[1].id],
          mode: 1,
          forms: {
            f1: { actions: [JOB_STATUS.REJECTED] },
          },
        },
      });

      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const UserJobModel = db.getModel('users_jobs');
      const pendingJobs = await UserJobModel.findAll({
        order: [['userId', 'ASC']],
      });
      expect(pendingJobs.length).toBe(2);

      const res1 = await userAgents[0].resource('users_jobs').submit({
        filterByTk: pendingJobs[0].get('id'),
        values: {
          status: JOB_STATUS.REJECTED,
          result: { f1: { a: 0 } },
        },
      });
      expect(res1.status).toBe(202);

      await sleep(1000);

      const [e1] = await workflow.getExecutions();
      expect(e1.status).toBe(EXECUTION_STATUS.REJECTED);
      const [j1] = await e1.getJobs();
      expect(j1.status).toBe(JOB_STATUS.REJECTED);
      expect(j1.result).toBe(0.5);
      const usersJobs1 = await UserJobModel.findAll({
        order: [['userId', 'ASC']],
      });
      expect(usersJobs1.length).toBe(2);

      const res2 = await userAgents[1].resource('users_jobs').submit({
        filterByTk: pendingJobs[1].get('id'),
        values: {
          status: JOB_STATUS.REJECTED,
          result: { f1: { a: 0 } },
        },
      });
      expect(res2.status).toBe(400);
    });

    it('last rejected', async () => {
      const n1 = await workflow.createNode({
        type: 'manual',
        config: {
          assignees: [users[0].id, users[1].id],
          mode: 1,
          forms: {
            f1: { actions: [JOB_STATUS.RESOLVED, JOB_STATUS.REJECTED] },
          },
        },
      });

      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const UserJobModel = db.getModel('users_jobs');
      const pendingJobs = await UserJobModel.findAll({
        order: [['userId', 'ASC']],
      });
      expect(pendingJobs.length).toBe(2);

      const res1 = await userAgents[0].resource('users_jobs').submit({
        filterByTk: pendingJobs[0].get('id'),
        values: {
          status: JOB_STATUS.RESOLVED,
          result: { f1: { a: 1 } },
        },
      });
      expect(res1.status).toBe(202);

      await sleep(1000);

      const [e1] = await workflow.getExecutions();
      expect(e1.status).toBe(EXECUTION_STATUS.STARTED);
      const [j1] = await e1.getJobs();
      expect(j1.status).toBe(JOB_STATUS.PENDING);
      expect(j1.result).toBe(0.5);
      const usersJobs1 = await UserJobModel.findAll({
        order: [['userId', 'ASC']],
      });
      expect(usersJobs1.length).toBe(2);

      const res2 = await userAgents[1].resource('users_jobs').submit({
        filterByTk: pendingJobs[1].get('id'),
        values: {
          status: JOB_STATUS.REJECTED,
          result: { f1: { a: 0 } },
        },
      });
      expect(res2.status).toBe(202);

      await sleep(1000);

      const [e2] = await workflow.getExecutions();
      expect(e2.status).toBe(EXECUTION_STATUS.REJECTED);
      const [j2] = await e2.getJobs();
      expect(j2.status).toBe(JOB_STATUS.REJECTED);
      expect(j2.result).toBe(1);
    });
  });

  describe('mode: -1 (multiple record, any)', () => {
    it('first resolved', async () => {
      const n1 = await workflow.createNode({
        type: 'manual',
        config: {
          assignees: [users[0].id, users[1].id],
          mode: -1,
          forms: {
            f1: { actions: [JOB_STATUS.RESOLVED, JOB_STATUS.REJECTED] },
          },
        },
      });

      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const UserJobModel = db.getModel('users_jobs');
      const pendingJobs = await UserJobModel.findAll({
        order: [['userId', 'ASC']],
      });
      expect(pendingJobs.length).toBe(2);

      const res1 = await userAgents[0].resource('users_jobs').submit({
        filterByTk: pendingJobs[0].get('id'),
        values: {
          status: JOB_STATUS.RESOLVED,
          result: { f1: { a: 1 } },
        },
      });
      expect(res1.status).toBe(202);

      await sleep(1000);

      const [e1] = await workflow.getExecutions();
      expect(e1.status).toBe(EXECUTION_STATUS.RESOLVED);
      const [j1] = await e1.getJobs();
      expect(j1.status).toBe(JOB_STATUS.RESOLVED);
      expect(j1.result).toBe(0.5);

      const res2 = await userAgents[1].resource('users_jobs').submit({
        filterByTk: pendingJobs[1].get('id'),
        values: {
          status: JOB_STATUS.REJECTED,
          result: { f1: { a: 0 } },
        },
      });
      expect(res2.status).toBe(400);
    });

    it('any resolved', async () => {
      const n1 = await workflow.createNode({
        type: 'manual',
        config: {
          assignees: [users[0].id, users[1].id],
          mode: -1,
          forms: {
            f1: { actions: [JOB_STATUS.RESOLVED, JOB_STATUS.REJECTED] },
          },
        },
      });

      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const UserJobModel = db.getModel('users_jobs');
      const pendingJobs = await UserJobModel.findAll({
        order: [['userId', 'ASC']],
      });
      expect(pendingJobs.length).toBe(2);

      const res1 = await userAgents[0].resource('users_jobs').submit({
        filterByTk: pendingJobs[0].get('id'),
        values: {
          status: JOB_STATUS.REJECTED,
          result: { f1: { a: 0 } },
        },
      });
      expect(res1.status).toBe(202);

      await sleep(1000);

      const [e1] = await workflow.getExecutions();
      expect(e1.status).toBe(EXECUTION_STATUS.STARTED);
      const [j1] = await e1.getJobs();
      expect(j1.status).toBe(JOB_STATUS.PENDING);
      expect(j1.result).toBe(0.5);

      const res2 = await userAgents[1].resource('users_jobs').submit({
        filterByTk: pendingJobs[1].get('id'),
        values: {
          status: JOB_STATUS.RESOLVED,
          result: { f1: { a: 1 } },
        },
      });
      expect(res2.status).toBe(202);

      await sleep(1000);

      const [e2] = await workflow.getExecutions();
      expect(e2.status).toBe(EXECUTION_STATUS.RESOLVED);
      const [j2] = await e2.getJobs();
      expect(j2.status).toBe(JOB_STATUS.RESOLVED);
      expect(j2.result).toBe(1);
    });

    it('all rejected', async () => {
      const n1 = await workflow.createNode({
        type: 'manual',
        config: {
          assignees: [users[0].id, users[1].id],
          mode: -1,
          forms: {
            f1: { actions: [JOB_STATUS.REJECTED] },
          },
        },
      });

      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const UserJobModel = db.getModel('users_jobs');
      const pendingJobs = await UserJobModel.findAll({
        order: [['userId', 'ASC']],
      });
      expect(pendingJobs.length).toBe(2);

      const res1 = await userAgents[0].resource('users_jobs').submit({
        filterByTk: pendingJobs[0].get('id'),
        values: {
          status: JOB_STATUS.REJECTED,
          result: { f1: { a: 0 } },
        },
      });
      expect(res1.status).toBe(202);

      await sleep(1000);

      const [e1] = await workflow.getExecutions();
      expect(e1.status).toBe(EXECUTION_STATUS.STARTED);
      const [j1] = await e1.getJobs();
      expect(j1.status).toBe(JOB_STATUS.PENDING);
      expect(j1.result).toBe(0.5);

      const res2 = await userAgents[1].resource('users_jobs').submit({
        filterByTk: pendingJobs[1].get('id'),
        values: {
          status: JOB_STATUS.REJECTED,
          result: { f1: { a: 0 } },
        },
      });
      expect(res2.status).toBe(202);

      await sleep(1000);

      const [e2] = await workflow.getExecutions();
      expect(e2.status).toBe(EXECUTION_STATUS.REJECTED);
      const [j2] = await e2.getJobs();
      expect(j2.status).toBe(JOB_STATUS.REJECTED);
      expect(j2.result).toBe(1);
    });
  });

  describe('mode: (0,1) (multiple record, all to percent)', () => {});

  describe('mode: (-1,0) (multiple record, any to percent)', () => {});

  describe('use result of submitted form in manual node', () => {
    it('result should be available and correct', async () => {
      const n1 = await workflow.createNode({
        type: 'manual',
        config: {
          assignees: [users[0].id, users[1].id],
          forms: {
            f1: { actions: [JOB_STATUS.RESOLVED] },
          },
        },
      });

      const n2 = await workflow.createNode({
        type: 'calculation',
        config: {
          engine: 'math.js',
          expression: `{{$jobsMapByNodeId.${n1.id}.f1.number}} + 1`,
        },
        upstreamId: n1.id,
      });

      await n1.setDownstream(n2);

      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const UserJobModel = db.getModel('users_jobs');
      const pendingJobs = await UserJobModel.findAll({
        order: [['userId', 'ASC']],
      });
      expect(pendingJobs.length).toBe(2);

      const res1 = await userAgents[0].resource('users_jobs').submit({
        filterByTk: pendingJobs[0].get('id'),
        values: {
          status: JOB_STATUS.RESOLVED,
          result: { f1: { number: 1 } },
        },
      });
      expect(res1.status).toBe(202);

      await sleep(1000);

      const [e2] = await workflow.getExecutions();
      expect(e2.status).toBe(EXECUTION_STATUS.RESOLVED);
      const [j1, j2] = await e2.getJobs({ order: [['createdAt', 'ASC']] });
      expect(j2.status).toBe(JOB_STATUS.RESOLVED);
      expect(j2.result).toBe(2);
    });

    it('save all forms, only reserve submitted ones', async () => {
      const n1 = await workflow.createNode({
        type: 'manual',
        config: {
          assignees: [users[0].id, users[1].id],
          forms: {
            f1: { actions: [JOB_STATUS.RESOLVED, JOB_STATUS.PENDING] },
            f2: { actions: [JOB_STATUS.RESOLVED, JOB_STATUS.PENDING] },
          },
        },
      });

      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const UserJobModel = db.getModel('users_jobs');
      const pendingJobs = await UserJobModel.findAll({
        order: [['userId', 'ASC']],
      });
      expect(pendingJobs.length).toBe(2);

      const res1 = await userAgents[0].resource('users_jobs').submit({
        filterByTk: pendingJobs[0].get('id'),
        values: {
          status: JOB_STATUS.PENDING,
          result: { f1: { number: 1 } },
        },
      });
      expect(res1.status).toBe(202);

      await sleep(500);

      const [e1] = await workflow.getExecutions();
      expect(e1.status).toBe(EXECUTION_STATUS.STARTED);
      const [j1] = await e1.getJobs({ order: [['createdAt', 'ASC']] });
      expect(j1.status).toBe(JOB_STATUS.PENDING);
      expect(j1.result).toMatchObject({ f1: { number: 1 } });

      const res2 = await userAgents[0].resource('users_jobs').submit({
        filterByTk: pendingJobs[0].get('id'),
        values: {
          status: JOB_STATUS.PENDING,
          result: { f2: { number: 2 } },
        },
      });
      expect(res2.status).toBe(202);

      await sleep(500);

      const [e2] = await workflow.getExecutions();
      expect(e2.status).toBe(EXECUTION_STATUS.STARTED);
      const [j2] = await e2.getJobs({ order: [['createdAt', 'ASC']] });
      expect(j2.status).toBe(JOB_STATUS.PENDING);
      expect(j2.result).toMatchObject({
        f1: { number: 1 },
        f2: { number: 2 },
      });

      const res3 = await userAgents[0].resource('users_jobs').submit({
        filterByTk: pendingJobs[0].get('id'),
        values: {
          status: JOB_STATUS.RESOLVED,
          result: { f2: { number: 3 } },
        },
      });
      expect(res3.status).toBe(202);

      await sleep(500);

      const [e3] = await workflow.getExecutions();
      expect(e3.status).toBe(EXECUTION_STATUS.RESOLVED);
      const [j3] = await e3.getJobs({ order: [['createdAt', 'ASC']] });
      expect(j3.status).toBe(JOB_STATUS.RESOLVED);
      expect(j3.result).toMatchObject({ f2: { number: 3 } });
    });
  });

  describe('forms', () => {
    describe('create', () => {
      it('create as configured', async () => {
        const n1 = await workflow.createNode({
          type: 'manual',
          config: {
            assignees: [users[0].id],
            forms: {
              f1: {
                type: 'create',
                actions: [JOB_STATUS.RESOLVED],
                collection: 'comments',
              },
            },
          },
        });

        const post = await PostRepo.create({ values: { title: 't1' } });

        await sleep(500);

        const UserJobModel = db.getModel('users_jobs');
        const pendingJobs = await UserJobModel.findAll({
          order: [['userId', 'ASC']],
        });
        expect(pendingJobs.length).toBe(1);

        const res1 = await userAgents[0].resource('users_jobs').submit({
          filterByTk: pendingJobs[0].get('id'),
          values: {
            status: JOB_STATUS.RESOLVED,
            result: { f1: { status: 1 } },
          },
        });
        expect(res1.status).toBe(202);

        await sleep(1000);

        const [e1] = await workflow.getExecutions();
        expect(e1.status).toBe(EXECUTION_STATUS.RESOLVED);
        const [j1] = await e1.getJobs();
        expect(j1.status).toBe(JOB_STATUS.RESOLVED);
        expect(j1.result).toMatchObject({ f1: { status: 1 } });

        const comments = await CommentRepo.find();
        expect(comments.length).toBe(1);
        expect(comments[0]).toMatchObject({ status: 1 });
      });

      it('save first and then commit', async () => {
        const n1 = await workflow.createNode({
          type: 'manual',
          config: {
            assignees: [users[0].id],
            forms: {
              f1: {
                type: 'create',
                actions: [JOB_STATUS.RESOLVED, JOB_STATUS.PENDING],
                collection: 'comments',
              },
            },
          },
        });

        const post = await PostRepo.create({ values: { title: 't1' } });

        await sleep(500);

        const UserJobModel = db.getModel('users_jobs');
        const pendingJobs = await UserJobModel.findAll({
          order: [['userId', 'ASC']],
        });
        expect(pendingJobs.length).toBe(1);

        const res1 = await userAgents[0].resource('users_jobs').submit({
          filterByTk: pendingJobs[0].get('id'),
          values: {
            status: JOB_STATUS.PENDING,
            result: { f1: { status: 1 } },
          },
        });
        expect(res1.status).toBe(202);

        await sleep(500);

        const [e1] = await workflow.getExecutions();
        expect(e1.status).toBe(EXECUTION_STATUS.STARTED);
        const [j1] = await e1.getJobs();
        expect(j1.status).toBe(JOB_STATUS.PENDING);
        expect(j1.result).toMatchObject({ f1: { status: 1 } });

        const c1 = await CommentRepo.find();
        expect(c1.length).toBe(0);

        const res2 = await userAgents[0].resource('users_jobs').submit({
          filterByTk: pendingJobs[0].get('id'),
          values: {
            status: JOB_STATUS.RESOLVED,
            result: { f1: { status: 1 } },
          },
        });

        await sleep(500);

        const [e2] = await workflow.getExecutions();
        expect(e2.status).toBe(EXECUTION_STATUS.RESOLVED);
        const [j2] = await e2.getJobs();
        expect(j2.status).toBe(JOB_STATUS.RESOLVED);
        expect(j2.result).toMatchObject({ f1: { status: 1 } });

        const c2 = await CommentRepo.find();
        expect(c2.length).toBe(1);
      });
    });

    describe('update', () => {
      it('update as configured', async () => {
        const n1 = await workflow.createNode({
          type: 'manual',
          config: {
            assignees: [users[0].id],
            forms: {
              f1: {
                type: 'update',
                actions: [JOB_STATUS.RESOLVED],
                collection: 'posts',
              },
            },
          },
        });

        const post = await PostRepo.create({ values: { title: 't1' } });

        await sleep(500);

        const UserJobModel = db.getModel('users_jobs');
        const pendingJobs = await UserJobModel.findAll({
          order: [['userId', 'ASC']],
        });
        expect(pendingJobs.length).toBe(1);

        const res1 = await userAgents[0].resource('users_jobs').submit({
          filterByTk: pendingJobs[0].get('id'),
          values: {
            status: JOB_STATUS.RESOLVED,
            result: { f1: { title: 't2' } },
          },
        });
        expect(res1.status).toBe(202);

        await sleep(1000);

        const [e2] = await workflow.getExecutions();
        expect(e2.status).toBe(EXECUTION_STATUS.RESOLVED);
        const [j1] = await e2.getJobs();
        expect(j1.status).toBe(JOB_STATUS.RESOLVED);
        expect(j1.result).toMatchObject({ f1: { title: 't2' } });

        const postsAfter = await PostRepo.find();
        expect(postsAfter.length).toBe(1);
        expect(postsAfter[0]).toMatchObject({ title: 't2' });
      });
    });
  });
});
