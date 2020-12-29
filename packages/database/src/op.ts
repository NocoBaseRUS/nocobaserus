import { Op, Utils, Sequelize } from 'sequelize';

function toArray(value: any): any[] {
  if (value == null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}

function stringToDate(value: string): Date {
  const [y, m, d] = value.split(/[^\d]/).map(item => Number.parseInt(item, 10));
  return new Date(y, m - 1, d);
}

const op = new Map<string, typeof Op | Function>();

// Sequelize 内置
for (const key in Op) {
  op.set(key, Op[key]);
  const val = Utils.underscoredIf(key, true);
  op.set(val, Op[key]);
  op.set(val.replace(/_/g, ''), Op[key]);
}

// 通用

// 是否为空：数据库意义的 null
op.set('$null', (value, {fieldPath, database}) => {
  // const field = database.getFieldByPath(fieldPath);
  // console.log({field});
  return { [Op.is]: null };
});
op.set('$notNull', () => ({ [Op.not]: null }));

op.set('$isTruly', () => ({
  [Op.eq]: true,
}));
op.set('$isFalsy', () => ({
  [Op.or]: [
    {
      [Op.eq]: false,
    },
    {
      [Op.is]: null,
    },
  ],
}));

// 字符串

// 包含：指对应字段的值包含某个子串
op.set('$includes', (value: string) => ({ [Op.iLike]: `%${value}%` }));
// 不包含：指对应字段的值不包含某个子串（慎用：性能问题）
op.set('$notIncludes', (value: string) => ({ [Op.notILike]: `%${value}%` }));
// 以之起始
op.set('$startsWith', (value: string) => ({ [Op.iLike]: `${value}%` }));
// 不以之起始
op.set('$notStartsWith', (value: string) => ({ [Op.notILike]: `${value}%` }));
// 以之结束
op.set('$endsWith', (value: string) => ({ [Op.iLike]: `%${value}` }));
// 不以之结束
op.set('$notEndsWith', (value: string) => ({ [Op.notILike]: `%${value}` }));

// 仅日期

// 在某日
op.set('$dateOn', (value: string) => {
  const start = stringToDate(value);
  const end = new Date(start.getFullYear(), start.getMonth(), start.getDate() + 1);
  return { [Op.and]: [{ [Op.gte]: start }, { [Op.lt]: end }] };
});
// 某日前
op.set('$dateBefore', (value: string) => ({ [Op.lt]: stringToDate(value) }));
// 某日后
op.set('$dateAfter', (value: string) => {
  const date = stringToDate(value);
  return { [Op.gte]: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1) };
});
// 不早于（含当天）
op.set('$dateNotBefore', (value: string) => ({ [Op.gte]: stringToDate(value) }));
// 不晚于（含当天）
op.set('$dateNotAfter', (value: string) => {
  const date = stringToDate(value);
  return { [Op.lt]: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1) };
});
// 在期间
op.set('$dateBetween', ([from, to]: string[]) => {
  const start = stringToDate(from);
  const toDate = stringToDate(to);
  const end = new Date(toDate.getFullYear(), toDate.getMonth(), toDate.getDate() + 1);
  return { [Op.and]: [{ [Op.gte]: start }, { [Op.lt]: end }] };
});

// 多选（JSON）类型

// 包含组中任意值（命名来源：`Array.prototype.some`）
op.set('$anyOf', (values: any[], options) => {
  if (!values) {
    return Sequelize.literal('');
  }
  values = Array.isArray(values) ? values : [values];
  if (values.length === 0) {
    return Sequelize.literal('');
  }
  const { field, fieldPath } = options;
  const column = fieldPath.split('.').map(name => `"${name}"`).join('.');
  const sql = values.map(value => `(${column})::jsonb @> '${JSON.stringify(value)}'`).join(' OR ');
  console.log(sql);
  return Sequelize.literal(sql);
});
// 包含组中所有值
op.set('$allOf', (values: any) => ({ [Op.contains]: toArray(values) }));
// TODO(bug): 不包含组中任意值
op.set('$noneOf', (values: any[], options) => {
  if (!values) {
    return Sequelize.literal('');
  }
  values = Array.isArray(values) ? values : [values];
  if (values.length === 0) {
    return Sequelize.literal('');
  }
  const { field, fieldPath } = options;
  const column = fieldPath.split('.').map(name => `"${name}"`).join('.');
  const sql = values.map(value => `(${column})::jsonb @> '${JSON.stringify(value)}'`).join(' OR ');
  console.log(sql);
  return Sequelize.literal(`not (${sql})`);
});
// 与组中值匹配
op.set('$match', (values: any[], options) => {
  const array = toArray(values);
  if (values.length === 0) {
    return Sequelize.literal('');
  }
  const { field, fieldPath } = options;
  const column = fieldPath.split('.').map(name => `"${name}"`).join('.');
  const sql = `(${column})::jsonb @> '${JSON.stringify(array)}' AND (${column})::jsonb <@ '${JSON.stringify(array)}'`
  return Sequelize.literal(sql);
});
op.set('$notMatch', (values: any[], options) => {
  const array = toArray(values);
  if (values.length === 0) {
    return Sequelize.literal('');
  }
  const { field, fieldPath } = options;
  const column = fieldPath.split('.').map(name => `"${name}"`).join('.');
  const sql = `(${column})::jsonb @> '${JSON.stringify(array)}' AND (${column})::jsonb <@ '${JSON.stringify(array)}'`
  return Sequelize.literal(`not (${sql})`);
  // return Sequelize.literal(`(not (${sql})) AND ${column} IS NULL`);
});

export default op;
