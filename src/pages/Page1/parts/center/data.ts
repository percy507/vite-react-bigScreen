import type { MapPoint, MapPointGroup } from '@/components/BigMap/@types/mapData';

function randomList(iconData: any): MapPoint[] {
  return new Array(~~(Math.random() * 10 + 2)).fill(0).map((_, index) => {
    return {
      id: index.toString(),
      pos: [118.858957 + Math.random() * 1.06, 29.448859 + Math.random() * 0.9],
      iconData,
    };
  });
}

export function randomPointGroup(iconData: any): MapPointGroup {
  return {
    name: Math.random().toString(),
    points: randomList(iconData),
  };
}
