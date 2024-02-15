// 解决 build 报 dayjs 相关类型错误的问题
import 'dayjs/plugin/isBetween';
import 'dayjs/plugin/isSameOrAfter';
import 'dayjs/plugin/isSameOrBefore';
import 'dayjs/plugin/isoWeek';
import 'dayjs/plugin/localeData';
import 'dayjs/plugin/quarterOfYear';
import 'dayjs/plugin/utc';
import 'dayjs/plugin/weekday';

// 重置浏览器样式
import 'antd/dist/reset.css';
import './global.less';

export * from '@emotion/css';
export * from './acl';
export * from './antd-config-provider';
export * from './api-client';
export * from './appInfo';
export * from './application';
export * from './async-data-provider';
export * from './block-provider';
export * from './china-region';
export * from './collection-manager';

// export {
//   useCancelAction,
//   useCollectionFilterOptions,
//   useSortFields,
//   useLinkageCollectionFilterOptions,
//   useCollectionFieldsOptions,
//   isDeleteButtonDisabled,
// } from './collection-manager/action-hooks';
// export * from './collection-manager/CollectionField';
// export * from './collection-manager/CollectionFieldProvider';
// export * from './collection-manager/CollectionManagerProvider';
// export * from './collection-manager/CollectionHistoryProvider';
// export * from './collection-manager/CollectionManagerSchemaComponentProvider';
// export * from './collection-manager/CollectionManagerShortcut';
// export * from './collection-manager/CollectionProvider';
// export * from './collection-manager/Configuration';
// export { useFieldInterfaceOptions } from './collection-manager/Configuration/interfaces';
// export * from './collection-manager/context';
// export * from './collection-manager/hooks';
// export * as interfacesProperties from './collection-manager/interfaces/properties';
// export * from './collection-manager/interfaces/types';
// export * from './collection-manager/ResourceActionProvider';
// export { getConfigurableProperties } from './collection-manager/templates/properties';
// export * from './collection-manager/templates/types';
// export * from './collection-manager/types';
// export * from './collection-manager/mixins/InheritanceCollectionMixin';
// export * from './collection-manager/sub-table';

export * from './common';
export * from './css-variable';
export * from './document-title';
export * from './filter-provider';
export * from './flag-provider';
export * from './formula';
export * from './global-theme';
export * from './hooks';
export * from './i18n';
export * from './icon';
export { default as locale } from './locale';
export * from './nocobase-buildin-plugin';
export * from './plugin-manager';
export * from './pm';
export * from './powered-by';
export * from './record-provider';
export * from './route-switch';
export * from './schema-component';
export * from './schema-initializer';
export * from './schema-items';
export * from './schema-settings';
export * from './schema-templates';
export * from './style';
export * from './system-settings';
export * from './testUtils';
export * from './user';
export * from './variables';
export * from './data-source';
