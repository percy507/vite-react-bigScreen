import type { MapPointGroup } from '@/components/BigMap/@types/mapData';
import {
  atomMapBlockData,
  atomMapDataConfig,
  atomMapOptions,
  atomMarkerRenderType,
  useResetRecoilState,
  useSetRecoilState,
} from '@/recoil/map';

/**
 * Well, when update recoil state with a little complex logic, we use custom hooks
 */

/** reset all map state */
export function useResetAllMapState() {
  const resetMapOptions = useResetRecoilState(atomMapOptions);
  const resetMarkerRenderType = useResetRecoilState(atomMarkerRenderType);
  const resetMapBlockData = useResetRecoilState(atomMapBlockData);
  const resetMapDataConfig = useResetRecoilState(atomMapDataConfig);

  return () => {
    resetMapOptions();
    resetMarkerRenderType();
    resetMapBlockData();
    resetMapDataConfig();
  };
}

/** 以追加的形式向地图添加一个打点群组 */
export function useAddMapPointGroup() {
  const setMapDataConfig = useSetRecoilState(atomMapDataConfig);

  return (payload: MapPointGroup) => {
    setMapDataConfig((currVal) => {
      const { pointGroups } = currVal;
      return {
        ...currVal,
        pointGroups: [...(pointGroups || []), payload],
      };
    });
  };
}

/** 清除原有的所有群组，然后向地图添加一个打点群组 */
export function useCoverMapPointGroup() {
  const setMapDataConfig = useSetRecoilState(atomMapDataConfig);

  return (payload: MapPointGroup) => {
    setMapDataConfig((currVal) => {
      return {
        ...currVal,
        pointGroups: [payload],
      };
    });
  };
}

/** 从地图中删除指定的一个打点群组 */
export function useDeleteMapPointGroup() {
  const setMapDataConfig = useSetRecoilState(atomMapDataConfig);

  return (payload: MapPointGroup) => {
    setMapDataConfig((currVal) => {
      const { pointGroups } = currVal;
      return {
        ...currVal,
        pointGroups: (pointGroups || []).filter((el) => el.name !== payload.name),
      };
    });
  };
}

/** 从地图中删除所有的打点群组 */
export function useDeleteAllMapPointGroup() {
  const setMapDataConfig = useSetRecoilState(atomMapDataConfig);

  return () => {
    setMapDataConfig((currVal) => {
      return {
        ...currVal,
        pointGroups: [],
      };
    });
  };
}
