import { atom } from 'recoil';
export {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';

import type {
  MapBlockData,
  MapDataConfig,
  MapOptions,
  MarkerRenderType,
} from '@/components/BigMap/@types/mapData';

export const atomMapOptions = atom<MapOptions>({
  key: 'mapOptions',
  default: {
    zoom: 8.8,
    center: [119.24431, 29.980441],
  },
});

export const atomMarkerRenderType = atom<MarkerRenderType>({
  key: 'markerRenderType',
  default: 'cluster',
});

export const atomMapBlockData = atom<MapBlockData>({
  key: 'mapBlockData',
  default: [],
});

export const atomMapDataConfig = atom<MapDataConfig>({
  key: 'mapDataConfig',
  default: {
    pointGroups: [],
  },
});
