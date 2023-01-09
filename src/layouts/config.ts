import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

import { lr, navigateTo } from '@/components/RouteUtils';

export const routeList: RouteObject[] = [
  // { index: true, element: navigateTo('p1') },
  {
    index: true,
    element: lr(lazy(() => import('@/pages/Home'))),
  },
  {
    path: 'p1',
    element: lr(lazy(() => import('@/pages/Page1'))),
  },
  {
    path: 'p2',
    element: lr(lazy(() => import('@/pages/Page2'))),
  },
  {
    path: 'p3',
    element: lr(lazy(() => import('@/pages/Page3'))),
  },
  { path: '*', element: navigateTo('/') },
];
