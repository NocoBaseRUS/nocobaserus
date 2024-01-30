import { Application } from '../Application';
import { CollectionOptionsV2, CollectionV2 } from './Collection';
import { ISchema } from '@formily/react';
import { CollectionManagerV2 } from './CollectionManager';

interface AvailableFieldInterfacesInclude {
  include?: any[];
}

interface AvailableFieldInterfacesExclude {
  exclude?: any[];
}

interface CollectionTemplateDefaultOptions {
  /**
   * 自动生成 id
   * @default true
   * */
  autoGenId?: boolean;
  /** 创建人 */
  createdBy?: boolean;
  /** 最后更新人 */
  updatedBy?: boolean;
  /** 创建日期 */
  createdAt?: boolean;
  /** 更新日期 */
  updatedAt?: boolean;
  /** 可排序 */
  sortable?: boolean;
  /* 树结构 */
  tree?: string;
  /* 日志 */
  logging?: boolean;
  /** 继承 */
  inherits?: string | string[];
  /* 字段列表 */
  fields?: CollectionOptionsV2['fields'];
  [key: string]: any;
}

export class CollectionTemplateBase {
  app: Application;
  collectionManager: CollectionManagerV2;
  constructor(app: Application, collectionManager: CollectionManagerV2) {
    this.app = app;
    this.collectionManager = collectionManager;
  }
  name: string;
  Collection?: typeof CollectionV2;
  transform(collection: CollectionOptionsV2, app: Application): CollectionOptionsV2 {
    return collection;
  }
  title?: string;
  color?: string;
  /** 排序 */
  order?: number;
  /** 默认配置 */
  default?: CollectionTemplateDefaultOptions;
  events?: any;
  /** UI 可配置的 CollectionOptions 参数（添加或编辑的 Collection 表单的字段） */
  configurableProperties?: Record<string, ISchema>;
  /** 当前模板可用的字段类型 */
  availableFieldInterfaces?: AvailableFieldInterfacesInclude | AvailableFieldInterfacesExclude;
  /** 是否分割线 */
  divider?: boolean;
  /** 模板描述 */
  description?: string;
  /**配置字段中的操作按钮 */
  configureActions?: Record<string, ISchema>;
  //是否禁止删除字段
  forbidDeletion?: boolean;
}
