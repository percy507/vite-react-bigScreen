import { registerMap } from 'echarts/core';

import map330000 from './assets/330000_full.json';

export const codeMap: Record<string, string> = {
  浙江省: '330000',
  杭州市: '330100',
  宁波市: '330200',
  温州市: '330300',
  嘉兴市: '330400',
  湖州市: '330500',
  绍兴市: '330600',
  金华市: '330700',
  衢州市: '330800',
  舟山市: '330900',
  台州市: '331000',
  丽水市: '331100',
};

registerMap('330000', map330000 as any);
registerMap('330100', digSubGeoJSON(330100) as any);
registerMap('330200', digSubGeoJSON(330200) as any);
registerMap('330300', digSubGeoJSON(330300) as any);
registerMap('330400', digSubGeoJSON(330400) as any);
registerMap('330500', digSubGeoJSON(330500) as any);
registerMap('330600', digSubGeoJSON(330600) as any);
registerMap('330700', digSubGeoJSON(330700) as any);
registerMap('330800', digSubGeoJSON(330800) as any);
registerMap('330900', digSubGeoJSON(330900) as any);
registerMap('331000', digSubGeoJSON(331000) as any);
registerMap('331100', digSubGeoJSON(331100) as any);

function digSubGeoJSON(adcode: number) {
  return {
    type: 'FeatureCollection',
    features: [map330000.features.find((el) => el.properties.adcode === adcode)],
  };
}

export function getHangZhouCenter() {
  return map330000.features.find((el) => el.properties.name === '杭州市')!.properties
    .center;
}

export function getOtherCityCenterList() {
  const result: number[][] = [];
  map330000.features.forEach((el) => {
    if (el.properties.name !== '杭州市') result.push(el.properties.center);
  });
  return result;
}

export function getNameByCenter(center: number[]) {
  return map330000.features.find(
    (el) => JSON.stringify(el.properties.center) === JSON.stringify(center),
  )!.properties.name;
}
