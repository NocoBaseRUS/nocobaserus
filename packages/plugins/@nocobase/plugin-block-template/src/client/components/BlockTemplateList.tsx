/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import {
  ExtendCollectionsProvider,
  SchemaComponent,
  SchemaComponentContext,
  useSchemaComponentContext,
} from '@nocobase/client';
import React from 'react';
import { blockTemplatesCollection } from '../collections/blockTemplates';
import { blockTemplatesSchema } from '../schemas/blockTemplates';
import {
  useDuplicateAction,
  useCreateActionProps,
  useEditActionProps,
  useEditFormProps,
  useDeleteAction,
  useBulkDestroyAction,
} from '../hooks';

export const BlockTemplateList = () => {
  const scCtx = useSchemaComponentContext();
  return (
    <ExtendCollectionsProvider collections={[blockTemplatesCollection]}>
      <SchemaComponentContext.Provider value={{ ...scCtx, designable: false }}>
        <SchemaComponent
          schema={blockTemplatesSchema}
          scope={{
            useCreateActionProps,
            useEditActionProps,
            useEditFormProps,
            useDeleteAction,
            useDuplicateAction,
            useBulkDestroyAction,
          }}
        />
      </SchemaComponentContext.Provider>
    </ExtendCollectionsProvider>
  );
};
