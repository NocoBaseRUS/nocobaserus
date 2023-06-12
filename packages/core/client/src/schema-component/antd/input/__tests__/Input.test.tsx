import React from 'react';
import { fireEvent, render, screen, userEvent } from 'testUtils';
import App1 from '../demos/input';
import App4 from '../demos/json';
import App2 from '../demos/textarea';
import App3 from '../demos/url';

describe('Input', () => {
  it('should display the title', () => {
    render(<App1 />);

    expect(screen.getByText('Editable').innerHTML).toBe('Editable');
    expect(screen.getByText('Read pretty').innerHTML).toBe('Read pretty');
  });

  it('should display the value of user input', async () => {
    const { container } = render(<App1 />);

    const input = container.querySelector('input') as HTMLInputElement;
    await userEvent.type(input, 'Hello World');
    expect(screen.getByText('Hello World').innerHTML).toBe('Hello World');
  });
});

describe('Input.TextArea', () => {
  it('should display the title', () => {
    render(<App2 />);

    expect(screen.getByText('Editable').innerHTML).toBe('Editable');
    expect(screen.getByText('Read pretty').innerHTML).toBe('Read pretty');
    expect(screen.getByText('Read pretty(ellipsis)').innerHTML).toBe('Read pretty(ellipsis)');
    expect(screen.getByText('Read pretty(autop)').innerHTML).toBe('Read pretty(autop)');
  });

  it('should display the value of user input', () => {
    const { container } = render(<App2 />);

    const textarea = container.querySelector('textarea') as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: 'Hello World, Hello World' } });

    expect(textarea.value).toBe('Hello World, Hello World');
    expect(screen.getAllByText('Hello World, Hello World')).toMatchInlineSnapshot(`
      [
        <textarea
          class="ant-input"
          style="height: -40px; resize: none; min-height: -12px; max-height: -40px;"
        >
          Hello World, Hello World
        </textarea>,
        <div
          style="line-height: 1.612;"
        >
          Hello World, Hello World
        </div>,
        <div
          style="overflow: hidden; overflow-wrap: break-word; text-overflow: ellipsis; white-space: nowrap; word-break: break-all;"
        >
          Hello World, Hello World
        </div>,
        <div
          style="line-height: 1.612;"
        >
          Hello World, Hello World
        </div>,
      ]
    `);
  });

  it('should not display undefined', () => {
    render(<App2 />);

    // @ts-ignore
    expect(screen.queryByText('undefined')).toBeNull();
  });
});

describe('Input.URL', () => {
  it('should display the title', () => {
    render(<App3 />);

    expect(screen.getByText('Editable').innerHTML).toBe('Editable');
    expect(screen.getByText('Read pretty').innerHTML).toBe('Read pretty');
  });

  it('should display the value of user input', async () => {
    const { container } = render(<App3 />);

    const input = container.querySelector('input') as HTMLInputElement;
    await userEvent.type(input, 'https://www.nocobase.com');
    expect(input.value).toBe('https://www.nocobase.com');
    expect(screen.getByText('https://www.nocobase.com')).toMatchInlineSnapshot(`
      <a
        class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line"
        href="https://www.nocobase.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        https://www.nocobase.com
      </a>
    `);
  });

  it('should display the error when the value is invalid', async () => {
    const { container } = render(<App3 />);

    const input = container.querySelector('input') as HTMLInputElement;
    await userEvent.type(input, 'abcd');
    expect(input.value).toBe('abcd');
    expect(screen.getByText('abcd')).toMatchInlineSnapshot(`
      <a
        class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line"
        href="abcd"
        rel="noopener noreferrer"
        target="_blank"
      >
        abcd
      </a>
    `);

    // show error message
    expect(screen.getByText('The field value is a invalid url').innerHTML).toBe('The field value is a invalid url');
  });
});

describe('Input.JSON', () => {
  it('should display the title', () => {
    render(<App4 />);

    expect(screen.getByText('Editable').innerHTML).toBe('Editable');
    expect(screen.getByText('Read pretty').innerHTML).toBe('Read pretty');
  });

  it('should display the value of user input', async () => {
    const { container } = render(<App4 />);

    const textarea = container.querySelector('textarea') as HTMLTextAreaElement;
    const pre = container.querySelector('pre') as HTMLPreElement;
    fireEvent.change(textarea, { target: { value: '{"name":"nocobase"}' } });
    fireEvent.blur(textarea, { target: { value: '{"name":"nocobase"}' } });
    expect(textarea.value).toBe('{\n  "name": "nocobase"\n}');
    expect(pre).toMatchInlineSnapshot(`
      <pre
        class="ant-json css-4dta7v"
      >
        {
        "name": "nocobase"
      }
      </pre>
    `);
  });

  it('should display the error when the value is invalid', async () => {
    const { container } = render(<App4 />);

    const textarea = container.querySelector('textarea') as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: '{"name":nocobase}' } });
    fireEvent.blur(textarea, { target: { value: '{"name":nocobase}' } });
    expect(screen.getByText(`Unexpected token o in JSON at position 9`).innerHTML).toBe(
      `Unexpected token o in JSON at position 9`,
    );
  });
});
