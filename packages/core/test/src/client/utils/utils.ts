import { expect } from 'vitest';
import { waitFor, screen } from '@testing-library/react';

// @ts-ignore
export const expectNoTsError: any = expect;

export const WaitApp = async () => {
  await waitFor(() => {
    expectNoTsError(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });

  const loadError = screen.queryByText('Load Plugin Error');
  if (loadError) {
    expectNoTsError(screen.queryByText('Load Plugin Error')).not.toBeInTheDocument();
  }

  const renderError = screen.queryByText('Render Failed');
  if (renderError) {
    expectNoTsError(screen.queryByText('Render Failed')).not.toBeInTheDocument();
  }
};
