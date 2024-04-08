import { addAppVersion } from '../addAppVersion';

describe('addAppVersion', () => {
  it('should add appVersion to schema', () => {
    const schema = {
      properties: {
        prop1: {},
        prop2: {},
      },
    };

    const appVersion = '1.0.0';

    const result = addAppVersion(schema, appVersion);

    expect(result['x-app-version']).toBe(appVersion);
  });

  it('should add appVersion to nested schemas', () => {
    const schema = {
      properties: {
        prop1: {
          properties: {
            nestedProp1: {},
            nestedProp2: {},
          },
        },
        prop2: {},
      },
    };

    const appVersion = '1.0.0';

    const result = addAppVersion(schema, appVersion);

    expect(result['x-app-version']).toBe(appVersion);
    expect(result.properties.prop1['x-app-version']).toBe(appVersion);
    expect(result.properties.prop1.properties.nestedProp1['x-app-version']).toBe(appVersion);
    expect(result.properties.prop1.properties.nestedProp2['x-app-version']).toBe(appVersion);
    expect(result.properties.prop2['x-app-version']).toBe(appVersion);
  });

  it('should handle empty schema', () => {
    const schema = null;
    const appVersion = '1.0.0';

    const result = addAppVersion(schema, appVersion);

    expect(result).toBeUndefined();
  });

  it('should not override existing x-app-version', () => {
    const schema = {
      'x-app-version': '0.0.1',
      properties: {
        prop1: {},
        prop2: {},
      },
    };

    const appVersion = '1.0.0';

    const result = addAppVersion(schema, appVersion);

    expect(result['x-app-version']).toBe('0.0.1');
  });
});
