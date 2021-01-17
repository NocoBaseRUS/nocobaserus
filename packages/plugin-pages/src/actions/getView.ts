import { Model, ModelCtor, BELONGSTOMANY } from '@nocobase/database';
import { get, set } from 'lodash';
import { Op } from 'sequelize';

const transforms = {
  table: async (fields: Model[], context?: any) => {
    const arr = [];
    for (const field of fields) {
      if (!field.get('component.showInTable')) {
        continue;
      }
      arr.push({
        ...field.get(),
        sorter: field.get('sortable'),
        dataIndex: field.name.split('.'),
      });
    }
    return arr;
  },
  form: async (fields: Model[], ctx?: any) => {
    const [Field] = ctx.db.getModels(['fields']) as ModelCtor<Model>[];
    const mode = get(ctx.action.params, ['values', 'mode'], ctx.action.params.mode);
    const schema = {};
    for (const field of fields) {
      if (!field.get('component.showInForm')) {
        continue;
      }
      const interfaceType = field.get('interface');
      const type = field.get('component.type') || 'string';
      const prop: any = {
        type,
        title: field.title||field.name,
        ...(field.component||{}),
      }
      if (field.get('name') === 'interface' && ctx.state.developerMode === false) {
        const dataSource = field.get('dataSource').filter(item => item.key !== 'developerMode');
        field.set('dataSource', dataSource);
      }
      if (field.get('component.type') === 'filter') {
        const { values } = ctx.action.params;
        const options = Field.parseApiJson(ctx.state.developerMode ? {
          filter: {
            collection_name: get(values, 'associatedKey'),
          },
          sort: 'sort',
        } : {
          filter: {
            collection_name: get(values, 'associatedKey'),
            developerMode: {'$isFalsy': true},
          },
          sort: 'sort',
        });
        const all = await Field.findAll(options);
        set(prop, 'x-component-props.fields', all.filter(f => f.get('filterable')));
      }
      if (type === 'select') {
        prop.type = 'string'
      }
      if (field.get('component.tooltip')) {
        prop.description = `{{html('${field.get('component.tooltip')}')}}`;
      }
      if (field.get('name') === 'dataSource') {
        
        set(prop, 'x-component-props.operationsWidth', 'auto');
        set(prop, 'x-component-props.bordered', true);
        set(prop, 'x-component-props.className', 'data-source-table');
        const properties = {};
        if (ctx.state.developerMode) {
          Object.assign(properties, {
            value: {
              type: "string",
              title: "值",
              // required: true,
              'x-component-props': {
                bordered: false,
              },
            },
          });
        }
        Object.assign(properties, {
          label: {
            type: "string",
            title: "选项",
            required: true,
            'x-component-props': {
              bordered: false,
            },
          },
          color: {
            type: "colorSelect",
            title: "颜色",
            'x-component-props': {
              bordered: false,
            },
          },
        });
        set(prop, 'items.properties', properties);
      }
      if (['number', 'percent'].includes(interfaceType) && field.get('precision')) {
        set(prop, 'x-component-props.step', field.get('precision'));
      }
      if (field.get('required')) {
        prop.required = true;
      }
      if (mode === 'update' && field.get('createOnly')) {
        set(prop, 'x-component-props.disabled', true);
      }
      if (typeof field.get('showTime') === 'boolean') {
        set(prop, 'x-component-props.showTime', field.get('showTime'));
      }
      const defaultValue = get(field.options, 'defaultValue');
      if (typeof defaultValue !== 'undefined') {
        prop.default = defaultValue;
      }
      if (interfaceType === 'boolean') {
        set(prop, 'x-component-props.children', prop.title);
        delete prop.title;
      }
      if (interfaceType === 'linkTo') {
        set(prop, 'x-component-props.associatedName', field.get('collection_name'));
        set(prop, 'x-component-props.target', field.get('target'));
        set(prop, 'x-component-props.multiple', field.get('multiple'));
        set(prop, 'x-component-props.labelField', field.get('labelField'));
      }
      if (interfaceType === 'multipleSelect') {
        set(prop, 'x-component-props.mode', 'multiple');
      }
      if (interfaceType === 'subTable' && field.get('target')) {
        set(prop, 'x-component-props.target', field.get('target'));
        // resourceName
      }
      if (['radio', 'select', 'multipleSelect', 'checkboxes'].includes(interfaceType)) {
        prop.enum = field.get('dataSource');
      }
      schema[field.name] = {
        ...prop,
      };
    }
    return schema;
  },
  details: async (fields: Model[], context?: any) => {
    const arr = [];
    for (const field of fields) {
      if (!get(field.component, 'showInDetail')) {
        continue;
      }
      const props = {};
      if (field.get('interface') === 'subTable') {
        const children = await field.getChildren({
          order: [['sort', 'asc']],
        });
        props['children'] = children.map(child => ({...child.toJSON(), dataIndex: child.name.split('.')}))
      }
      arr.push({
        ...field.toJSON(),
        ...props,
      });
    }
    return arr;
  },
  filter: async (fields: Model[], ctx?: any) => {
    const properties = {
      filter: {
        type: 'filter',
        'x-component-props': {
          fields: fields.filter(field => field.get('filterable')),
        },
      },
    }
    return properties;
  },
};

export default async (ctx, next) => {
  const { resourceName, resourceKey, values = {} } = ctx.action.params;
  const [View, Collection, Field, Action] = ctx.db.getModels(['views', 'collections', 'fields', 'actions']) as ModelCtor<Model>[];
  let view = await View.findOne(View.parseApiJson({
    filter: {
      collection_name: resourceName,
      name: resourceKey,
    },
    // fields: {
    //   appends: ['actions', 'fields'],
    // },
  }));
  let throughName;
  const { associatedName, resourceFieldName, associatedKey } = values;
  if (associatedName) {
    const table = ctx.db.getTable(associatedName);
    const resourceField = table.getField(resourceFieldName);
    if (resourceField instanceof BELONGSTOMANY) {
      // console.log({associatedName, resourceField});
      throughName = resourceField.options.through;
    }
  }
  if (!view) {
    // 如果不存在 view，新建一个
    view = new View({type: resourceKey, template: 'FilterForm'});
  }
  const collection = await Collection.findOne({
    where: {
      name: resourceName,
    },
  });
  // const where: any = {
  //   developerMode: ctx.state.developerMode,
  // }
  const filter: any = {}
  if (!ctx.state.developerMode) {
    filter.developerMode = {'$isFalsy': true}
  }
  if (!view.get('draggable')) {
    filter.type = {
      not: 'sort',
    };
  }
  const fieldOptions = Field.parseApiJson({
    filter,
    sort: 'sort',
  });
  let fields = await collection.getFields(fieldOptions);
  fields = fields.filter(field => {
    if (field.get('interface') === 'linkTo') {
      if (throughName && throughName === field.get('through')) {
        return false;
      }
    }
    return true;
  })
  const options = Action.parseApiJson(ctx.state.developerMode ? {
    filter: {},
    sort: 'sort',
  } : {
    filter: {
      developerMode: {'$isFalsy': true},
    },
    sort: 'sort',
  });
  const actions = await collection.getActions(options);
  let actionNames = view.get('actionNames') || [];
  if (actionNames.length === 0 && resourceKey !== 'permissionTable') {
    actionNames = ['filter', 'create', 'destroy'];
  }
  const defaultTabs = await collection.getTabs({
    where: {
      default: true,
    },
  });
  view.setDataValue('defaultTabName', get(defaultTabs, [0, 'name']));
  if (view.get('type') === 'table') {
    view.setDataValue('rowViewName', 'form');
  }
  if (view.get('type') === 'calendar') {
    view.setDataValue('template', 'Calendar');
    view.setDataValue('rowViewName', 'form');
  }
  if (view.get('updateViewName')) {
    view.setDataValue('rowViewName', view.get('updateViewName'));
  }
  // view.setDataValue('viewCollectionName', view.collection_name);
  let title = collection.get('title');
  const mode = get(ctx.action.params, ['values', 'mode'], ctx.action.params.mode);
  if (mode === 'update') {
    title = `编辑${title}`;
  } else {
    title = `新增${title}`;
  }
  const viewType = view.get('type');
  const actionDefaultParams:any = {};
  if (resourceName === 'collections') {
    actionDefaultParams.sort = ['sort'];
  }
  if (view.filter) {
    actionDefaultParams.filter = view.filter;
  }
  const appends = [];
  
  for (const field of fields) {
    if (!['subTable', 'linkTo', 'attachment', 'createdBy', 'updatedBy'].includes(field.get('interface'))) {
      continue;
    }
    let showInKey;
    switch (viewType) {
      case 'table':
        showInKey = 'showInTable';
        break;
      case 'form':
        showInKey = 'showInForm';
        break;
      case 'details':
        showInKey = 'showInDetail';
        break;
    }
    if (showInKey && field.get(`component.${showInKey}`)) {
      appends.push(field.name);
      if (field.get('interface') === 'attachment') {
        appends.push(`${field.name}.storage`);
      }
      if (field.get('interface') === 'subTable') {
        const children = await field.getChildren();
        // console.log(children);
        for (const child of children) {
          if (!['subTable', 'linkTo', 'attachment', 'updatedBy', 'createdBy'].includes(child.get('interface'))) {
            continue;
          }
          console.log(child.name);
          appends.push(`${field.name}.${child.name}`);
        }
      }
    }
  }
  actionDefaultParams['fields[appends]'] = appends.join(',');
  if (resourceFieldName === 'pages' && resourceKey === 'permissionTable') {
    ctx.body = {
      ...view.get(),
      title,
      actionDefaultParams,
      original: fields,
      disableRowClick: true,
      fields: [
        {
          "title": "页面",
          "name": "title",
          "interface": "string",
          "type": "string",
          "parent_id": null,
          "required": true,
          "developerMode": false,
          "component": {
            "type": "string",
            "className": "drag-visible",
            "showInForm": true,
            "showInTable": true,
            "showInDetail": true
          },
          "dataIndex": ["title"]
        },
        {
          "title": "访问权限",
          "name": "accessable",
          "interface": "boolean",
          "type": "boolean",
          "parent_id": null,
          "required": true,
          "editable": true,
          "resource": 'roles.pages',
          "developerMode": false,
          "component": {
            "type": "boolean",
            "showInTable": true,
          },
          "dataIndex": ["accessable"]
        }
      ],
    };
  } else if (resourceFieldName === 'collections' && resourceKey === 'permissionTable') {
    ctx.body = {
      ...view.get(),
      title,
      actionDefaultParams,
      original: fields,
      rowKey: 'name',
      fields: [
        {
          "title": "数据表名称",
          "name": "title",
          "interface": "string",
          "type": "string",
          "parent_id": null,
          "required": true,
          "developerMode": false,
          "component": {
            "type": "string",
            "className": "drag-visible",
            "showInForm": true,
            "showInTable": true,
            "showInDetail": true
          },
          "dataIndex": ["title"]
        }
      ],
    };
  } else if (
      (resourceFieldName === 'collections' && resourceKey === 'permissionForm') 
      ||
      (resourceFieldName === 'roles' && resourceKey === 'permissionForm')
    ) {
    ctx.body = {
      ...view.get(),
      title,
      actionDefaultParams,
      original: fields,
      fields: {
        actions: {
          type: 'permissions.actions',
          title: '数据操作权限',
          'x-linkages': [
            {
              type: "value:schema",
              target: "actions",
              schema: {
                "x-component-props": {
                  resourceKey: resourceFieldName === 'roles' ? associatedKey : "{{ $form.values && $form.values.resourceKey }}"
                },
              },
            },
          ],
          'x-component-props': {
            dataSource: [],
          },
        },
        fields: {
          type: 'permissions.fields',
          title: '字段权限',
          'x-linkages': [
            {
              type: "value:schema",
              target: "fields",
              schema: {
                "x-component-props": {
                  resourceKey: resourceFieldName === 'roles' ? associatedKey : "{{ $form.values && $form.values.resourceKey }}"
                },
              },
            },
          ],
          'x-component-props': {
            dataSource: [],
          }
        },
        tabs: {
          type: 'permissions.tabs',
          title: '标签页权限',
          'x-linkages': [
            {
              type: "value:schema",
              target: "tabs",
              schema: {
                "x-component-props": {
                  resourceKey: resourceFieldName === 'roles' ? associatedKey : "{{ $form.values && $form.values.resourceKey }}"
                },
              },
            },
          ],
          'x-component-props': {
            dataSource: [],
          }
        },
        description: {
          type: 'textarea',
          title: '权限描述',
        },
      },
    };
  } else {
    ctx.body = {
      ...view.get(),
      title,
      actionDefaultParams,
      original: fields,
      fields: await (transforms[view.type]||transforms.table)(fields, ctx),
      actions: actions.filter(action => actionNames.includes(action.name)).map(action => ({
        ...action.toJSON(),
        ...action.options,
        // viewCollectionName: action.collection_name,
      })),
    };
  }
  await next();
};
