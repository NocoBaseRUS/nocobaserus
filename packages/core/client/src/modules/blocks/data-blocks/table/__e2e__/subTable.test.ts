/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { expect, test } from '@nocobase/test/e2e';
import { subTableDefaultValue } from './templatesOfBug';

test.describe('subTable', () => {
  test('defaultValue', async ({ page, mockPage }) => {
    // Default values have been set as:
    // staff: {{ $user }}
    // timeStart: 2024-11-07
    // timeEnd: {{ $iteration.timeStart }}
    await mockPage(subTableDefaultValue).goto();

    // 1. Click "Add new" to add a row, default values should display correctly
    await page.getByRole('button', { name: 'Add new' }).click();
    await expect(page.getByTestId('select-object-single').getByText('Super Admin')).toBeVisible();
    await expect(
      page
        .getByLabel('block-item-CollectionField-t_vswtj086si6-form-t_vswtj086si6.f_nxw8fjft5kd-')
        .getByPlaceholder('Select date'),
    ).toHaveValue('2024-11-07');
    await expect(
      page
        .getByLabel('block-item-CollectionField-t_vswtj086si6-form-t_vswtj086si6.f_wqnkacbz92p-')
        .getByPlaceholder('Select date'),
    ).toHaveValue('2024-11-07');

    // 2. Click "Add new" again to add another row, default values should display correctly
    await page.getByRole('button', { name: 'Add new' }).click();
    await expect(page.getByTestId('select-object-single').getByText('Super Admin').nth(1)).toBeVisible();
    await expect(
      page
        .getByLabel('block-item-CollectionField-t_vswtj086si6-form-t_vswtj086si6.f_nxw8fjft5kd-')
        .nth(1)
        .getByPlaceholder('Select date'),
    ).toHaveValue('2024-11-07');
    await expect(
      page
        .getByLabel('block-item-CollectionField-t_vswtj086si6-form-t_vswtj086si6.f_wqnkacbz92p-')
        .nth(1)
        .getByPlaceholder('Select date'),
    ).toHaveValue('2024-11-07');

    // 3. After modifying timeStart in both first and second rows, their corresponding timeEnd should stay synchronized
    await page.getByPlaceholder('Select date').first().click();
    await page.getByRole('cell', { name: '8', exact: true }).click();
    await page.getByPlaceholder('Select date').nth(2).click();
    await page.getByRole('cell', { name: '8', exact: true }).click();

    // First row
    await expect(
      page
        .getByLabel('block-item-CollectionField-t_vswtj086si6-form-t_vswtj086si6.f_nxw8fjft5kd-')
        .nth(0)
        .getByPlaceholder('Select date'),
    ).toHaveValue('2024-11-08');
    await expect(
      page
        .getByLabel('block-item-CollectionField-t_vswtj086si6-form-t_vswtj086si6.f_wqnkacbz92p-')
        .nth(0)
        .getByPlaceholder('Select date'),
    ).toHaveValue('2024-11-08');
    await expect(page.getByTestId('select-object-single').getByText('Super Admin').nth(0)).toBeVisible();

    // Second row
    await expect(
      page
        .getByLabel('block-item-CollectionField-t_vswtj086si6-form-t_vswtj086si6.f_nxw8fjft5kd-')
        .nth(1)
        .getByPlaceholder('Select date'),
    ).toHaveValue('2024-11-08');
    await expect(
      page
        .getByLabel('block-item-CollectionField-t_vswtj086si6-form-t_vswtj086si6.f_wqnkacbz92p-')
        .nth(1)
        .getByPlaceholder('Select date'),
    ).toHaveValue('2024-11-08');
    await expect(page.getByTestId('select-object-single').getByText('Super Admin').nth(1)).toBeVisible();
  });
});
