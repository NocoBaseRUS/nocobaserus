import lodash from 'lodash';
import { Collection, CollectionOptions } from '../collection';
import { Model } from '../model';

export const beforeDefineAdjacencyListCollection = (options: CollectionOptions) => {
  if (!options.tree) {
    return;
  }
  (options.fields || []).forEach((field) => {
    if (field.treeParent || field.treeChildren) {
      if (!field.target) {
        field.target = options.name;
      }
      if (!field.foreignKey) {
        field.foreignKey = 'parentId';
      }
    }
  });
};

export const afterDefineAdjacencyListCollection = (collection: Collection) => {
  if (!collection.options.tree) {
    return;
  }
  collection.model.afterFind(async (instances, options: any) => {
    if (!options.tree) {
      return;
    }
    const foreignKey = collection.treeParentField?.foreignKey ?? 'parentId';
    const childrenKey = collection.treeChildrenField?.name ?? 'children';
    const arr: Model[] = Array.isArray(instances) ? instances : [instances];
    let index = 0;
    for (const instance of arr) {
      const opts = {
        ...lodash.pick(options, ['tree', 'fields', 'appends', 'except', 'sort']),
      };
      let __index = `${index++}`;
      if (options.parentIndex) {
        __index = `${options.parentIndex}.${__index}`;
      }
      instance.setDataValue('__index', __index);
      const children = await collection.repository.find({
        filter: {
          [foreignKey]: instance.id,
        },
        transaction: options.transaction,
        ...opts,
        // @ts-ignore
        parentIndex: `${__index}.${childrenKey}`,
        context: options.context,
      });
      if (children?.length > 0) {
        instance.setDataValue(
          childrenKey,
          children.map((r) => r.toJSON()),
        );
      }
    }
  });
};
