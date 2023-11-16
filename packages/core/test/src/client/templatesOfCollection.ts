import { CollectionSetting } from './e2eUtils';

/**
 * 1. 创建一个名为 through 的 collection，作为中间表
 * 2. 创建一个名为 general 的 collection，其包含所有类型的字段
 */
export const general: CollectionSetting[] = [
  {
    key: '9svi5dk6k93',
    name: 'through',
    title: 'Through collection',
    inherit: false,
    hidden: false,
    description: null,
    fields: [
      {
        key: 'l245eh0ivx3',
        name: 'id',
        type: 'bigInt',
        interface: 'id',
        description: null,
        collectionName: 'through',
        parentKey: null,
        reverseKey: null,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        uiSchema: {
          type: 'number',
          title: '{{t("ID")}}',
          'x-component': 'InputNumber',
          'x-read-pretty': true,
        },
      },
      {
        key: 'i8wn3urg7fr',
        name: 'f_dvb4ia9c0o1',
        type: 'bigInt',
        interface: 'integer',
        description: null,
        collectionName: 'through',
        parentKey: null,
        reverseKey: null,
        isForeignKey: true,
        uiSchema: {
          type: 'number',
          title: 'f_dvb4ia9c0o1',
          'x-component': 'InputNumber',
          'x-read-pretty': true,
        },
      },
      {
        key: 't5rxh209jss',
        name: 'f_i9fiogy7j5g',
        type: 'bigInt',
        interface: 'integer',
        description: null,
        collectionName: 'through',
        parentKey: null,
        reverseKey: null,
        isForeignKey: true,
        uiSchema: {
          type: 'number',
          title: 'f_i9fiogy7j5g',
          'x-component': 'InputNumber',
          'x-read-pretty': true,
        },
      },
      {
        key: 'k8kxh8jglbj',
        name: 'createdAt',
        type: 'date',
        interface: 'createdAt',
        description: null,
        collectionName: 'through',
        parentKey: null,
        reverseKey: null,
        field: 'createdAt',
        uiSchema: {
          type: 'datetime',
          title: '{{t("Created at")}}',
          'x-component': 'DatePicker',
          'x-component-props': {},
          'x-read-pretty': true,
        },
      },
      {
        key: 'yqztlct9g1b',
        name: 'createdBy',
        type: 'belongsTo',
        interface: 'createdBy',
        description: null,
        collectionName: 'through',
        parentKey: null,
        reverseKey: null,
        target: 'users',
        foreignKey: 'createdById',
        uiSchema: {
          type: 'object',
          title: '{{t("Created by")}}',
          'x-component': 'AssociationField',
          'x-component-props': {
            fieldNames: {
              value: 'id',
              label: 'nickname',
            },
          },
          'x-read-pretty': true,
        },
        targetKey: 'id',
      },
      {
        key: '3cwkasxj8hg',
        name: 'updatedAt',
        type: 'date',
        interface: 'updatedAt',
        description: null,
        collectionName: 'through',
        parentKey: null,
        reverseKey: null,
        field: 'updatedAt',
        uiSchema: {
          type: 'string',
          title: '{{t("Last updated at")}}',
          'x-component': 'DatePicker',
          'x-component-props': {},
          'x-read-pretty': true,
        },
      },
      {
        key: 'prynmyhy1yy',
        name: 'updatedBy',
        type: 'belongsTo',
        interface: 'updatedBy',
        description: null,
        collectionName: 'through',
        parentKey: null,
        reverseKey: null,
        target: 'users',
        foreignKey: 'updatedById',
        uiSchema: {
          type: 'object',
          title: '{{t("Last updated by")}}',
          'x-component': 'AssociationField',
          'x-component-props': {
            fieldNames: {
              value: 'id',
              label: 'nickname',
            },
          },
          'x-read-pretty': true,
        },
        targetKey: 'id',
      },
    ],
    category: [],
    logging: true,
    autoGenId: true,
    createdBy: true,
    updatedBy: true,
    createdAt: true,
    updatedAt: true,
    sortable: true,
    template: 'general',
    view: false,
  },
  {
    key: 'hdzuydp5y9n',
    name: 'general',
    title: 'General',
    inherit: false,
    hidden: false,
    description: null,
    fields: [
      {
        key: 'e7pl1g5vcv6',
        name: 'id',
        type: 'bigInt',
        interface: 'id',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        uiSchema: {
          type: 'number',
          title: '{{t("ID")}}',
          'x-component': 'InputNumber',
          'x-read-pretty': true,
        },
      },
      {
        key: 'g1a1kt5cxc7',
        name: 'f_395nalcr8k6',
        type: 'bigInt',
        interface: 'integer',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        isForeignKey: true,
        uiSchema: {
          type: 'number',
          title: 'f_395nalcr8k6',
          'x-component': 'InputNumber',
          'x-read-pretty': true,
        },
      },
      {
        key: 'az487563nyf',
        name: 'f_y79ms53vvfu',
        type: 'bigInt',
        interface: 'integer',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        isForeignKey: true,
        uiSchema: {
          type: 'number',
          title: 'f_y79ms53vvfu',
          'x-component': 'InputNumber',
          'x-read-pretty': true,
        },
      },
      {
        key: 'wsxhlgbi2sq',
        name: 'createdAt',
        type: 'date',
        interface: 'createdAt',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        field: 'createdAt',
        uiSchema: {
          type: 'datetime',
          title: '{{t("Created at")}}',
          'x-component': 'DatePicker',
          'x-component-props': {},
          'x-read-pretty': true,
        },
      },
      {
        key: '2y8dcerx6bu',
        name: 'createdBy',
        type: 'belongsTo',
        interface: 'createdBy',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        target: 'users',
        foreignKey: 'createdById',
        uiSchema: {
          type: 'object',
          title: '{{t("Created by")}}',
          'x-component': 'AssociationField',
          'x-component-props': {
            fieldNames: {
              value: 'id',
              label: 'nickname',
            },
          },
          'x-read-pretty': true,
        },
        targetKey: 'id',
      },
      {
        key: '0htwbqzxore',
        name: 'updatedAt',
        type: 'date',
        interface: 'updatedAt',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        field: 'updatedAt',
        uiSchema: {
          type: 'string',
          title: '{{t("Last updated at")}}',
          'x-component': 'DatePicker',
          'x-component-props': {},
          'x-read-pretty': true,
        },
      },
      {
        key: 'wgft73ie4sk',
        name: 'updatedBy',
        type: 'belongsTo',
        interface: 'updatedBy',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        target: 'users',
        foreignKey: 'updatedById',
        uiSchema: {
          type: 'object',
          title: '{{t("Last updated by")}}',
          'x-component': 'AssociationField',
          'x-component-props': {
            fieldNames: {
              value: 'id',
              label: 'nickname',
            },
          },
          'x-read-pretty': true,
        },
        targetKey: 'id',
      },
      {
        key: 'pwxrw0j30jf',
        name: 'singleLineText',
        type: 'string',
        interface: 'input',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        uiSchema: {
          type: 'string',
          'x-component': 'Input',
          title: 'Single line text',
        },
      },
      {
        key: '1e0wv8yuif4',
        name: 'longText',
        type: 'text',
        interface: 'textarea',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        uiSchema: {
          type: 'string',
          'x-component': 'Input.TextArea',
          title: 'Long text',
        },
      },
      {
        key: 'acq6hqhuf7x',
        name: 'phone',
        type: 'string',
        interface: 'phone',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        uiSchema: {
          type: 'string',
          'x-component': 'Input',
          'x-component-props': {
            type: 'tel',
          },
          title: 'Phone',
        },
      },
      {
        key: '20ye8fklly5',
        name: 'email',
        type: 'string',
        interface: 'email',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        uiSchema: {
          type: 'string',
          'x-component': 'Input',
          'x-validator': 'email',
          title: 'Email',
        },
      },
      {
        key: 'aaoucvjx51r',
        name: 'url',
        type: 'string',
        interface: 'url',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        uiSchema: {
          type: 'string',
          'x-component': 'Input.URL',
          title: 'URL',
        },
      },
      {
        key: '5x1reyfe0bv',
        name: 'integer',
        type: 'bigInt',
        interface: 'integer',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        uiSchema: {
          type: 'number',
          'x-component': 'InputNumber',
          'x-component-props': {
            stringMode: true,
            step: '1',
          },
          'x-validator': 'integer',
          title: 'Integer',
        },
      },
      {
        key: 'aylj449fqbs',
        name: 'number',
        type: 'double',
        interface: 'number',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        uiSchema: {
          'x-component-props': {
            step: '1',
            stringMode: true,
          },
          type: 'number',
          'x-component': 'InputNumber',
          title: 'Number',
        },
      },
      {
        key: '2mkdnlw5934',
        name: 'percent',
        type: 'float',
        interface: 'percent',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        uiSchema: {
          'x-component-props': {
            step: '1',
            stringMode: true,
            addonAfter: '%',
          },
          type: 'string',
          'x-component': 'Percent',
          title: 'Percent',
        },
      },
      {
        key: 'o5ubyore1br',
        name: 'password',
        type: 'password',
        interface: 'password',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        hidden: true,
        uiSchema: {
          type: 'string',
          'x-component': 'Password',
          title: 'Password',
        },
      },
      {
        key: 'yzftr9ovldv',
        name: 'color',
        type: 'string',
        interface: 'color',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        defaultValue: '#1677FF',
        uiSchema: {
          type: 'string',
          'x-component': 'ColorPicker',
          default: '#1677FF',
          title: 'Color',
        },
      },
      {
        key: 'tht2m19le0y',
        name: 'icon',
        type: 'string',
        interface: 'icon',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        uiSchema: {
          type: 'string',
          'x-component': 'IconPicker',
          title: 'Icon',
        },
      },
      {
        key: 'dzbu5pwi8qh',
        name: 'checkbox',
        type: 'boolean',
        interface: 'checkbox',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        uiSchema: {
          type: 'boolean',
          'x-component': 'Checkbox',
          title: 'Checkbox',
        },
      },
      {
        key: '7jbx4kav8ji',
        name: 'singleSelect',
        type: 'string',
        interface: 'select',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        uiSchema: {
          enum: [
            {
              value: 'option1',
              label: 'option1',
              color: 'red',
            },
            {
              value: 'option2',
              label: 'option2',
              color: 'magenta',
            },
            {
              value: 'option3',
              label: 'option3',
              color: 'volcano',
            },
          ],
          type: 'string',
          'x-component': 'Select',
          title: 'Single select',
        },
      },
      {
        key: 'jtmknw88wve',
        name: 'multipleSelect',
        type: 'array',
        interface: 'multipleSelect',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        uiSchema: {
          enum: [
            {
              value: 'optoin1',
              label: 'optoin1',
              color: 'red',
            },
            {
              value: 'optoin2',
              label: 'option2',
              color: 'magenta',
            },
            {
              value: 'opton3',
              label: 'option3',
              color: 'volcano',
            },
          ],
          type: 'array',
          'x-component': 'Select',
          'x-component-props': {
            mode: 'multiple',
          },
          title: 'Multiple select',
        },
        defaultValue: [],
      },
      {
        key: '9q0l31z6dxi',
        name: 'radioGroup',
        type: 'string',
        interface: 'radioGroup',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        uiSchema: {
          enum: [
            {
              value: 'option1',
              label: 'option1',
              color: 'red',
            },
            {
              value: 'option2',
              label: 'option2',
              color: 'magenta',
            },
            {
              value: 'option3',
              label: 'option3',
              color: 'volcano',
            },
          ],
          type: 'string',
          'x-component': 'Radio.Group',
          title: 'Radio group',
        },
      },
      {
        key: 'j6v8wqkfy0e',
        name: 'checkboxGroup',
        type: 'array',
        interface: 'checkboxGroup',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        uiSchema: {
          enum: [
            {
              value: 'option1',
              label: 'option1',
              color: 'red',
            },
            {
              value: 'option2',
              label: 'option2',
              color: 'magenta',
            },
            {
              value: 'option3',
              label: 'option3',
              color: 'volcano',
            },
          ],
          type: 'string',
          'x-component': 'Checkbox.Group',
          title: 'Checkbox group',
        },
        defaultValue: [],
      },
      {
        key: 'bzra03tehp7',
        name: 'chinaRegion',
        type: 'belongsToMany',
        interface: 'chinaRegion',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        uiSchema: {
          'x-component-props': {
            maxLevel: 3,
            useDataSource: '{{ useChinaRegionDataSource }}',
            useLoadData: '{{ useChinaRegionLoadData }}',
            changeOnSelectLast: false,
            labelInValue: true,
            fieldNames: {
              label: 'name',
              value: 'code',
              children: 'children',
            },
          },
          type: 'array',
          'x-component': 'Cascader',
          title: 'China region',
        },
        target: 'chinaRegions',
        targetKey: 'code',
        sortBy: 'level',
        through: 't_5c7rmkeujkc',
        foreignKey: 'f_w4ainj07jay',
        otherKey: 'f_m7apc1bb4np',
        sourceKey: 'id',
      },
      {
        key: 'g8f7hbps7o0',
        name: 'markdown',
        type: 'text',
        interface: 'markdown',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        uiSchema: {
          type: 'string',
          'x-component': 'Markdown',
          title: 'Markdown',
        },
      },
      {
        key: '7w72huqzoei',
        name: 'richText',
        type: 'text',
        interface: 'richText',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        uiSchema: {
          type: 'string',
          'x-component': 'RichText',
          title: 'Rich Text',
        },
      },
      {
        key: 'ak1rn4xqfqz',
        name: 'attachment',
        type: 'belongsToMany',
        interface: 'attachment',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        uiSchema: {
          'x-component-props': {
            accept: 'image/*',
            multiple: true,
          },
          type: 'array',
          'x-component': 'Upload.Attachment',
          title: 'Attachment',
        },
        target: 'attachments',
        through: 't_tts4dsq9woc',
        foreignKey: 'f_45q3m29jnrb',
        otherKey: 'f_wydlg3kbfac',
        targetKey: 'id',
        sourceKey: 'id',
      },
      {
        key: '8b26lfjyo2i',
        name: 'datetime',
        type: 'date',
        interface: 'datetime',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        uiSchema: {
          'x-component-props': {
            dateFormat: 'YYYY-MM-DD',
            gmt: false,
            showTime: false,
          },
          type: 'string',
          'x-component': 'DatePicker',
          title: 'Datetime',
        },
      },
      {
        key: '00q73z6jh4m',
        name: 'time',
        type: 'time',
        interface: 'time',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        uiSchema: {
          'x-component-props': {
            format: 'HH:mm:ss',
          },
          type: 'string',
          'x-component': 'TimePicker',
          title: 'Time',
        },
      },
      {
        key: 'vbozg3mbu8s',
        name: 'oneToOneBelongsTo',
        type: 'belongsTo',
        interface: 'obo',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        foreignKey: 'f_395nalcr8k6',
        onDelete: 'SET NULL',
        uiSchema: {
          'x-component': 'AssociationField',
          'x-component-props': {
            multiple: false,
            fieldNames: {
              label: 'id',
              value: 'id',
            },
          },
          title: 'One to one (belongs to)',
        },
        target: 'users',
        targetKey: 'id',
      },
      {
        key: 'gvehrvyoj6o',
        name: 'oneToOneHasOne',
        type: 'hasOne',
        interface: 'oho',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        foreignKey: 'f_5bcag69g941',
        onDelete: 'SET NULL',
        uiSchema: {
          'x-component': 'AssociationField',
          'x-component-props': {
            multiple: false,
            fieldNames: {
              label: 'id',
              value: 'id',
            },
          },
          title: 'One to one (has one)',
        },
        target: 'users',
        sourceKey: 'id',
      },
      {
        key: 'n7eplsyrj0v',
        name: 'oneToMany',
        type: 'hasMany',
        interface: 'o2m',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        foreignKey: 'f_iji0l0ettnv',
        onDelete: 'SET NULL',
        uiSchema: {
          'x-component': 'AssociationField',
          'x-component-props': {
            multiple: true,
            fieldNames: {
              label: 'id',
              value: 'id',
            },
          },
          title: 'One to many',
        },
        target: 'users',
        targetKey: 'id',
        sourceKey: 'id',
      },
      {
        key: 'yncqm5s7jup',
        name: 'manyToOne',
        type: 'belongsTo',
        interface: 'm2o',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        foreignKey: 'f_y79ms53vvfu',
        onDelete: 'SET NULL',
        uiSchema: {
          'x-component': 'AssociationField',
          'x-component-props': {
            multiple: false,
            fieldNames: {
              label: 'id',
              value: 'id',
            },
          },
          title: 'Many to one',
        },
        target: 'users',
        targetKey: 'id',
      },
      {
        key: 'fys2jqgg3vl',
        name: 'manyToMany',
        type: 'belongsToMany',
        interface: 'm2m',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        foreignKey: 'f_i9fiogy7j5g',
        otherKey: 'f_dvb4ia9c0o1',
        uiSchema: {
          'x-component': 'AssociationField',
          'x-component-props': {
            multiple: true,
            fieldNames: {
              label: 'id',
              value: 'id',
            },
          },
          title: 'Many to many',
        },
        through: 'through',
        target: 'users',
        targetKey: 'id',
        sourceKey: 'id',
      },
      {
        key: 'v2emwjvh09r',
        name: 'formula',
        type: 'formula',
        interface: 'formula',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        dataType: 'double',
        uiSchema: {
          'x-component-props': {
            step: '1',
            stringMode: true,
          },
          type: 'string',
          'x-component': 'Formula.Result',
          'x-read-pretty': true,
          title: 'Formula',
        },
        engine: 'math.js',
        expression: '{{longText}}',
      },
      {
        key: 'uu429hrryvy',
        name: 'sequence',
        type: 'sequence',
        interface: 'sequence',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        patterns: [
          {
            type: 'integer',
            options: {
              digits: 1,
              start: 0,
              key: 25864,
            },
          },
        ],
        uiSchema: {
          type: 'string',
          'x-component': 'Input',
          'x-component-props': {},
          title: 'Sequence',
        },
      },
      {
        key: '9fcdztb4t03',
        name: 'JSON',
        type: 'json',
        interface: 'json',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        defaultValue: null,
        uiSchema: {
          type: 'object',
          'x-component': 'Input.JSON',
          'x-component-props': {
            autoSize: {
              minRows: 5,
            },
          },
          default: null,
          title: 'JSON',
        },
      },
      {
        key: '3t06lzhet2q',
        name: 'collection',
        type: 'string',
        interface: 'collection',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        uiSchema: {
          type: 'string',
          'x-component': 'CollectionSelect',
          title: 'Collection',
        },
      },
    ],
    category: [],
    logging: true,
    autoGenId: true,
    createdBy: true,
    updatedBy: true,
    createdAt: true,
    updatedAt: true,
    sortable: true,
    template: 'general',
    view: false,
  },
];

/**
 * 1. 创建一个名为 general 的 collection，其包含 m2o / o2m / single select 类型的字段
 */
export const generalWithM2oSingleSelect: CollectionSetting[] = [
  {
    key: 'c8xralyirc3',
    name: 'general',
    title: 'General',
    inherit: false,
    hidden: false,
    description: null,
    fields: [
      {
        key: 'c0uf9n3ekdk',
        name: 'id',
        type: 'bigInt',
        interface: 'id',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        uiSchema: {
          type: 'number',
          title: '{{t("ID")}}',
          'x-component': 'InputNumber',
          'x-read-pretty': true,
        },
      },
      {
        key: 'oa6n90eu366',
        name: 'f_sx575h93rzc',
        type: 'bigInt',
        interface: 'integer',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        isForeignKey: true,
        uiSchema: {
          type: 'number',
          title: 'f_sx575h93rzc',
          'x-component': 'InputNumber',
          'x-read-pretty': true,
        },
      },
      {
        key: 'xt76ofudc1n',
        name: 'f_t22o7loai3j',
        type: 'bigInt',
        interface: 'integer',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        isForeignKey: true,
        uiSchema: {
          type: 'number',
          title: 'f_t22o7loai3j',
          'x-component': 'InputNumber',
          'x-read-pretty': true,
        },
      },
      {
        key: 'wz8o5rrmwlr',
        name: 'f_y9xcjaa06sc',
        type: 'bigInt',
        interface: 'integer',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        isForeignKey: true,
        uiSchema: {
          type: 'number',
          title: 'f_y9xcjaa06sc',
          'x-component': 'InputNumber',
          'x-read-pretty': true,
        },
      },
      {
        key: 'zg29s20lkdu',
        name: 'createdAt',
        type: 'date',
        interface: 'createdAt',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        field: 'createdAt',
        uiSchema: {
          type: 'datetime',
          title: '{{t("Created at")}}',
          'x-component': 'DatePicker',
          'x-component-props': {},
          'x-read-pretty': true,
        },
      },
      {
        key: '5p9tj4i90ag',
        name: 'createdBy',
        type: 'belongsTo',
        interface: 'createdBy',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        target: 'users',
        foreignKey: 'createdById',
        uiSchema: {
          type: 'object',
          title: '{{t("Created by")}}',
          'x-component': 'AssociationField',
          'x-component-props': {
            fieldNames: {
              value: 'id',
              label: 'nickname',
            },
          },
          'x-read-pretty': true,
        },
        targetKey: 'id',
      },
      {
        key: '0oakhpsvj9v',
        name: 'updatedAt',
        type: 'date',
        interface: 'updatedAt',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        field: 'updatedAt',
        uiSchema: {
          type: 'string',
          title: '{{t("Last updated at")}}',
          'x-component': 'DatePicker',
          'x-component-props': {},
          'x-read-pretty': true,
        },
      },
      {
        key: 'zshkmfe9bhk',
        name: 'updatedBy',
        type: 'belongsTo',
        interface: 'updatedBy',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        target: 'users',
        foreignKey: 'updatedById',
        uiSchema: {
          type: 'object',
          title: '{{t("Last updated by")}}',
          'x-component': 'AssociationField',
          'x-component-props': {
            fieldNames: {
              value: 'id',
              label: 'nickname',
            },
          },
          'x-read-pretty': true,
        },
        targetKey: 'id',
      },
      {
        key: '32k30gvil98',
        name: 'manyToOne',
        type: 'belongsTo',
        interface: 'm2o',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        foreignKey: 'f_t22o7loai3j',
        onDelete: 'SET NULL',
        uiSchema: {
          'x-component': 'AssociationField',
          'x-component-props': {
            multiple: false,
            fieldNames: {
              label: 'id',
              value: 'id',
            },
          },
          title: 'Many to one',
        },
        target: 'users',
        targetKey: 'id',
      },
      {
        key: 'bf4d3j554iv',
        name: 'oneToMany',
        type: 'hasMany',
        interface: 'o2m',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        foreignKey: 'f_d3ilpempiob',
        onDelete: 'SET NULL',
        uiSchema: {
          'x-component': 'AssociationField',
          'x-component-props': {
            multiple: true,
            fieldNames: {
              label: 'id',
              value: 'id',
            },
          },
          title: 'One to many',
        },
        target: 'users',
        targetKey: 'id',
        sourceKey: 'id',
      },
      {
        key: 'zlhvwn6nvqp',
        name: 'singleSelect',
        type: 'string',
        interface: 'select',
        description: null,
        collectionName: 'general',
        parentKey: null,
        reverseKey: null,
        uiSchema: {
          enum: [
            {
              value: 'option1',
              label: 'option2',
              color: 'red',
            },
            {
              value: 'option2',
              label: 'option2',
              color: 'magenta',
            },
            {
              value: 'option3',
              label: 'option3',
              color: 'volcano',
            },
          ],
          type: 'string',
          'x-component': 'Select',
          title: 'Single select',
        },
      },
    ],
    category: [],
    logging: true,
    autoGenId: true,
    createdBy: true,
    updatedBy: true,
    createdAt: true,
    updatedAt: true,
    sortable: true,
    template: 'general',
    view: false,
  },
];
