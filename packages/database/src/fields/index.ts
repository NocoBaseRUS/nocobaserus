import { StringFieldOptions } from './string-field';

import { BooleanFieldOptions } from './boolean-field';
import { BelongsToFieldOptions } from './belongs-to-field';
import { HasOneFieldOptions } from './has-one-field';
import { HasManyFieldOptions } from './has-many-field';
import { BelongsToManyFieldOptions } from './belongs-to-many-field';
import {
  DecimalFieldOptions,
  DoubleFieldOptions,
  FloatFieldOptions,
  IntegerFieldOptions,
  RealFieldOptions,
} from './number-field';
import { JsonbFieldOptions, JsonFieldOptions } from './json-field';
import { SortFieldOptions } from './sort-field';
import { TextFieldOptions } from './text-field';
import { VirtualFieldOptions } from './virtual-field';
import { TimeFieldOptions } from './time-field';
import { DateFieldOptions } from './date-field';
import { ArrayFieldOptions } from './array-field';
import { BaseFieldOptions } from './field';
import { PasswordFieldOptions } from './password-field';

export * from './array-field';
export * from './belongs-to-field';
export * from './belongs-to-many-field';
export * from './boolean-field';
export * from './date-field';
export * from './has-many-field';
export * from './has-one-field';
export * from './json-field';
export * from './number-field';
export * from './relation-field';
export * from './sort-field';
export * from './string-field';
export * from './text-field';
export * from './time-field';
export * from './uid-field';
export * from './virtual-field';
export * from './password-field';
export * from './field';

export type FieldOptions =
  | BaseFieldOptions
  | StringFieldOptions
  | IntegerFieldOptions
  | FloatFieldOptions
  | DecimalFieldOptions
  | DoubleFieldOptions
  | RealFieldOptions
  | JsonFieldOptions
  | JsonbFieldOptions
  | BooleanFieldOptions
  | SortFieldOptions
  | TextFieldOptions
  | VirtualFieldOptions
  | ArrayFieldOptions
  | TimeFieldOptions
  | DateFieldOptions
  | PasswordFieldOptions
  | BelongsToFieldOptions
  | HasOneFieldOptions
  | HasManyFieldOptions
  | BelongsToManyFieldOptions;
