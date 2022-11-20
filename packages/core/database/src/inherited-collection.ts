import { Collection, CollectionContext, CollectionOptions } from './collection';
import { default as lodash } from 'lodash';
import { Field } from '.';

export class InheritedCollection extends Collection {
  parents?: Collection[];
  constructor(options: CollectionOptions, context: CollectionContext) {
    if (!options.inherits) {
      throw new Error('InheritedCollection must have inherits option');
    }

    options.inherits = lodash.castArray(options.inherits);

    super(options, context);

    try {
      this.bindParents();
    } catch (err) {
      if (err instanceof ParentCollectionNotFound) {
        const listener = (collection) => {
          if (options.inherits.includes(collection.name)) {
            this.bindParents();
            this.db.removeListener('afterDefineCollection', listener);
          }
        };

        this.db.addListener('afterDefineCollection', listener);
      }
    }
  }

  protected bindParents() {
    this.setParents(this.options.inherits);
    this.context.database.inheritanceMap.setInheritance(this.name, this.options.inherits);
    this.setParentFields();
  }

  protected setParents(inherits: string | string[]) {
    this.parents = lodash.castArray(inherits).map((name) => {
      const existCollection = this.context.database.collections.get(name);
      if (!existCollection) {
        throw new ParentCollectionNotFound(name);
      }

      return existCollection;
    });
  }

  protected setParentFields() {
    for (const [name, field] of this.parentFields()) {
      if (!this.hasField(name)) {
        this.setField(name, {
          ...field.options,
          inherit: true,
        });
      }
    }
  }

  getParents() {
    return this.parents;
  }

  parentFields() {
    const fields = new Map<string, Field>();
    for (const parent of this.parents) {
      if (parent.isInherited()) {
        for (const [name, field] of (<InheritedCollection>parent).parentFields()) {
          fields.set(name, field);
        }
      }

      const parentFields = parent.fields;
      for (const [name, field] of parentFields) {
        fields.set(name, field);
      }
    }
    return fields;
  }

  parentAttributes() {
    const attributes = {};
    for (const parent of this.parents) {
      if (parent.isInherited()) {
        Object.assign(attributes, (<InheritedCollection>parent).parentAttributes());
      }

      const parentAttributes = (<any>parent.model).tableAttributes;

      Object.assign(attributes, parentAttributes);
    }

    return attributes;
  }

  isInherited() {
    return true;
  }
}

class ParentCollectionNotFound extends Error {
  constructor(name: string) {
    super(`parent collection ${name} not found`);
  }
}
