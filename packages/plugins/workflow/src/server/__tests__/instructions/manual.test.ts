import Database from '@nocobase/database';
import UserPlugin from '@nocobase/plugin-users';
import { MockServer } from '@nocobase/test';
import { getApp, sleep } from '..';
import { EXECUTION_STATUS, JOB_STATUS } from '../../constants';



// NOTE: skipped because time is not stable on github ci, but should work in local
describe('workflow > instructions > manual', () => {
  let app: MockServer;
  let agent;
  let userAgents;
  let db: Database;
  let PostRepo;
  let WorkflowModel;
  let workflow;
  let UserModel;
  let users;
  let UserJobModel;

  beforeEach(async () => {
    app = await getApp({
      plugins: [
        'users'
      ]
    });
    agent = app.agent();
    db = app.db;
    WorkflowModel = db.getCollection('workflows').model;
    PostRepo = db.getCollection('posts').repository;
    UserModel = db.getCollection('users').model;
    UserJobModel = db.getModel('users_jobs');

    users = await UserModel.bulkCreate([
      { id: 1, nickname: 'a' },
      { id: 2, nickname: 'b' }
    ]);

    const userPlugin = app.getPlugin('users') as UserPlugin;
    userAgents = users.map((user) => app.agent().auth(userPlugin.jwtService.sign({
      userId: user.id,
    }), { type: 'bearer' }));

    workflow = await WorkflowModel.create({
      enabled: true,
      type: 'collection',
      config: {
        mode: 1,
        collection: 'posts'
      }
    });
  });

  afterEach(() => db.close());

  describe('mode: 0 (single record)', () => {
    it('the only user assigned could submit', async () => {
      const n1 = await workflow.createNode({
        type: 'manual',
        config: {
          assignees: [users[0].id],
          actions: [JOB_STATUS.RESOLVED]
        }
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
        values: { status: JOB_STATUS.RESOLVED }
      });
      expect(res1.status).toBe(401);

      const res2 = await userAgents[1].resource('users_jobs').submit({
        filterByTk: usersJobs[0].id,
        values: {
          status: JOB_STATUS.RESOLVED
        }
      });
      expect(res2.status).toBe(403);

      const res3 = await userAgents[0].resource('users_jobs').submit({
        filterByTk: usersJobs[0].id,
        values: {
          status: JOB_STATUS.RESOLVED,
          result: { a: 1 }
        }
      });
      expect(res3.status).toBe(202);

      await sleep(1000);

      const [j2] = await pending.getJobs();
      expect(j2.status).toBe(JOB_STATUS.RESOLVED);
      expect(j2.result).toEqual({ a: 1 });

      const usersJobsAfter = await UserJobModel.findAll();
      expect(usersJobsAfter.length).toBe(1);
      expect(usersJobsAfter[0].status).toBe(JOB_STATUS.RESOLVED);
      expect(usersJobsAfter[0].result).toEqual({ a: 1 });

      const res4 = await userAgents[0].resource('users_jobs').submit({
        filterByTk: usersJobs[0].id,
        values: {
          status: JOB_STATUS.RESOLVED,
          result: { a: 2 }
        }
      });
      expect(res4.status).toBe(400);
    });

    it('any user assigned could submit', async () => {
      const n1 = await workflow.createNode({
        type: 'manual',
        config: {
          assignees: [users[0].id, users[1].id],
          actions: [JOB_STATUS.RESOLVED],
        }
      });

      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const [pending] = await workflow.getExecutions();
      expect(pending.status).toBe(EXECUTION_STATUS.STARTED);
      const [j1] = await pending.getJobs();
      expect(j1.status).toBe(JOB_STATUS.PENDING);

      const usersJobs = await j1.getUsersJobs();

      const res1 = await userAgents[1].resource('users_jobs').submit({
        filterByTk: usersJobs.find(item => item.userId === users[1].id).id,
        values: {
          status: JOB_STATUS.RESOLVED,
          result: { a: 1 }
        }
      });
      expect(res1.status).toBe(202);

      await sleep(1000);

      const [j2] = await pending.getJobs();
      expect(j2.status).toBe(JOB_STATUS.RESOLVED);
      expect(j2.result).toEqual({ a: 1 });

      const res2 = await userAgents[0].resource('users_jobs').submit({
        filterByTk: usersJobs.find(item => item.userId === users[0].id).id,
        values: {
          status: JOB_STATUS.RESOLVED,
          result: { a: 2 }
        }
      });
      expect(res2.status).toBe(400);
    });

    it('also could submit to users_jobs api', async () => {
      const n1 = await workflow.createNode({
        type: 'manual',
        config: {
          assignees: [users[0].id],
          actions: [JOB_STATUS.RESOLVED]
        }
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
          result: { a: 1 }
        }
      });
      expect(res.status).toBe(202);

      await sleep(1000);

      const [execution] = await workflow.getExecutions();
      expect(execution.status).toBe(EXECUTION_STATUS.RESOLVED);
      const [job] = await execution.getJobs();
      expect(job.status).toBe(JOB_STATUS.RESOLVED);
      expect(job.result).toEqual({ a: 1 });
    });
  });

  describe('mode: 1 (multiple record, all)', () => {
    it('all resolved', async () => {
      const n1 = await workflow.createNode({
        type: 'manual',
        config: {
          assignees: [users[0].id, users[1].id],
          mode: 1,
          actions: [JOB_STATUS.RESOLVED]
        }
      });

      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const UserJobModel = db.getModel('users_jobs');
      const pendingJobs = await UserJobModel.findAll({
        order: [[ 'userId', 'ASC' ]]
      });
      expect(pendingJobs.length).toBe(2);

      const res1 = await userAgents[0].resource('users_jobs').submit({
        filterByTk: pendingJobs[0].get('id'),
        values: {
          status: JOB_STATUS.RESOLVED,
          result: { a: 1 }
        }
      });
      expect(res1.status).toBe(202);

      await sleep(1000);

      const [e1] = await workflow.getExecutions();
      expect(e1.status).toBe(EXECUTION_STATUS.STARTED);
      const [j1] = await e1.getJobs();
      expect(j1.status).toBe(JOB_STATUS.PENDING);
      expect(j1.result).toBe(0.5);
      const usersJobs1 = await UserJobModel.findAll({
        order: [[ 'userId', 'ASC' ]]
      });
      expect(usersJobs1.length).toBe(2);

      const res2 = await userAgents[1].resource('users_jobs').submit({
        filterByTk: pendingJobs[1].get('id'),
        values: {
          status: JOB_STATUS.RESOLVED,
          result: { a: 2 }
        }
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
          actions: [JOB_STATUS.REJECTED]
        }
      });

      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const UserJobModel = db.getModel('users_jobs');
      const pendingJobs = await UserJobModel.findAll({
        order: [[ 'userId', 'ASC' ]]
      });
      expect(pendingJobs.length).toBe(2);

      const res1 = await userAgents[0].resource('users_jobs').submit({
        filterByTk: pendingJobs[0].get('id'),
        values: {
          status: JOB_STATUS.REJECTED
        }
      });
      expect(res1.status).toBe(202);

      await sleep(1000);

      const [e1] = await workflow.getExecutions();
      expect(e1.status).toBe(EXECUTION_STATUS.REJECTED);
      const [j1] = await e1.getJobs();
      expect(j1.status).toBe(JOB_STATUS.REJECTED);
      expect(j1.result).toBe(0.5);
      const usersJobs1 = await UserJobModel.findAll({
        order: [[ 'userId', 'ASC' ]]
      });
      expect(usersJobs1.length).toBe(2);

      const res2 = await userAgents[1].resource('users_jobs').submit({
        filterByTk: pendingJobs[1].get('id'),
        values: {
          status: JOB_STATUS.REJECTED,
          result: { a: 2 }
        }
      });
      expect(res2.status).toBe(400);
    });

    it('last rejected', async () => {
      const n1 = await workflow.createNode({
        type: 'manual',
        config: {
          assignees: [users[0].id, users[1].id],
          mode: 1,
          actions: [JOB_STATUS.RESOLVED, JOB_STATUS.REJECTED]
        }
      });

      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const UserJobModel = db.getModel('users_jobs');
      const pendingJobs = await UserJobModel.findAll({
        order: [[ 'userId', 'ASC' ]]
      });
      expect(pendingJobs.length).toBe(2);

      const res1 = await userAgents[0].resource('users_jobs').submit({
        filterByTk: pendingJobs[0].get('id'),
        values: {
          status: JOB_STATUS.RESOLVED
        }
      });
      expect(res1.status).toBe(202);

      await sleep(1000);

      const [e1] = await workflow.getExecutions();
      expect(e1.status).toBe(EXECUTION_STATUS.STARTED);
      const [j1] = await e1.getJobs();
      expect(j1.status).toBe(JOB_STATUS.PENDING);
      expect(j1.result).toBe(0.5);
      const usersJobs1 = await UserJobModel.findAll({
        order: [[ 'userId', 'ASC' ]]
      });
      expect(usersJobs1.length).toBe(2);

      const res2 = await userAgents[1].resource('users_jobs').submit({
        filterByTk: pendingJobs[1].get('id'),
        values: {
          status: JOB_STATUS.REJECTED,
          result: { a: 2 }
        }
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
          actions: [JOB_STATUS.RESOLVED, JOB_STATUS.REJECTED]
        }
      });

      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const UserJobModel = db.getModel('users_jobs');
      const pendingJobs = await UserJobModel.findAll({
        order: [[ 'userId', 'ASC' ]]
      });
      expect(pendingJobs.length).toBe(2);

      const res1 = await userAgents[0].resource('users_jobs').submit({
        filterByTk: pendingJobs[0].get('id'),
        values: {
          status: JOB_STATUS.RESOLVED
        }
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
          status: JOB_STATUS.REJECTED
        }
      });
      expect(res2.status).toBe(400);
    });

    it('any resolved', async () => {
      const n1 = await workflow.createNode({
        type: 'manual',
        config: {
          assignees: [users[0].id, users[1].id],
          mode: -1,
          actions: [JOB_STATUS.RESOLVED, JOB_STATUS.REJECTED]
        }
      });

      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const UserJobModel = db.getModel('users_jobs');
      const pendingJobs = await UserJobModel.findAll({
        order: [[ 'userId', 'ASC' ]]
      });
      expect(pendingJobs.length).toBe(2);

      const res1 = await userAgents[0].resource('users_jobs').submit({
        filterByTk: pendingJobs[0].get('id'),
        values: {
          status: JOB_STATUS.REJECTED
        }
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
          status: JOB_STATUS.RESOLVED
        }
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
          actions: [JOB_STATUS.REJECTED]
        }
      });

      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const UserJobModel = db.getModel('users_jobs');
      const pendingJobs = await UserJobModel.findAll({
        order: [[ 'userId', 'ASC' ]]
      });
      expect(pendingJobs.length).toBe(2);

      const res1 = await userAgents[0].resource('users_jobs').submit({
        filterByTk: pendingJobs[0].get('id'),
        values: {
          status: JOB_STATUS.REJECTED
        }
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
          status: JOB_STATUS.REJECTED
        }
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

  describe('mode: (0,1) (multiple record, all to percent)', () => {

  });

  describe('mode: (-1,0) (multiple record, any to percent)', () => {

  });

  describe('use result of submitted form in manual node', () => {
    it('result should be available and correct', async () => {
      const n1 = await workflow.createNode({
        type: 'manual',
        config: {
          assignees: [users[0].id, users[1].id],
          actions: [JOB_STATUS.RESOLVED],
        }
      });

      const n2 = await workflow.createNode({
        type: 'calculation',
        config: {
          engine: 'math.js',
          expression: `{{$jobsMapByNodeId.${n1.id}.number}} + 1`
        },
        upstreamId: n1.id
      });

      await n1.setDownstream(n2);

      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const UserJobModel = db.getModel('users_jobs');
      const pendingJobs = await UserJobModel.findAll({
        order: [[ 'userId', 'ASC' ]]
      });
      expect(pendingJobs.length).toBe(2);

      const res1 = await userAgents[0].resource('users_jobs').submit({
        filterByTk: pendingJobs[0].get('id'),
        values: {
          status: JOB_STATUS.RESOLVED,
          result: { number: 1 }
        }
      });
      expect(res1.status).toBe(202);

      await sleep(1000);

      const [e2] = await workflow.getExecutions();
      expect(e2.status).toBe(EXECUTION_STATUS.RESOLVED);
      const [j1, j2] = await e2.getJobs({ order: [['createdAt', 'ASC']] });
      expect(j2.status).toBe(JOB_STATUS.RESOLVED);
      expect(j2.result).toBe(2);
    });
  });
});
