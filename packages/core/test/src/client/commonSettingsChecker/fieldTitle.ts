/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { waitFor, screen } from '@testing-library/react';
import { checkSettings } from '../settingsChecker';
import { expectNoTsError } from '../utils';

export async function checkFieldTitle(oldValue?: string) {
  const newValue = 'new test';
  await checkSettings([
    {
      type: 'modal',
      title: 'Edit field title',
      modalChecker: {
        modalTitle: 'Edit field title',
        formItems: [
          {
            type: 'input',
            label: 'Field title',
            oldValue,
            newValue,
          },
        ],
        async afterSubmit() {
          await waitFor(() => {
            expectNoTsError(screen.queryByText(newValue)).toBeInTheDocument();
          });
        },
      },
    },
  ]);
}
