import { useState } from 'react';

import { BigMap } from '@/components/BigMap';
import { LayerSelectBox } from '@/components/LayerSelectBox';
import type { ValueModel } from '@/components/LayerSelectBoxGroup';
import { LayerSelectBoxGroup } from '@/components/LayerSelectBoxGroup';
import { toAdaptedPx } from '@/utils';

import { pg1, pg2, pg3 } from './data';
import {
  useAddMapPointGroup,
  useCoverMapPointGroup,
  useDeleteAllMapPointGroup,
} from './mapHooks';
import styles from './style.module.less';

const pointMap: any = {
  1: pg1,
  2: pg2,
  3: pg3,
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
      iconType: 'icon-hashiqi',
    },
    {
      label: '点位组2',
      value: 2,
      iconType: 'icon-houzi',
    },
    {
      label: '点位组3',
      value: 3,
      iconType: 'icon-maotouying',
    },
  ];

  const layerGroupOptions = [
    {
      label: '图层组1',
      children: [
        {
          label: '图层11',
          value: 1.1,
          iconType: 'icon-pangxie',
        },
        {
          label: '图层12',
          value: 1.2,
          iconType: 'icon-pangxie',
        },
        {
          label: '图层13',
          value: 1.3,
          iconType: 'icon-pangxie',
        },
      ],
    },
    {
      label: '图层组2',
      iconType: 'icon-pangxie',
      children: [
        {
          label: '图层21',
          value: 2.1,
          iconType: 'icon-pangxie',
        },
        {
          label: '图层22',
          value: 2.2,
          iconType: 'icon-pangxie',
        },
        {
          label: '图层23',
          value: 2.3,
          iconType: 'icon-pangxie',
        },
      ],
    },
    {
      label: '图层3',
      value: 3,
      iconType: 'icon-pangxie',
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
