import './infowindow.less';

import type { MapPointGroup } from '@/components/BigMap/@types/mapData';

import { iw111, iw222, iw333 } from './infowindow';

export const pg1: MapPointGroup = {
  name: 'pg1-name',
  points: new Array(~~(Math.random() * 10 + 2)).fill(0).map((_, index) => {
    return {
      id: index.toString(),
      pos: [118.858957 + Math.random() * 1.06, 29.448859 + Math.random() * 0.9],
      iconData: ['red', 'icon-hashiqi'],
      extendData: [
        ['我是谁', '额外数据'],
        ['呵呵', '😄'],
      ],
      infoWindow: {
        render: iw111,
        data: { key1: index, key2: `${~~(Math.random() * 10000)}人` },
      },
    };
  }),
};

export const pg2: MapPointGroup = {
  name: 'pg2-name',
  points: new Array(~~(Math.random() * 10 + 2)).fill(0).map((_, index) => {
    return {
      id: index.toString(),
      pos: [118.858957 + Math.random() * 1.06, 29.448859 + Math.random() * 0.9],
      iconData: ['yellow', 'icon-houzi'],
      infoWindow: {
        render: iw222,
        data: { key1: index, key2: `${~~(Math.random() * 10000)}吨` },
      },
    };
  }),
};

export const pg3: MapPointGroup = {
  name: 'pg3-name',
  points: new Array(~~(Math.random() * 10 + 2)).fill(0).map((_, index) => {
    return {
      id: index.toString(),
      pos: [118.858957 + Math.random() * 1.06, 29.448859 + Math.random() * 0.9],
      iconData: ['green', 'icon-maotouying'],
      infoWindow: {
        render: iw333,
        data: { key1: index, key2: `${~~(Math.random() * 10000)}$` },
      },
    };
  }),
};
