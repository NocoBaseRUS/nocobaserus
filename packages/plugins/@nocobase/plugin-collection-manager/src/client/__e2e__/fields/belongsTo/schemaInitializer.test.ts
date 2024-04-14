import {
  expect,
  expectInitializerMenu,
  oneTableBlockWithAddNewAndViewAndEditAndAssociationFields,
  test,
} from '@nocobase/test/e2e';

test.describe('form item & create form', () => {
  test('configure fields', async ({ page, mockPage, mockRecords }) => {
    const nocoPage = await mockPage(oneTableBlockWithAddNewAndViewAndEditAndAssociationFields).waitForInit();
    await mockRecords('users', 3);
    await nocoPage.goto();

    await expectInitializerMenu({
      page,
      showMenu: async () => {
        await page.getByRole('button', { name: 'Add new' }).click();
        await page.getByLabel('schema-initializer-Grid-form:configureFields-general').hover();
      },
      supportedOptions: ['oneToMany', 'manyToOne', 'manyToMany', 'oneToOneBelongsTo', 'oneToOneHasOne'],
    });
  });
});

test.describe('form item & edit form', () => {
  test('configure fields', async ({ page, mockPage, mockRecords, mockRecord }) => {
    const nocoPage = await mockPage(oneTableBlockWithAddNewAndViewAndEditAndAssociationFields).waitForInit();
    await mockRecords('users', 3);
    const record = await mockRecord('general');
    await nocoPage.goto();

    await expectInitializerMenu({
      page,
      showMenu: async () => {
        await page.getByLabel('action-Action.Link-Edit record-update-general-table-0').click();
        await page.getByLabel('schema-initializer-Grid-form:configureFields-general').hover();
      },
      supportedOptions: ['oneToMany', 'manyToOne', 'manyToMany', 'oneToOneBelongsTo', 'oneToOneHasOne'],
      expectValue: async () => {
        await expect(
          page.getByRole('button', { name: record.oneToMany.map((item: any) => item.id).join(' ') }),
        ).toBeVisible();
        await expect(page.getByRole('button', { name: record.manyToOne.id })).toBeVisible();
        await expect(
          page.getByRole('button', { name: record.manyToMany.map((item: any) => item.id).join(' ') }),
        ).toBeVisible();
        await expect(page.getByRole('button', { name: record.oneToOneBelongsTo.id })).toBeVisible();
      },
    });
  });
});

test.describe('form item & view form', () => {
  test('configure fields', async ({ page, mockPage, mockRecord }) => {
    const nocoPage = await mockPage(oneTableBlockWithAddNewAndViewAndEditAndAssociationFields).waitForInit();
    const record = await mockRecord('general');
    await nocoPage.goto();

    await expectInitializerMenu({
      page,
      showMenu: async () => {
        await page.getByLabel('action-Action.Link-View record-view-general-table-0').click();
        await page.getByLabel('schema-initializer-Grid-details:configureFields-general').hover();
      },
      supportedOptions: ['oneToMany', 'manyToOne', 'manyToMany', 'oneToOneBelongsTo', 'oneToOneHasOne'],
      expectValue: async () => {
        await expect(page.getByText(record.oneToMany.map((item: any) => item.id).join(','))).toBeVisible();
        await expect(page.getByText(record.manyToOne.id)).toBeVisible();
        await expect(page.getByText(record.manyToMany.map((item: any) => item.id).join(','))).toBeVisible();
        await expect(page.getByText(record.oneToOneBelongsTo.id)).toBeVisible();
      },
    });
  });
});

test.describe('table column & table', () => {
  test('configure columns', async ({ page, mockPage, mockRecord }) => {
    const nocoPage = await mockPage(oneTableBlockWithAddNewAndViewAndEditAndAssociationFields).waitForInit();
    const record = await mockRecord('general');
    await nocoPage.goto();

    await expectInitializerMenu({
      page,
      showMenu: async () => {
        await page.getByLabel('schema-initializer-TableV2-').hover();
        await page.getByRole('menuitem', { name: 'oneToMany' }).first().click();
        await page.getByRole('menuitem', { name: 'manyToOne' }).first().click();
        await page.getByRole('menuitem', { name: 'manyToMany' }).first().click();
        await page.getByRole('menuitem', { name: 'oneToOneBelongsTo' }).first().click();
        await page.getByRole('menuitem', { name: 'oneToOneHasOne' }).first().click();
      },
      supportedOptions: ['oneToMany', 'manyToOne', 'manyToMany', 'oneToOneBelongsTo', 'oneToOneHasOne'],
      expectValue: async () => {
        await expect(page.getByText(record.oneToMany.map((item: any) => item.id).join(','))).toBeVisible();
        await expect(page.getByText(record.manyToOne.id)).toBeVisible();
        await expect(page.getByText(record.manyToMany.map((item: any) => item.id).join(','))).toBeVisible();
        await expect(page.getByText(record.oneToOneBelongsTo.id)).toBeVisible();
      },
    });
  });
});
