import path from 'path';

import Database from '@nocobase/database';
import { Application } from '@nocobase/server';
import { EXECUTION_STATUS, JOB_STATUS, testkit } from '@nocobase/plugin-workflow';

import Plugin from '..';

const { getApp, sleep } = testkit;

describe('workflow > instructions > delay', () => {
  let app: Application;
  let db: Database;
  let PostRepo;
  let WorkflowModel;
  let workflow;
  let plugin;

  beforeEach(async () => {
    app = await getApp({
      plugins: [Plugin],
      collectionPath: path.join(__dirname, './collections'),
    });
    plugin = app.pm.get('workflow');

    db = app.db;
    WorkflowModel = db.getCollection('workflows').model;
    PostRepo = db.getCollection('posts').repository;

    workflow = await WorkflowModel.create({
      enabled: true,
      type: 'collection',
      config: {
        mode: 1,
        collection: 'posts',
      },
    });
  });

  afterEach(() => app.destroy());

  describe('runtime', () => {
    it('delay to resolved', async () => {
      const n1 = await workflow.createNode({
        type: 'delay',
        config: {
          duration: 2000,
          endStatus: JOB_STATUS.RESOLVED,
        },
      });

      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const [e1] = await workflow.getExecutions();
      expect(e1.status).toEqual(EXECUTION_STATUS.STARTED);
      const [j1] = await e1.getJobs();
      expect(j1.status).toBe(JOB_STATUS.PENDING);

      await sleep(2000);

      const [e2] = await workflow.getExecutions();
      expect(e2.status).toEqual(EXECUTION_STATUS.RESOLVED);
      const [j2] = await e2.getJobs();
      expect(j2.status).toBe(JOB_STATUS.RESOLVED);
    });

    it('delay to reject', async () => {
      const n1 = await workflow.createNode({
        type: 'delay',
        config: {
          duration: 2000,
          endStatus: JOB_STATUS.FAILED,
        },
      });

      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const [e1] = await workflow.getExecutions();
      expect(e1.status).toEqual(EXECUTION_STATUS.STARTED);
      const [j1] = await e1.getJobs();
      expect(j1.status).toBe(JOB_STATUS.PENDING);

      await sleep(2000);

      const [e2] = await workflow.getExecutions();
      expect(e2.status).toEqual(EXECUTION_STATUS.FAILED);
      const [j2] = await e2.getJobs();
      expect(j2.status).toBe(JOB_STATUS.FAILED);
    });

    it('delay to resolve and rollback in downstream node', async () => {
      const n1 = await workflow.createNode({
        type: 'delay',
        config: {
          duration: 2000,
          endStatus: JOB_STATUS.RESOLVED,
        },
      });
      const n2 = await workflow.createNode({
        type: 'create',
        config: {
          collection: 'comment',
          params: {
            values: {
              status: 'should be number but use string to raise an error',
            },
          },
        },
        upstreamId: n1.id,
      });
      await n1.setDownstream(n2);

      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const [e1] = await workflow.getExecutions();
      expect(e1.status).toEqual(EXECUTION_STATUS.STARTED);
      const [j1] = await e1.getJobs();
      expect(j1.status).toBe(JOB_STATUS.PENDING);

      await sleep(2000);

      const [e2] = await workflow.getExecutions();
      expect(e2.status).toEqual(EXECUTION_STATUS.ERROR);
      const [j2, j3] = await e2.getJobs({ order: [['id', 'ASC']] });
      expect(j2.status).toBe(JOB_STATUS.RESOLVED);
      expect(j3.status).toBe(JOB_STATUS.ERROR);
    });
  });

  describe('app lifecycle', () => {
    beforeEach(async () => {
      await workflow.createNode({
        type: 'delay',
        config: {
          duration: 2000,
          endStatus: JOB_STATUS.RESOLVED,
        },
      });
    });

    it('restart app should trigger delayed job', async () => {
      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const [e1] = await workflow.getExecutions();
      expect(e1.status).toEqual(EXECUTION_STATUS.STARTED);
      const [j1] = await e1.getJobs();
      expect(j1.status).toBe(JOB_STATUS.PENDING);

      await app.destroy();
      await sleep(500);

      app = await getApp({
        plugins: [Plugin],
        collectionPath: path.join(__dirname, './collections'),
      });
      await sleep(2000);

      WorkflowModel = app.db.getCollection('workflows').model;
      const w2 = await WorkflowModel.findByPk(workflow.id);
      const [e2] = await w2.getExecutions();
      expect(e2.status).toEqual(EXECUTION_STATUS.RESOLVED);
      const [j2] = await e2.getJobs();
      expect(j2.status).toBe(JOB_STATUS.RESOLVED);
    });

    it('restart app should trigger missed delayed job', async () => {
      const post = await PostRepo.create({ values: { title: 't1' } });

      await sleep(500);

      const [e1] = await workflow.getExecutions();
      expect(e1.status).toEqual(EXECUTION_STATUS.STARTED);
      const [j1] = await e1.getJobs();
      expect(j1.status).toBe(JOB_STATUS.PENDING);

      await app.destroy();
      await sleep(2000);

      app = await getApp({
        plugins: [Plugin],
        collectionPath: path.join(__dirname, './collections'),
      });
      await sleep(1000);

      WorkflowModel = app.db.getCollection('workflows').model;
      const w2 = await WorkflowModel.findByPk(workflow.id);
      const [e2] = await w2.getExecutions();
      expect(e2.status).toEqual(EXECUTION_STATUS.RESOLVED);
      const [j2] = await e2.getJobs();
      expect(j2.status).toBe(JOB_STATUS.RESOLVED);
    });
  });
});
