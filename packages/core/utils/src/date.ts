import moment from 'moment';

export interface Str2momentOptions {
  gmt?: boolean;
  picker?: 'year' | 'month' | 'week' | 'quarter';
  utcOffset?: any;
  utc?: boolean;
}

export const getDefaultFormat = (props: any) => {
  if (props.format) {
    return props.format;
  }
  if (props.dateFormat) {
    if (props['showTime']) {
      return `${props.dateFormat} ${props.timeFormat || 'HH:mm:ss'}`;
    }
    return props.dateFormat;
  }
  if (props['picker'] === 'month') {
    return 'YYYY-MM';
  } else if (props['picker'] === 'quarter') {
    return 'YYYY-\\QQ';
  } else if (props['picker'] === 'year') {
    return 'YYYY';
  } else if (props['picker'] === 'week') {
    return 'YYYY-wo';
  }
  return props['showTime'] ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
};

export const toGmt = (value: moment.Moment) => {
  if (!value || !moment.isMoment(value)) {
    return value;
  }
  return `${value.format('YYYY-MM-DD')}T${value.format('HH:mm:ss.SSS')}Z`;
};

export const toLocal = (value: moment.Moment) => {
  if (!value) {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((val) => val.startOf('second').toISOString());
  }
  if (moment.isMoment(value)) {
    return value.startOf('second').toISOString();
  }
};

const toMoment = (val: any, options?: Str2momentOptions) => {
  if (!val) {
    return;
  }
  const offset = options.utcOffset || -1 * new Date().getTimezoneOffset();
  const { gmt, picker, utc = true } = options;

  if (!utc) {
    return moment(val);
  }

  if (moment.isMoment(val)) {
    return val.utcOffset(offset);
  }
  if (gmt || picker) {
    return moment(val).utcOffset(0);
  }
  return moment(val).utcOffset(offset);
};

export const str2moment = (value?: string | string[], options: Str2momentOptions = {}): any => {
  return Array.isArray(value)
    ? value.map((val) => {
        return toMoment(val, options);
      })
    : value
    ? toMoment(value, options)
    : value;
};

const toStringByPicker = (value, picker) => {
  if (picker === 'year') {
    return value.format('YYYY') + '-01-01T00:00:00.000Z';
  }
  if (picker === 'month') {
    return value.format('YYYY-MM') + '-01T00:00:00.000Z';
  }
  if (picker === 'quarter') {
    return value.format('YYYY-MM') + '-01T00:00:00.000Z';
  }
  if (picker === 'week') {
    return value.format('YYYY-MM-DD') + 'T00:00:00.000Z';
  }
  return value.format('YYYY-MM-DD') + 'T00:00:00.000Z';
};

const toGmtByPicker = (value: moment.Moment | moment.Moment[], picker?: any) => {
  if (!value) {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((val) => toStringByPicker(val, picker));
  }
  if (moment.isMoment(value)) {
    return toStringByPicker(value, picker);
  }
};

export interface Moment2strOptions {
  showTime?: boolean;
  gmt?: boolean;
  picker?: 'year' | 'month' | 'week' | 'quarter';
}

export const moment2str = (value?: moment.Moment, options: Moment2strOptions = {}) => {
  const { showTime, gmt, picker } = options;
  if (!value) {
    return value;
  }
  if (showTime) {
    return gmt ? toGmt(value) : toLocal(value);
  }
  return toGmtByPicker(value, picker);
};
