import { atomWithReset } from 'jotai/utils';

import type {
  MapBlockData,
  MapDataConfig,
  MapOptions,
  MarkerRenderType,
} from '@/components/BigMap/@types/mapData';

export const atomMapOptions = atomWithReset<MapOptions>({
  zoom: 8.8,
  center: [119.24431, 29.980441],
});

export const atomMarkerRenderType = atomWithReset<MarkerRenderType>('cluster');
export const atomMapBlockData = atomWithReset<MapBlockData>([]);
export const atomMapDataConfig = atomWithReset<MapDataConfig>({
  pointGroups: [],
});
