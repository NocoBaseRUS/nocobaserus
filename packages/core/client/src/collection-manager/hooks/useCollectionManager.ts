import { clone } from '@formily/shared';
import { useContext } from 'react';
import { CollectionManagerContext } from '../context';

export const useCollectionManager = () => {
  const { refreshCM, service, interfaces, collections } = useContext(CollectionManagerContext);
  const getCollectionField = (name: string) => {
    const [collectionName, fieldName] = name.split('.');
    if (!fieldName) {
      return;
    }
    const collection = collections?.find((collection) => collection.name === collectionName);
    if (!collection) {
      return;
    }
    return collection?.fields?.find((field) => field.name === fieldName);
  };
  const getParentCollections = (name) => {
    const parents = [];
    const getParents = (name) => {
      const collection = collections?.find((collection) => collection.name === name);
      if (collection) {
        const { inherits } = collection;
        if (inherits) {
          for (let index = 0; index < inherits.length; index++) {
            const collectionKey = inherits[index];
            parents.push(collectionKey);
            getParents(collectionKey);
          }
        }
      }
      return parents;
    };

    return getParents(name);
  };

  const getChildrenCollections = (name) => {
    const childrens = [];
    const getChildrens = (name) => {
      const inheritCollections = collections.filter((v) => {
        return v.inherits?.includes(name);
      });
      inheritCollections.forEach((v) => {
        const collectionKey = v.name;
        childrens.push(v);
        return getChildrens(collectionKey);
      });
      return childrens;
    };
    return getChildrens(name);
  };

  return {
    service,
    interfaces,
    collections,
    refreshCM: () => refreshCM?.(),
    get(name: string) {
      return collections?.find((collection) => collection.name === name);
    },
    getCollection(name: any) {
      if (typeof name !== 'string') {
        return name;
      }
      return collections?.find((collection) => collection.name === name);
    },
    getCollectionFields(name: string) {
      const collection = collections?.find((collection) => collection.name === name);
      return collection?.fields || [];
    },
    getCollectionField,
    getCollectionJoinField(name: string) {
      if (!name) {
        return;
      }
      const [collectionName, ...fieldNames] = name.split('.');
      if (!fieldNames?.length) {
        return;
      }
      let cName = collectionName;
      let collectionField;
      while (cName && fieldNames.length > 0) {
        const fileName = fieldNames.shift();
        collectionField = getCollectionField(`${cName}.${fileName}`);
        if (collectionField?.target) {
          cName = collectionField.target;
        } else {
          cName = null;
        }
      }
      return collectionField;
    },
    getInterface(name: string) {
      return interfaces[name] ? clone(interfaces[name]) : null;
    },
    getParentCollections,
    getChildrenCollections,
    getParentCollectionFields: (parentCollection, currentCollection) => {
      const currentFields = collections?.find((collection) => collection.name === currentCollection)?.fields;
      const parentFields = collections?.find((collection) => collection.name === parentCollection)?.fields;
      return parentFields.filter((v)=>{
        return !currentFields.find((k)=>{
          return k.name===v.name
        })
      })
    },
  };
};
