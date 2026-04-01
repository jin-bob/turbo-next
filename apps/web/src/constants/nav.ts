import { MenuItem } from '@/src/types';
import { Binoculars, Home, Settings, Table } from 'lucide-react';

export const NAV_BASE = '/dashboard';

export const NAV_ITEMS: Array<MenuItem> = [
  {
    id: '0',
    icon: Home,
    to: '/',
    title: 'Home',
  },
  {
    id: '1',
    icon: Binoculars,
    to: '/courses',
    title: 'Courses',
  },
  {
    id: '2',
    icon: Table,
    to: '/events',
    title: 'Events',
  },
];

export const MOBILE_NAV_ITEMS: Array<MenuItem> = [
  ...NAV_ITEMS,
  {
    id: '3',
    icon: Settings,
    to: '/settings',
    title: 'Settings',
  },
];
