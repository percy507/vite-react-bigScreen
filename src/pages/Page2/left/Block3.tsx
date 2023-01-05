import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

import { PrimaryCard } from '@/components/PrimaryCard';
import type { ECOption } from '@/components/SuperEChart';
import { linearGradient, SuperEChart } from '@/components/SuperEChart';
import { requestLeftBlock3 } from '@/services/page2';
import { atomSelectedParams } from '@/store/page2';
import { formatNumber, toAdaptedPx } from '@/utils';

// import styles from './Block3.module.less'

export default function Block3() {
  const params = useAtomValue(atomSelectedParams);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    if (Object.keys(params).length === 0) return;
    requestLeftBlock3(params).then(({ data }) => {
      setData(data);
    });
  }, [params]);

  return (
    <PrimaryCard title="模块3">
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
        { name: '业务', itemStyle: { color: legendColors[0] } },
        { name: '业务2', itemStyle: { color: legendColors[1] } },
        { name: '金额', itemStyle: { color: legendColors[2], borderWidth: 0 } },
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
        name: '单位：笔/张',
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
            <span>业务：${item.v1 || 0}笔</span>
          </div>
          <div role="item">
            <span role="dot" style="background:${legendColors[1]}"></span>
            <span>业务：${item.v2 || 0}笔</span>
          </div>
          <div role="item">
            <span role="dot" style="background:${legendColors[2]}"></span>
            <span>金额：${formatNumber(item.v3 || 0)}万元</span>
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
        name: '业务',
        data: data.map((el: any) => el.v1),
        type: 'pictorialBar',
        barGap: '30%',
        // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        itemStyle: {
          color: new linearGradient(0, 1, 0, 0, [
            { offset: 0, color: '#2ED3D3' },
            { offset: 0.27, color: '#3AC7F3' },
            { offset: 1, color: '#0B59A2' },
          ]),
        },
        barWidth: px(26),
      },
      {
        name: '业务2',
        data: data.map((el: any) => el.v2),
        type: 'pictorialBar',
        barGap: '30%',
        // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        itemStyle: {
          color: new linearGradient(0, 1, 0, 0, [
            { offset: 0, color: '#DB9E29' },
            { offset: 1, color: '#F3D226' },
          ]),
        },
        barWidth: px(26),
      },
      {
        name: '金额',
        data: data.map((el: any) => el.v3),
        type: 'line',
        yAxisIndex: 1,
        showSymbol: true,
        symbol: 'circle',
        itemStyle: { color: '#1B7FBE', borderWidth: px(1.5), borderColor: '#fff' },
        lineStyle: {
          width: px(2),
          color: new linearGradient(0, 1, 0, 0, [
            { offset: 0, color: 'rgba(81, 85, 233, 1)' },
            { offset: 1, color: 'rgba(115, 161, 255, 1)' },
          ]),
        },
      },
    ],
  };
}
