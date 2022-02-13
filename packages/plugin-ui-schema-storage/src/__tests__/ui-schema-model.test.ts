import { mockServer, MockServer } from '@nocobase/test';
import { Collection, Database } from '@nocobase/database';
import PluginUiSchema, { UiSchemaRepository } from '..';

describe('ui schema model', () => {
  let app: MockServer;
  let db: Database;

  let RelatedCollection: Collection;

  afterEach(async () => {
    await app.destroy();
  });

  beforeEach(async () => {
    app = mockServer({
      registerActions: true,
    });

    db = app.db;

    const queryInterface = db.sequelize.getQueryInterface();
    await queryInterface.dropAllTables();

    app.plugin(PluginUiSchema);

    await app.load();

    RelatedCollection = db.collection({
      name: 'hasUiSchemaCollection',
      fields: [
        {
          type: 'belongsTo',
          name: 'uiSchema',
          target: 'ui_schemas',
        },
      ],
    });

    await db.sync({ force: true, alter: { drop: false } });
  });

  it('should create schema tree after ui_schema created', async () => {
    const uiSchemaRepository = db.getCollection('ui_schemas').repository as UiSchemaRepository;

    await RelatedCollection.repository.create({
      values: {
        uiSchema: {
          'x-uid': 'root-uid',
          title: 'root-node',
          name: 'root-node',
          properties: {
            child1: {
              title: 'child1',
            },
          },
        },
      },
    });

    const child1 = await uiSchemaRepository.findOne({
      filter: {
        name: 'child1',
      },
    });

    const tree = await uiSchemaRepository.getJsonSchema('root-uid');
    expect(tree).toMatchObject({
      title: 'root-node',
      properties: {
        child1: {
          title: 'child1',
          'x-uid': child1.get('uid'),
          'x-async': false,
          'x-index': 1,
        },
      },
      name: 'root-node',
      'x-uid': 'root-uid',
      'x-async': false,
    });
  });

  it('should update schema tree after ui_schema updated', async () => {
    const uiSchemaRepository = db.getCollection('ui_schemas').repository as UiSchemaRepository;

    const relatedInstance = await RelatedCollection.repository.create({
      values: {
        uiSchema: {
          'x-uid': 'root-uid',
          title: 'root-node',
          name: 'root-node',
          properties: {
            child1: {
              title: 'child1',
            },
          },
        },
      },
    });

    const child1 = await uiSchemaRepository.findOne({
      filter: {
        name: 'child1',
      },
    });

    await RelatedCollection.repository.update({
      updateAssociationValues: ['uiSchema'],
      filterByTk: relatedInstance.get('id') as string,
      values: {
        uiSchema: {
          'x-uid': 'root-uid',
          title: 'new-root-title',
          name: 'new-root-name',
          properties: {
            child1: {
              title: 'new-child1-title',
            },
          },
        },
      },
    });

    const tree = await uiSchemaRepository.getJsonSchema('root-uid');

    expect(tree).toMatchObject({
      title: 'new-root-title',
      properties: {
        child1: {
          title: 'new-child1-title',
          'x-uid': child1.get('uid'),
          'x-async': false,
          'x-index': 1,
        },
      },
      name: 'new-root-name',
      'x-uid': 'root-uid',
      'x-async': false,
    });
  });
});
