import React from 'react';
import { render, screen } from '@nocobase/test/client';
import { CollectionDataSourceProvider, useCollectionDataSourceName } from '../../data-block';

describe('CollectionDataSourceProvider', () => {
  test('should work', () => {
    const Demo = () => {
      const name = useCollectionDataSourceName();
      return <div data-testid="content">{name}</div>;
    };

    render(
      <CollectionDataSourceProvider dataSource={'test'}>
        <Demo />
      </CollectionDataSourceProvider>,
    );

    expect(screen.getByTestId('content')).toHaveTextContent('test');
  });
});
