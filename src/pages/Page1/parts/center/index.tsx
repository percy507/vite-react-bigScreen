import React, { useState } from 'react';

import LayerSelectBox from '@/components/LayerSelectBox';
import type { ValueModel } from '@/components/LayerSelectBoxGroup';
import LayerSelectBoxGroup from '@/components/LayerSelectBoxGroup';
import { toAdaptedPx } from '@/utils';

import styles from './style.module.less';

export default function Center() {
  const [selectedLayer, setSelectedLayer] = useState<number[]>([]);
  const [selectedGroupLayer, setSelectedGroupLayer] = useState<ValueModel>();

  const layerOptions = [
    {
      label: '图层1',
      value: 1,
    },
    {
      label: '图层222',
      value: 2,
    },
    {
      label: '图层3',
      value: 3,
      iconType: 'icon-dianying',
    },
    {
      label: '图层4',
      value: 4,
      iconType: 'icon-dianying',
      iconStyle: {
        fontSize: toAdaptedPx(24),
      },
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
  };

  const handleLayerGroupChange = (val: ValueModel) => {
    console.log(val);
    setSelectedGroupLayer(val);
  };

  return (
    <div className={styles.Center}>
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
