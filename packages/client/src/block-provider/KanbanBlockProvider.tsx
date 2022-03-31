import { ArrayField } from '@formily/core';
import { useField } from '@formily/react';
import { Spin } from 'antd';
import React, { createContext, useContext, useEffect } from 'react';
import { useCollection } from '../collection-manager';
import { toColumns } from '../schema-component/antd/kanban-v2/Kanban';
import { BlockProvider, useBlockRequestContext } from './BlockProvider';

export const KanbanBlockContext = createContext<any>({});

const useGroupField = (props) => {
  const { getField } = useCollection();
  const { groupField } = props;
  if (typeof groupField === 'string') {
    return getField(groupField);
  }
  if (groupField?.name) {
    return getField(groupField?.name);
  }
};

const InternalKanbanBlockProvider = (props) => {
  const field = useField();
  const { resource, service } = useBlockRequestContext();
  const groupField = useGroupField(props);
  if (!groupField) {
    return null;
  }
  if (service.loading) {
    return <Spin />;
  }
  return (
    <KanbanBlockContext.Provider
      value={{
        field,
        service,
        resource,
        groupField,
      }}
    >
      {props.children}
    </KanbanBlockContext.Provider>
  );
};

export const KanbanBlockProvider = (props) => {
  return (
    <BlockProvider {...props}>
      <InternalKanbanBlockProvider {...props} />
    </BlockProvider>
  );
};

export const useKanbanBlockContext = () => {
  return useContext(KanbanBlockContext);
};

export const useKanbanBlockProps = () => {
  const field = useField<ArrayField>();
  const ctx = useKanbanBlockContext();
  useEffect(() => {
    if (!ctx?.service?.loading) {
      field.value = toColumns(ctx.groupField, ctx?.service?.data?.data);
    }
    // field.loading = ctx?.service?.loading;
  }, [ctx?.service?.loading]);
  return {
    groupField: ctx.groupField,
    async onCardDragEnd({ columns, groupField }, { fromColumnId, fromPosition }, { toColumnId, toPosition }) {
      const sourceColumn = columns.find((column) => column.id === fromColumnId);
      const destinationColumn = columns.find((column) => column.id === toColumnId);
      const sourceCard = sourceColumn?.cards?.[fromPosition];
      const targetCard = destinationColumn?.cards?.[toPosition];
      const values = {
        sourceId: sourceCard.id,
        sortField: `${groupField.name}_sort`,
      };
      if (targetCard) {
        values['targetId'] = targetCard.id;
      } else {
        values['targetScope'] = {
          [groupField.name]: toColumnId,
        };
      }
      await ctx.resource.move(values);
    },
  };
};
