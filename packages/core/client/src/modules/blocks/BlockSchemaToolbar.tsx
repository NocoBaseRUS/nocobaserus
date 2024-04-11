import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useCollectionManager, useDataBlockProps } from '../../data-source';
import { useCollection } from '../../data-source/collection/CollectionProvider';
import { SchemaToolbar } from '../../schema-settings/GeneralSchemaDesigner';
import { useSchemaTemplate } from '../../schema-templates';

export const BlockSchemaToolbar = (props) => {
  const { t } = useTranslation();
  const cm = useCollectionManager();
  const { name, title } = useCollection();
  const template = useSchemaTemplate();
  const { association } = useDataBlockProps();
  const associationField = cm.getCollectionField(association);
  const templateName = ['FormItem', 'ReadPrettyFormItem'].includes(template?.componentName)
    ? `${template?.name} ${t('(Fields only)')}`
    : template?.name;
  const toolbarTitle = useMemo(() => {
    return [
      getCollectionTitle({ collectionTitle: title, collectionName: name, associationField }),
      templateName,
    ].filter(Boolean);
  }, [associationField, name, templateName, title]);

  return <SchemaToolbar title={toolbarTitle} {...props} />;
};

function getCollectionTitle(arg0: { collectionTitle: string; collectionName: string; associationField: any }) {
  const { collectionTitle, collectionName, associationField } = arg0;

  if (associationField) {
    return `${collectionTitle || collectionName} > ${associationField.uiSchema?.title || associationField.name}`;
  }

  return collectionTitle || collectionName;
}
