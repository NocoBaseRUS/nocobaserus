import { DatetimeInterface } from './datetime-interface';
import dayjs from 'dayjs';
import { getJsDateFromExcel } from 'excel-date-to-js';

function isDate(v) {
  return v instanceof Date;
}

function isNumeric(str: any) {
  if (typeof str === 'number') return true;
  if (typeof str != 'string') return false;
  return !isNaN(str as any) && !isNaN(parseFloat(str));
}

export class DatetimeNoTzInterface extends DatetimeInterface {
  async toValue(value: any, ctx: any = {}): Promise<any> {
    if (!value) {
      return null;
    }

    if (typeof value === 'string') {
      const match = /^(\d{4})[-/]?(\d{2})[-/]?(\d{2})$/.exec(value);
      if (match) {
        return `${match[1]}-${match[2]}-${match[3]}`;
      }
    }

    if (dayjs.isDayjs(value)) {
      return value;
    } else if (isDate(value)) {
      return value;
    } else if (isNumeric(value)) {
      const date = getJsDateFromExcel(value);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    } else if (typeof value === 'string') {
      return value;
    }

    throw new Error(`Invalid date - ${value}`);
  }
}
