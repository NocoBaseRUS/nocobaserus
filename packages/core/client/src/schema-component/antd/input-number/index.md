# InputNumber

数字输入框。其基于 ant-design [InputNumber](https://ant.design/components/input-number/) 组件进行封装。

```ts
interface InputNumberProps extends AntdInputNumberProps {
  formatStyle?: false | 'scientifix';
  unitConversion?: number;
  /**
   * @default '*'
   */
  unitConversionType?: '*' | '/';
  /**
   * @default '0.00'
   */
  separator?: '0,0.00' | '0.0,00' | '0 0,00' | '0.00';
}
```

## Basic Usage

<code src="./demos/new-demos/basic.tsx"></code>

## addonBefore and addonAfter

<code src="./demos/new-demos/addonBefore-addonAfter.tsx"></code>

## Read Pretty

<code src="./demos/new-demos/read-pretty.tsx"></code>

## Format Style

可以使用科学计数法。

<code src="./demos/new-demos/format-style.tsx"></code>

## Unit Conversion

可以原来数字基础上进行乘法或除法运算。

<code src="./demos/new-demos/unit-conversion.tsx"></code>

## Separator

<code src="./demos/new-demos/separator.tsx"></code>
