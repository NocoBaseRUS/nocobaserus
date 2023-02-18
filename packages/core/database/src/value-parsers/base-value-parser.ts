export class BaseValueParser {
  ctx: any;
  field: any;
  value: any;
  errors: string[] = [];

  constructor(field: any, ctx: any) {
    this.field = field;
    this.ctx = ctx;
    this.value = null;
  }

  toArr(value: any, splitter?: string) {
    let values: string[] = [];
    if (!value) {
      values = [];
    } else if (typeof value === 'string') {
      values = value.split(splitter || /,|，|、/);
    } else if (Array.isArray(value)) {
      values = value;
    }
    return values.map((v) => (v.trim ? v.trim() : v)).filter(Boolean);
  }

  toString() {
    return this.value;
  }

  getValue() {
    return this.value;
  }

  async setValue(value: any) {
    this.value = value;
  }
}
