import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';

import type {
  MapBlockData,
  MapDataConfig,
  MapOptions,
  MarkerRenderType,
} from '@/components/BigMap/@types/mapData';

interface UserInfo {
  permission: string[];
  [key: string]: any;
}

export const atomUserInfo = atom<UserInfo>({
  permission: [],
});

export const atomUserPermission = atom<string[]>((get) => {
  return get(atomUserInfo).permission || [];
});

export const atomMapOptions = atomWithReset<MapOptions>({
  zoom: 8.8,
  center: [119.24431, 29.980441],
});

export const atomMarkerRenderType = atomWithReset<MarkerRenderType>('cluster');
export const atomMapBlockData = atomWithReset<MapBlockData>([]);
export const atomMapDataConfig = atomWithReset<MapDataConfig>({
  pointGroups: [],
});
