/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { expect, test } from '@nocobase/test/e2e';
import { pageTabRouting } from './templatesOfBug';

test.describe('router', () => {
  test('page tabs', async ({ page, mockPage }) => {
    const nocoPage = await mockPage(pageTabRouting).waitForInit();
    const pageUrl = await nocoPage.getUrl();

    // 1. 旧版的 URL
    await page.goto(`${pageUrl}/?tab=bbch3c9b5jl`);
    await expect(page.getByText('This is tab2.')).toBeVisible();

    // 2. 点击 tab1 应该跳转到 tab1，并使用新版 URL
    await page.getByText('tab1').click();
    await expect(page.getByText('This is tab1.')).toBeVisible();
    expect(page.url()).toMatch(new RegExp(`${pageUrl}/tabs/u4earq3d9go`));

    // 3. 点击 tab2 应该跳转到 tab2，并使用新版 URL
    await page.getByText('tab2').click();
    await expect(page.getByText('This is tab2.')).toBeVisible();
    expect(page.url()).toMatch(new RegExp(`${pageUrl}/tabs/bbch3c9b5jl`));

    // 4. 使用不带 tab 参数的 URL，应该默认显示第一个 tab
    await nocoPage.goto();
    await expect(page.getByText('This is tab1.')).toBeVisible();
    expect(page.url()).toMatch(new RegExp(pageUrl));
  });
});
