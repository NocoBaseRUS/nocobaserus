import { formatMomentValue, momentable } from '@formily/antd/esm/__builtins__';
import { connect, mapProps, mapReadPretty } from '@formily/react';
import { TimePicker as AntdTimePicker } from 'antd';
import { TimePickerProps as AntdTimePickerProps, TimeRangePickerProps } from 'antd/es/time-picker';
import moment from 'dayjs';
import { ReadPretty } from './ReadPretty';

type ComposedTimePicker = React.FC<AntdTimePickerProps> & {
  RangePicker?: React.FC<TimeRangePickerProps>;
};

const mapTimeFormat = function () {
  return (props: any, field) => {
    const format = props['format'] || 'HH:mm:ss';
    const onChange = props.onChange;
    return {
      ...props,
      format,
      value: momentable(props.value, format),
      onChange: (value: moment.Dayjs | moment.Dayjs[]) => {
        if (onChange) {
          onChange(formatMomentValue(value, format) || null);
        }
      },
    };
  };
};

export const TimePicker: ComposedTimePicker = connect(
  AntdTimePicker,
  mapProps(mapTimeFormat()),
  mapReadPretty(ReadPretty),
);

TimePicker.RangePicker = connect(AntdTimePicker.RangePicker, mapProps(mapTimeFormat()), mapReadPretty(ReadPretty));

export default TimePicker;
