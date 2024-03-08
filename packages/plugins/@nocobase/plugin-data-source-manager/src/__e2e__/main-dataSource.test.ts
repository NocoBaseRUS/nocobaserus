import { expect, test } from '@nocobase/test/e2e';
import { uid } from '@nocobase/utils';

test('initializing main data source by default', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('plugin-settings-button').click();
  await page.getByRole('link', { name: 'Data sources' }).click();
  await expect(page.getByText('main', { exact: true })).toBeVisible();
});

//预设字段
test.describe('create collection with preset fields', () => {
  test('all preset fields by default', async ({ page }) => {
    await page.goto('/admin/settings/data-source-manager/list');
    await page.getByRole('button', { name: 'Configure' }).click();
    await page.getByRole('button', { name: 'plus Create collection down' }).click();
    await page.getByRole('menuitem', { name: 'General collection' }).locator('span').click();
    await page.getByLabel('block-item-Input-collections-Collection display name').getByRole('textbox').click();
    await page.getByLabel('block-item-Input-collections-Collection display name').getByRole('textbox').fill(uid());
    //断言提交的data是否符合预期
    const [request] = await Promise.all([
      page.waitForRequest((request) => request.url().includes('api/collections:create')),
      page.getByLabel('action-Action-Submit').click(),
    ]);
    const postData = request.postDataJSON();
    //默认提交的数据符合预期
    expect(postData).toMatchObject({
      autoGenId: true,
      createdAt: true,
      createdBy: true,
      updatedAt: true,
      updatedBy: true,
      fields: expect.arrayContaining([
        expect.objectContaining({
          name: 'id',
          type: 'bigInt',
          // 其他属性
        }),
        expect.objectContaining({
          name: 'createdAt',
          type: 'date',
          // 其他属性
        }),
        expect.objectContaining({
          name: 'createdBy',
          type: 'belongsTo',
          // 其他属性
        }),
        expect.objectContaining({
          name: 'updatedBy',
          type: 'belongsTo',
          // 其他属性
        }),
        expect.objectContaining({
          name: 'updatedAt',
          type: 'date',
          // 其他属性
        }),
      ]),
    });
  });

  test('id preset field', async ({ page }) => {
    await page.goto('/admin/settings/data-source-manager/list');
    await page.getByRole('button', { name: 'Configure' }).click();
    await page.getByRole('button', { name: 'plus Create collection down' }).click();
    await page.getByRole('menuitem', { name: 'General collection' }).locator('span').click();
    await page.getByLabel('block-item-Input-collections-Collection display name').getByRole('textbox').click();
    await page.getByLabel('block-item-Input-collections-Collection display name').getByRole('textbox').fill(uid());
    await page.getByLabel('block-item-collections-Preset').getByLabel('Select all').uncheck();
    await page.getByRole('row', { name: 'ID Integer Primary key' }).locator('.ant-checkbox-input').check();
    //断言提交的data是否符合预期
    const [request] = await Promise.all([
      page.waitForRequest((request) => request.url().includes('api/collections:create')),
      page.getByLabel('action-Action-Submit').click(),
    ]);
    const postData = request.postDataJSON();
    //提交的数据符合预期
    expect(postData).toMatchObject({
      autoGenId: true,
      createdAt: false,
      createdBy: false,
      updatedAt: false,
      updatedBy: false,
      fields: expect.arrayContaining([
        expect.objectContaining({
          name: 'id',
          type: 'bigInt',
          // 其他属性
        }),
      ]),
    });
  });
  test('createdAt preset field', async ({ page }) => {
    await page.goto('/admin/settings/data-source-manager/list');
    await page.getByRole('button', { name: 'Configure' }).click();
    await page.getByRole('button', { name: 'plus Create collection down' }).click();
    await page.getByRole('menuitem', { name: 'General collection' }).locator('span').click();
    await page.getByLabel('block-item-Input-collections-Collection display name').getByRole('textbox').click();
    await page.getByLabel('block-item-Input-collections-Collection display name').getByRole('textbox').fill(uid());
    await page.getByLabel('block-item-collections-Preset').getByLabel('Select all').uncheck();
    await page.getByRole('row', { name: 'Created at' }).locator('.ant-checkbox-input').check();
    //断言提交的data是否符合预期
    const [request] = await Promise.all([
      page.waitForRequest((request) => request.url().includes('api/collections:create')),
      page.getByLabel('action-Action-Submit').click(),
    ]);
    const postData = request.postDataJSON();
    //提交的数据符合预期
    expect(postData).toMatchObject({
      autoGenId: false,
      createdAt: true,
      createdBy: false,
      updatedAt: false,
      updatedBy: false,
      fields: expect.arrayContaining([
        expect.objectContaining({
          name: 'createdAt',
          type: 'date',
          // 其他属性
        }),
      ]),
    });
  });
  test('createdBy preset field', async ({ page }) => {
    await page.goto('/admin/settings/data-source-manager/list');
    await page.getByRole('button', { name: 'Configure' }).click();
    await page.getByRole('button', { name: 'plus Create collection down' }).click();
    await page.getByRole('menuitem', { name: 'General collection' }).locator('span').click();
    await page.getByLabel('block-item-Input-collections-Collection display name').getByRole('textbox').click();
    await page.getByLabel('block-item-Input-collections-Collection display name').getByRole('textbox').fill(uid());
    await page.getByLabel('block-item-collections-Preset').getByLabel('Select all').uncheck();
    await page.getByRole('row', { name: 'created By' }).locator('.ant-checkbox-input').check();
    //断言提交的data是否符合预期
    const [request] = await Promise.all([
      page.waitForRequest((request) => request.url().includes('api/collections:create')),
      page.getByLabel('action-Action-Submit').click(),
    ]);
    const postData = request.postDataJSON();
    //提交的数据符合预期
    expect(postData).toMatchObject({
      autoGenId: false,
      createdAt: false,
      createdBy: true,
      updatedAt: false,
      updatedBy: false,
      fields: expect.arrayContaining([
        expect.objectContaining({
          name: 'createdBy',
          type: 'belongsTo',
          // 其他属性
        }),
      ]),
    });
  });
  test('updatedBy preset field', async ({ page }) => {
    await page.goto('/admin/settings/data-source-manager/list');
    await page.getByRole('button', { name: 'Configure' }).click();
    await page.getByRole('button', { name: 'plus Create collection down' }).click();
    await page.getByRole('menuitem', { name: 'General collection' }).locator('span').click();
    await page.getByLabel('block-item-Input-collections-Collection display name').getByRole('textbox').click();
    await page.getByLabel('block-item-Input-collections-Collection display name').getByRole('textbox').fill(uid());
    await page.getByLabel('block-item-collections-Preset').getByLabel('Select all').uncheck();
    await page.getByRole('row', { name: 'Last updated by' }).locator('.ant-checkbox-input').check();
    //添加关系字段,断言提交的data是否符合预期
    const [request] = await Promise.all([
      page.waitForRequest((request) => request.url().includes('api/collections:create')),
      page.getByLabel('action-Action-Submit').click(),
    ]);
    const postData = request.postDataJSON();
    //提交的数据符合预期
    expect(postData).toMatchObject({
      autoGenId: false,
      createdAt: false,
      createdBy: false,
      updatedAt: false,
      updatedBy: true,
      fields: expect.arrayContaining([
        expect.objectContaining({
          name: 'updatedBy',
          type: 'belongsTo',
          // 其他属性
        }),
      ]),
    });
  });
  test('updatedAt preset field', async ({ page }) => {
    await page.goto('/admin/settings/data-source-manager/list');
    await page.getByRole('button', { name: 'Configure' }).click();
    await page.getByRole('button', { name: 'plus Create collection down' }).click();
    await page.getByRole('menuitem', { name: 'General collection' }).locator('span').click();
    await page.getByLabel('block-item-Input-collections-Collection display name').getByRole('textbox').click();
    await page.getByLabel('block-item-Input-collections-Collection display name').getByRole('textbox').fill(uid());
    await page.getByLabel('block-item-collections-Preset').getByLabel('Select all').uncheck();
    await page.getByRole('row', { name: 'Last updated at' }).locator('.ant-checkbox-input').check();
    //添加关系字段,断言提交的data是否符合预期
    const [request] = await Promise.all([
      page.waitForRequest((request) => request.url().includes('api/collections:create')),
      page.getByLabel('action-Action-Submit').click(),
    ]);
    const postData = request.postDataJSON();
    //提交的数据符合预期
    expect(postData).toMatchObject({
      autoGenId: false,
      createdAt: false,
      createdBy: false,
      updatedAt: true,
      updatedBy: false,
      fields: expect.arrayContaining([
        expect.objectContaining({
          name: 'updatedAt',
          type: 'date',
          // 其他属性
        }),
      ]),
    });
  });
  test('unselect preset fields', async ({ page }) => {
    await page.goto('/admin/settings/data-source-manager/list');
    await page.getByRole('button', { name: 'Configure' }).click();
    await page.getByRole('button', { name: 'plus Create collection down' }).click();
    await page.getByRole('menuitem', { name: 'General collection' }).locator('span').click();
    await page.getByLabel('block-item-Input-collections-Collection display name').getByRole('textbox').click();
    await page.getByLabel('block-item-Input-collections-Collection display name').getByRole('textbox').fill(uid());
    await page.getByLabel('block-item-collections-Preset').getByLabel('Select all').uncheck();
    //断言提交的data是否符合预期
    const [request] = await Promise.all([
      page.waitForRequest((request) => request.url().includes('api/collections:create')),
      page.getByLabel('action-Action-Submit').click(),
    ]);
    const postData = request.postDataJSON();
    //提交的数据符合预期
    expect(postData).toMatchObject({
      autoGenId: false,
      createdAt: false,
      createdBy: false,
      updatedAt: false,
      updatedBy: false,
      fields: [],
    });
  });
});

//创建非Id为主键
test.describe('create a primary key other than ID.', () => {
  test('integer field as primary key', async ({ page, mockCollection }) => {
    await page.goto('/admin/settings/data-source-manager/list');
    await page.getByRole('button', { name: 'Configure' }).click();
    await mockCollection({
      name: 'general',
      autoGenId: false,
      fields: [],
    });
    await page.getByLabel('action-Filter.Action-Filter-').click();
    await page.getByRole('textbox').nth(1).click();
    await page.getByRole('textbox').nth(1).fill('general');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByLabel('action-Action.Link-Configure fields-collections-general').click();
    await page.getByRole('button', { name: 'plus Add field' }).click();
    await page.getByRole('menuitem', { name: 'Integer' }).click();
    await page.getByLabel('block-item-Input-fields-Field display name').getByRole('textbox').click();
    await page.getByLabel('block-item-Input-fields-Field display name').getByRole('textbox').fill(uid());
    await page.getByLabel('Primary').check();
    //断言提交的data是否符合预期
    const [request] = await Promise.all([
      page.waitForRequest((request) => request.url().includes('/fields:create')),
      page.getByLabel('action-Action-Submit-fields-').click(),
    ]);
    const postData = request.postDataJSON();
    //提交的数据符合预期
    expect(postData).toMatchObject({
      unique: false,
      interface: 'integer',
      primaryKey: true,
      type: 'bigInt',
    });
  });
  test('integer field set unique index', async ({ page, mockCollection }) => {
    await page.goto('/admin/settings/data-source-manager/list');
    await page.getByRole('button', { name: 'Configure' }).click();
    await mockCollection({
      name: 'general',
      autoGenId: false,
      fields: [],
    });
    await page.getByLabel('action-Filter.Action-Filter-').click();
    await page.getByRole('textbox').nth(1).click();
    await page.getByRole('textbox').nth(1).fill('general');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByLabel('action-Action.Link-Configure fields-collections-general').click();
    await page.getByRole('button', { name: 'plus Add field' }).click();
    await page.getByRole('menuitem', { name: 'Integer' }).click();
    await page.getByLabel('block-item-Input-fields-Field display name').getByRole('textbox').click();
    await page.getByLabel('block-item-Input-fields-Field display name').getByRole('textbox').fill(uid());
    // Primary 和 Unique选中一个，其中一个自动取消勾选
    await page.getByLabel('Primary').check();
    await page.getByLabel('Unique').check();
    //断言提交的data是否符合预期
    const [request] = await Promise.all([
      page.waitForRequest((request) => request.url().includes('/fields:create')),
      page.getByLabel('action-Action-Submit-fields-').click(),
    ]);
    const postData = request.postDataJSON();
    //提交的数据符合预期
    expect(postData).toMatchObject({
      unique: true,
      interface: 'integer',
      primaryKey: false,
      type: 'bigInt',
    });
  });
  test('input(string) field set unique index', async ({ page, mockCollection }) => {
    await page.goto('/admin/settings/data-source-manager/list');
    await page.getByRole('button', { name: 'Configure' }).click();
    await mockCollection({
      name: 'general',
      autoGenId: false,
      fields: [],
    });
    await page.getByLabel('action-Filter.Action-Filter-').click();
    await page.getByRole('textbox').nth(1).click();
    await page.getByRole('textbox').nth(1).fill('general');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByLabel('action-Action.Link-Configure fields-collections-general').click();
    await page.getByRole('button', { name: 'plus Add field' }).click();
    await page.getByRole('menuitem', { name: 'Single line text' }).click();
    await page.getByLabel('block-item-Input-fields-Field display name').getByRole('textbox').click();
    await page.getByLabel('block-item-Input-fields-Field display name').getByRole('textbox').fill(uid());
    // Primary 和 Unique选中一个，其中一个自动取消勾选
    await page.getByLabel('Primary').check();
    await page.getByLabel('Unique').check();
    //断言提交的data是否符合预期
    const [request] = await Promise.all([
      page.waitForRequest((request) => request.url().includes('/fields:create')),
      page.getByLabel('action-Action-Submit-fields-').click(),
    ]);
    const postData = request.postDataJSON();
    //提交的数据符合预期
    expect(postData).toMatchObject({
      unique: true,
      interface: 'input',
      primaryKey: false,
      type: 'string',
    });
  });
  test('input(string) field set as primary key', async ({ page, mockCollection }) => {
    await page.goto('/admin/settings/data-source-manager/list');
    await page.getByRole('button', { name: 'Configure' }).click();
    await mockCollection({
      name: 'general',
      autoGenId: false,
      fields: [],
    });
    await page.getByLabel('action-Filter.Action-Filter-').click();
    await page.getByRole('textbox').nth(1).click();
    await page.getByRole('textbox').nth(1).fill('general');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByLabel('action-Action.Link-Configure fields-collections-general').click();
    await page.getByRole('button', { name: 'plus Add field' }).click();
    await page.getByRole('menuitem', { name: 'Single line text' }).click();
    await page.getByLabel('block-item-Input-fields-Field display name').getByRole('textbox').click();
    await page.getByLabel('block-item-Input-fields-Field display name').getByRole('textbox').fill(uid());
    // Primary 和 Unique选中一个，其中一个自动取消勾选
    await page.getByLabel('Unique').check();
    await page.getByLabel('Primary').check();
    //断言提交的data是否符合预期
    const [request] = await Promise.all([
      page.waitForRequest((request) => request.url().includes('/fields:create')),
      page.getByLabel('action-Action-Submit-fields-').click(),
    ]);
    const postData = request.postDataJSON();
    //提交的数据符合预期
    expect(postData).toMatchObject({
      unique: false,
      interface: 'input',
      primaryKey: true,
      type: 'string',
    });
  });
});
