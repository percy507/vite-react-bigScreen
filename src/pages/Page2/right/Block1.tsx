import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

import { PrimaryCard } from '@/components/PrimaryCard';
import type { ECOption } from '@/components/SuperEChart';
import { SuperEChart } from '@/components/SuperEChart';
import { requestRightBlock1 } from '@/services/page2';
import { atomSelectedParams } from '@/store/page2';
import { formatNumber, toAdaptedPx } from '@/utils';

export default function Block1() {
  const params = useAtomValue(atomSelectedParams);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    if (Object.keys(params).length === 0) return;
    requestRightBlock1(params).then(({ data }) => {
      setData(data);
    });
  }, [params]);

  return (
    <PrimaryCard title="模块4 (桑基图)">
      <SuperEChart height={250} options={getChart(data || {})} />
    </PrimaryCard>
  );
}

const getChart = (data): ECOption => {
  const nodeStyle = (color, pos) => {
    return { itemStyle: { color }, label: { position: pos } };
  };
  return {
    empty: !Number.parseFloat(data.v1),
    legend: { show: false },
    series: [
      {
        type: 'sankey',
        emphasis: { focus: 'adjacency' },
        top: toAdaptedPx(18),
        bottom: toAdaptedPx(18),
        left: toAdaptedPx(10),
        right: toAdaptedPx(10),
        nodeGap: toAdaptedPx(20),
        lineStyle: { color: 'gradient', curveness: 0.3 },
        label: {
          formatter(params) {
            return `{a|${params.name}}{b|${formatNumber(params.value as number)}万元}`;
          },
          rich: {
            a: {
              color: '#fff',
              fontSize: toAdaptedPx(16),
              fontWeight: 600,
              padding: [0, toAdaptedPx(12), 0, 0],
            },
            b: {
              color: 'rgba(255,255,255,0.65)',
              fontSize: toAdaptedPx(14),
              fontWeight: 500,
            },
          },
        },
        data: [
          {
            name: '业务111',
            value: data.v1 || 0,
            ...nodeStyle('#47E0DA', 'right'),
          },
          {
            name: '业务222',
            value: data.v2 || 0,
            ...nodeStyle('#8765FE', 'left'),
          },
          {
            name: '业务333',
            value: data.v3 || 0,
            ...nodeStyle('#8765FE', 'left'),
          },
          {
            name: '业务444',
            value: data.v4 || 0,
            ...nodeStyle('#F6D05C', 'left'),
          },
          {
            name: '业务5',
            value: data.v5 || 0,
            ...nodeStyle('#1A88ED', 'left'),
          },
        ],
        links: [
          { source: '业务111', target: '业务222', value: data.v2 || 0 },
          { source: '业务222', target: '业务333', value: data.v3 || 0 },
          { source: '业务111', target: '业务444', value: data.v4 || 0 },
          { source: '业务111', target: '业务5', value: data.v5 || 0 },
        ],
      },
    ],
  };
};
