import { createContext } from 'react';
import type { ToolbarProps } from './types';

export const ToolbarContext = createContext<ToolbarProps>(null);
export const CalendarContext = createContext(null);
