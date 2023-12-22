import {
  Page,
  expect,
  expectSettingsMenu,
  oneTableBlockWithAddNewAndViewAndEditAndMediaFields,
  test,
} from '@nocobase/test/client';
import { createColumnItem, showSettingsMenu, testDefaultValue, testPattern, testSetValidationRules } from '../utils';

test.describe('form item & create form', () => {
  test('supported options', async ({ page, mockPage }) => {
    const nocoPage = await mockPage(oneTableBlockWithAddNewAndViewAndEditAndMediaFields).waitForInit();
    await nocoPage.goto();

    await expectSettingsMenu({
      page,
      showMenu: async () => {
        await page.getByRole('button', { name: 'Add new' }).click();
        await page.getByLabel(`block-item-CollectionField-general-form-general.richText-richText`).hover();
        await page
          .getByLabel(`designer-schema-settings-CollectionField-FormItem.Designer-general-general.richText`)
          .hover();
      },
      supportedOptions: [
        'Edit field title',
        'Display title',
        'Edit description',
        'Required',
        'Set default value',
        'Pattern',
        'Delete',
        'Set validation rules',
      ],
    });
  });

  test('set default value', async ({ page, mockPage, mockRecord }) => {
    await testDefaultValue({
      page,
      gotoPage: async () => {
        await mockPage(oneTableBlockWithAddNewAndViewAndEditAndMediaFields).goto();
      },
      openDialog: async () => {
        await page.getByRole('button', { name: 'Add new' }).click();
      },
      closeDialog: () => page.getByLabel('drawer-Action.Container-general-Add record-mask').click(),
      showMenu: async () => {
        await page
          .getByLabel(`block-item-CollectionField-general-form-general.'richText'-'richText'`, { exact: true })
          .hover();
        await page
          .getByLabel(`designer-schema-settings-CollectionField-FormItem.Designer-general-general.'richText'`, {
            exact: true,
          })
          .hover();
      },
      supportVariables: ['Constant', 'Current user', 'Date variables', 'Current form'],
      inputConstantValue: async () => {
        await page.getByLabel('block-item-CollectionField-general-general.richText').locator('.ql-editor').click();
        await page.keyboard.type('test rich text');
      },
      expectConstantValue: async () => {
        await expect(page.getByLabel('block-item-CollectionField-general-form-general.richText-richText')).toHaveText(
          /test rich text/,
        );
      },
    });
  });

  test('pattern', async ({ page, mockPage, mockRecord }) => {
    await testPattern({
      page,
      gotoPage: async () => {
        await mockPage(oneTableBlockWithAddNewAndViewAndEditAndMediaFields).goto();
      },
      openDialog: async () => {
        await page.getByRole('button', { name: 'Add new' }).click();
      },
      showMenu: async () => {
        await page
          .getByLabel(`block-item-CollectionField-general-form-general.'richText'-'richText'`, { exact: true })
          .hover();
        await page
          .getByLabel(`designer-schema-settings-CollectionField-FormItem.Designer-general-general.'richText'`, {
            exact: true,
          })
          .hover();
      },
      expectEditable: async () => {
        await page
          .getByLabel('block-item-CollectionField-general-form-general.richText-richText')
          .locator('.ql-editor')
          .click();
        await page.keyboard.type('test rich text pattern');
      },
      expectReadonly: async () => {
        await expect(
          page.getByLabel('block-item-CollectionField-general-form-general.richText-richText').locator('.ql-container'),
        ).toHaveClass(/ql-disabled/);
      },
      expectEasyReading: async () => {
        await expect(
          page.getByLabel('block-item-CollectionField-general-form-general.richText-richText').locator('.ql-container'),
        ).not.toBeVisible();
        await expect(page.getByLabel('block-item-CollectionField-general-form-general.richText-richText')).toHaveText(
          /test rich text pattern/,
        );
      },
    });
  });

  test('Set validation rules', async ({ page, mockPage }) => {
    await testSetValidationRules({
      page,
      gotoPage: async () => {
        await mockPage(oneTableBlockWithAddNewAndViewAndEditAndMediaFields).goto();
      },
      openDialog: async () => {
        await page.getByRole('button', { name: 'Add new' }).click();
      },
      showMenu: async () => {
        await page
          .getByLabel(`block-item-CollectionField-general-form-general.'markdown'-'markdown'`, { exact: true })
          .hover();
        await page
          .getByLabel(`designer-schema-settings-CollectionField-FormItem.Designer-general-general.'markdown'`, {
            exact: true,
          })
          .hover();
      },
    });
  });
});

test.describe('form item & edit form', () => {
  test('supported options', async ({ page, mockPage, mockRecord }) => {
    const nocoPage = await mockPage(oneTableBlockWithAddNewAndViewAndEditAndMediaFields).waitForInit();
    await mockRecord('general');
    await nocoPage.goto();
    await page.getByLabel('action-Action.Link-Edit record-update-general-table-0').click();
    await page.getByLabel(`block-item-CollectionField-general-form-general.richText-richText`, { exact: true }).hover();
    await page
      .getByLabel(`designer-schema-settings-CollectionField-FormItem.Designer-general-general.richText`, {
        exact: true,
      })
      .hover();

    await expectSettingsMenu({
      page,
      showMenu: async () => {},
      supportedOptions: [
        'Edit field title',
        'Display title',
        'Edit description',
        'Required',
        'Set validation rules',
        'Pattern',
        'Delete',
      ],
      unsupportedOptions: ['Set default value'],
    });
  });

  test('pattern', async ({ page, mockPage, mockRecord }) => {
    let record = null;
    await testPattern({
      page,
      gotoPage: async () => {
        record = await (async (mockPage, mockRecord) => {
          const nocoPage = await mockPage(oneTableBlockWithAddNewAndViewAndEditAndMediaFields).waitForInit();
          const record = await mockRecord('general');
          await nocoPage.goto();

          return record;
        })(mockPage, mockRecord);
      },
      openDialog: () =>
        (async (page: Page) => {
          await page.getByLabel('action-Action.Link-Edit record-update-general-table-0').click();
        })(page),
      showMenu: () =>
        (async (page: Page, fieldName: string) => {
          await page
            .getByLabel(`block-item-CollectionField-general-form-general.${fieldName}-${fieldName}`, { exact: true })
            .hover();
          await page
            .getByLabel(`designer-schema-settings-CollectionField-FormItem.Designer-general-general.${fieldName}`, {
              exact: true,
            })
            .hover();
        })(page, 'richText'),
      expectEditable: async () => {
        await expect(
          page.getByLabel('block-item-CollectionField-general-form-general.richText-richText').locator('.ql-editor'),
        ).toHaveText(record.richText);
      },
      expectReadonly: async () => {
        await expect(
          page.getByLabel('block-item-CollectionField-general-form-general.richText-richText').locator('.ql-container'),
        ).toHaveClass(/ql-disabled/);
      },
      expectEasyReading: async () => {
        await expect(
          page.getByLabel('block-item-CollectionField-general-form-general.richText-richText').locator('.ql-container'),
        ).not.toBeVisible();
        await expect(page.getByLabel('block-item-CollectionField-general-form-general.richText-richText')).toHaveText(
          `richText:${record.richText}`,
        );
      },
    });
  });

  test('Set validation rules', async ({ page, mockPage, mockRecord }) => {
    await testSetValidationRules({
      page,
      gotoPage: () =>
        (async (mockPage, mockRecord) => {
          const nocoPage = await mockPage(oneTableBlockWithAddNewAndViewAndEditAndMediaFields).waitForInit();
          const record = await mockRecord('general');
          await nocoPage.goto();

          return record;
        })(mockPage, mockRecord),
      openDialog: () =>
        (async (page: Page) => {
          await page.getByLabel('action-Action.Link-Edit record-update-general-table-0').click();
        })(page),
      showMenu: () =>
        (async (page: Page, fieldName: string) => {
          await page
            .getByLabel(`block-item-CollectionField-general-form-general.${fieldName}-${fieldName}`, { exact: true })
            .hover();
          await page
            .getByLabel(`designer-schema-settings-CollectionField-FormItem.Designer-general-general.${fieldName}`, {
              exact: true,
            })
            .hover();
        })(page, 'markdown'),
    });
  });
});

test.describe('form item & view form', () => {
  test('supported options', async ({ page, mockPage, mockRecord }) => {
    const nocoPage = await mockPage(oneTableBlockWithAddNewAndViewAndEditAndMediaFields).waitForInit();
    await mockRecord('general');
    await nocoPage.goto();

    await expectSettingsMenu({
      page,
      showMenu: async () => {
        await page.getByLabel('action-Action.Link-View record-view-general-table-0').click();
        await page.getByLabel(`block-item-CollectionField-general-form-general.richText-richText`).hover();
        await page
          .getByLabel(`designer-schema-settings-CollectionField-FormItem.Designer-general-general.richText`)
          .hover();
      },
      supportedOptions: ['Edit field title', 'Display title', 'Delete', 'Edit tooltip'],
      unsupportedOptions: ['Set default value'],
    });
  });
});

test.describe('form item & filter form', () => {
  test('supported options', async ({ page }) => {});
});

test.describe('table column & table', () => {
  test('supported options', async ({ page, mockPage, mockRecord }) => {
    const nocoPage = await mockPage(oneTableBlockWithAddNewAndViewAndEditAndMediaFields).waitForInit();
    await mockRecord('general');
    await nocoPage.goto();

    await expectSettingsMenu({
      page,
      showMenu: async () => {
        await createColumnItem(page, 'richText');
        await showSettingsMenu(page, 'richText');
      },
      supportedOptions: ['Custom column title', 'Column width', 'Delete'],
    });
  });
});

test.describe('table column & table & record picker', () => {
  test('supported options', async ({ page }) => {});
});

test.describe('table column & table & Relationship block', () => {
  test('supported options', async ({ page }) => {});
});

test.describe('table column & sub table & create from', () => {
  test('supported options', async ({ page }) => {});
});

test.describe('table column & sub table & edit from', () => {
  test('supported options', async ({ page }) => {});
});

test.describe('table column & sub table & view from', () => {
  test('supported options', async ({ page }) => {});
});
