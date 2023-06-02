import React from 'react';
import { render, screen, userEvent } from 'testUtils';
import Cron from '../demos/cron';
import CronSet from '../demos/cron-set';

describe('Cron', () => {
  it('should render correctly', () => {
    render(<Cron />);

    // title
    expect(screen.getByText('Cron')).toBeInTheDocument();

    expect(screen.getByText('Every')).toBeInTheDocument();
    expect(screen.getByText('day')).toBeInTheDocument();
    expect(screen.getByText('at')).toBeInTheDocument();
    expect(screen.getByText('every hour')).toBeInTheDocument();
    expect(screen.getByText('every minute')).toBeInTheDocument();
    expect(screen.getByText('Clear')).toBeInTheDocument();
  });
});

describe('CronSet', () => {
  it('should render correctly', async () => {
    render(<CronSet />);

    // title
    expect(screen.getByText('CronSet')).toBeInTheDocument();

    const selector = document.querySelector('.ant-select-selector');
    expect(selector).toBeInTheDocument();

    await userEvent.click(selector);
    await userEvent.click(screen.getByText('Custom'));

    expect(screen.getByText('Every')).toBeInTheDocument();
    expect(screen.getByText('day')).toBeInTheDocument();
    expect(screen.getByText('Clear')).toBeInTheDocument();
  });
});
