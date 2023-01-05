import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

import { PrimaryCard } from '@/components/PrimaryCard';
import type { ECOption } from '@/components/SuperEChart';
import { linearGradient, SuperEChart } from '@/components/SuperEChart';
import { requestLeftBlock2 } from '@/services/page2';
import { atomSelectedParams } from '@/store/page2';
import { toAdaptedPx } from '@/utils';

// import styles from './Block2.module.less'

export default function Block2() {
  const params = useAtomValue(atomSelectedParams);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    if (Object.keys(params).length === 0) return;
    requestLeftBlock2(params).then(({ data }) => {
      setData(data);
    });
  }, [params]);

  return (
    <PrimaryCard title="模块2">
      <SuperEChart height={250} options={getChart(data || [], 1, true)} />
    </PrimaryCard>
  );
}

function getChart(data: any[], zoom: number, showDataZoom = false): ECOption {
  const px = (num: number) => toAdaptedPx(num * zoom);
  const legendColors = ['#3AC7F3', '#DB9E29', '#5155E9'];

  return {
    empty: data.length === 0,
    grid: {
      top: px(65),
      bottom: showDataZoom ? px(30) : 0,
      right: px(20),
      left: px(20),
      containLabel: true,
    },
    legend: {
      icon: 'rect',
      right: px(10),
      data: [
        { name: '业务111', itemStyle: { color: legendColors[0] } },
        { name: '业务222', itemStyle: { color: legendColors[1] } },
      ],
    },
    xAxis: {
      // name: '年份',
      type: 'category',
      boundaryGap: true,
      data: data.map((el: any) => el.year),
      axisLabel: { interval: 0, color: 'rgba(255,255,255,0.65)' },
      axisTick: { show: false },
    },
    yAxis: [
      {
        name: '单位：套',
        type: 'value',
        // splitNumber: 3,
        axisLabel: { show: true },
        axisLine: { show: false },
        splitLine: { show: true },
      },
      {
        name: '单位：万元',
        type: 'value',
        // splitNumber: 3,
        axisLabel: { show: true },
        axisLine: { show: false },
        splitLine: { show: false },
      },
    ],
    tooltip: {
      trigger: 'axis',
      padding: px(10),
      className: 'chart-tooltip1',
      formatter(params) {
        const { axisValue } = (Array.isArray(params) ? params[0] : params) as any;
        const item = data.find((el: any) => el.year == axisValue);
        return `<div>
          <div role="item">
            <span role="dot" style="background:${legendColors[0]}"></span>
            <span>业务111：${item.v1 || 0}套</span>
          </div>
          <div role="item">
            <span role="dot" style="background:${legendColors[1]}"></span>
            <span>业务222：${item.v2 || 0}套</span>
          </div>
        </div>`;
      },
    },
    dataZoom: showDataZoom
      ? [
          {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            bottom: px(8),
            height: px(12),
            start: 0,
            end: Math.min(1, 4 / data.length) * 100,
            zoomLock: true,
            brushSelect: false,
            moveHandleSize: toAdaptedPx(10),
            handleStyle: { color: 'rgba(0, 133, 255, 0.8)' },
            borderColor: 'rgba(0, 133, 255, 0.5)',
            backgroundColor: 'rgba(0, 133, 255, 0.05)',
            showDetail: false,
            showDataShadow: false,
          },
        ]
      : undefined,
    series: [
      {
        name: '业务111',
        data: data.map((el: any) => el.v1),
        type: 'bar',
        barWidth: px(16),
        itemStyle: {
          color: new linearGradient(0, 1, 0, 0, [
            { offset: 0, color: '#2ED3D3' },
            { offset: 0.27, color: '#3AC7F3' },
            { offset: 1, color: '#0B59A2' },
          ]),
        },
      },
      {
        name: '业务222',
        data: data.map((el: any) => el.v2),
        type: 'bar',
        barWidth: px(16),
        itemStyle: {
          color: new linearGradient(0, 1, 0, 0, [
            { offset: 0, color: '#DB9E29' },
            { offset: 1, color: '#F3D226' },
          ]),
        },
      },
    ],
  };
}
