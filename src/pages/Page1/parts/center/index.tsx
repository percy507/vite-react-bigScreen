import React, { useState } from 'react';

import BigMap from '@/components/BigMap';
import LayerSelectBox from '@/components/LayerSelectBox';
import type { ValueModel } from '@/components/LayerSelectBoxGroup';
import LayerSelectBoxGroup from '@/components/LayerSelectBoxGroup';
import {
  useAddMapPointGroup,
  useCoverMapPointGroup,
  useDeleteAllMapPointGroup,
} from '@/hooks/mapHooks';
import { toAdaptedPx } from '@/utils';

import { randomPointGroup } from './data';
import styles from './style.module.less';

const pointMap: any = {
  1: randomPointGroup(['red', 'icon-yixuemeirongke']),
  2: randomPointGroup(['yellow', 'icon-a-ziyuan3']),
  3: randomPointGroup(['green', 'icon-qiche']),
};

export default function Center() {
  const [selectedLayer, setSelectedLayer] = useState<number[]>([]);
  const [selectedGroupLayer, setSelectedGroupLayer] = useState<ValueModel>();

  const addMapPointGroup = useAddMapPointGroup();
  const coverMapPointGroup = useCoverMapPointGroup();
  const deleteAllMapPointGroup = useDeleteAllMapPointGroup();

  const layerOptions = [
    {
      label: '点位组1',
      value: 1,
      iconType: 'icon-anquan',
    },
    {
      label: '点位组2',
      value: 2,
      iconType: 'icon-dianying',
    },
    {
      label: '点位组3',
      value: 3,
      iconType: 'icon-paizhao',
    },
  ];

  const layerGroupOptions = [
    {
      label: '图层组1',
      children: [
        {
          label: '图层11',
          value: 1.1,
          iconType: 'icon-dianying',
        },
        {
          label: '图层12',
          value: 1.2,
          iconType: 'icon-dianying',
        },
        {
          label: '图层13',
          value: 1.3,
          iconType: 'icon-dianying',
        },
      ],
    },
    {
      label: '图层组2',
      iconType: 'icon-dianying',
      children: [
        {
          label: '图层21',
          value: 2.1,
          iconType: 'icon-dianying',
        },
        {
          label: '图层22',
          value: 2.2,
          iconType: 'icon-dianying',
        },
        {
          label: '图层23',
          value: 2.3,
          iconType: 'icon-dianying',
        },
      ],
    },
    {
      label: '图层3',
      value: 3,
      iconType: 'icon-dianying',
      iconStyle: {
        fontSize: toAdaptedPx(24),
      },
    },
  ];

  const handleLayerChange = (val: number[]) => {
    console.log(val);
    setSelectedLayer(val);

    val.forEach((v, index) => {
      if (index === 0) coverMapPointGroup(pointMap[v]);
      else addMapPointGroup(pointMap[v]);
    });

    if (val.length === 0) deleteAllMapPointGroup();
  };

  const handleLayerGroupChange = (val: ValueModel) => {
    console.log(val);
    setSelectedGroupLayer(val);
  };

  return (
    <div className={styles.Center}>
      <BigMap />
      <LayerSelectBox
        options={layerOptions}
        value={selectedLayer}
        onChange={handleLayerChange}
      />

      <LayerSelectBoxGroup
        options={layerGroupOptions}
        value={selectedGroupLayer}
        onChange={handleLayerGroupChange}
        style={{ top: toAdaptedPx(110), bottom: 'unset' }}
      />
    </div>
  );
}
