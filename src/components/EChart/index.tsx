import { useSize } from 'ahooks';
import {
  BarChart,
  CustomChart,
  GaugeChart,
  LineChart,
  PieChart,
  ScatterChart,
} from 'echarts/charts';
import {
  GraphicComponent,
  GridComponent,
  LegendComponent,
  PolarComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { toAdaptedPx } from '@/utils';

import baseOptions from './baseOptions';
import styles from './style.module.less';
import customThemeJSON from './theme.json';
import type { EChartInstance, EChartProps } from './type';

// echarts 按需引入
// 注册必须的组件
echarts.use([
  BarChart,
  LineChart,
  PieChart,
  ScatterChart,
  GaugeChart,
  CustomChart,
  TitleComponent,
  GridComponent,
  PolarComponent, // 极坐标系
  TooltipComponent,
  LegendComponent,
  GraphicComponent,
  CanvasRenderer,
  LabelLayout,
]);

export const echartsGraphic = echarts.graphic;

const autoActionTimer: Record<string, number> = {};

// 自定义echart主题
echarts.registerTheme('myTheme', customThemeJSON);

export default function EChart(props: EChartProps) {
  const { width, height, options, autoAction } = props;

  const chartRef = useRef<HTMLDivElement>(null);
  const [chartInstance, setChartInstance] = useState<EChartInstance | null>(null);
  const pageSize = useSize(document.body);

  const chartOptions = useMemo(() => {
    let temp = options;

    if (autoAction) {
      // 轮播的图表，会禁用图表的鼠标交互
      if (Array.isArray(temp.series) && temp.series.length !== 0) {
        temp.series[0].silent = true;
      }
    }

    return baseOptions.merge(temp);
  }, [autoAction, options]);

  if (!Array.isArray(chartOptions.series)) {
    throw new Error('EChart series must be an array');
  }

  if (chartOptions.series.length === 0) {
    throw new Error('EChart series can not be an empty array');
  }

  const chartType = chartOptions.series[0].type;

  // 目前仅适用于饼图的轮播效果
  const autoActionHandler = useCallback(() => {
    if (!autoAction?.type) return;
    if (!chartInstance) return;
    if (chartType !== 'pie') return;

    const reverseTypeMap = {
      select: 'unselect',
      highlight: 'downplay',
    };

    const dataLength =
      Array.isArray(chartOptions.series) && chartOptions.series.length !== 0
        ? (chartOptions.series[0].data as any[]).length || 0
        : 0; // 数据长度
    let actionItemIndex = 0; // 当前活跃的数据索引

    chartInstance.dispatchAction({
      type: autoAction.type,
      seriesIndex: 0,
      dataIndex: actionItemIndex,
    });

    window.clearInterval(autoActionTimer[autoAction.timerFlag]);
    autoActionTimer[autoAction.timerFlag] = window.setInterval(() => {
      // 对上一个元素执行反向操作
      chartInstance.dispatchAction({
        type: reverseTypeMap[autoAction.type],
        seriesIndex: 0,
      });

      setTimeout(() => {
        if (actionItemIndex < dataLength - 1) {
          actionItemIndex += 1;
        } else {
          actionItemIndex = 0;
        }

        // 对当前元素执行正向操作
        chartInstance.dispatchAction({
          type: autoAction.type,
          seriesIndex: 0,
          dataIndex: actionItemIndex,
        });
      }, 200);
    }, autoAction.interval);
  }, [autoAction, chartInstance, chartOptions.series, chartType]);

  const renderChart = useCallback(() => {
    if (!chartRef.current) return;

    let instance = chartInstance;

    if (!instance) {
      instance = echarts.init(chartRef.current, 'myTheme');
      setChartInstance(instance);
    }

    instance.setOption(chartOptions);
    window.setTimeout(() => {
      instance?.resize();
    }, 1000); // 设置1秒的绘制延迟
  }, [chartInstance, chartOptions]);

  useEffect(() => renderChart(), [renderChart, pageSize]);
  useEffect(() => autoActionHandler(), [autoActionHandler]);
  useEffect(() => {
    return () => {
      if (autoAction) {
        window.clearInterval(autoActionTimer[autoAction.timerFlag]);
      }

      chartInstance?.dispose();
    };
  }, [chartInstance, autoAction]);

  return (
    <div
      ref={chartRef}
      style={{
        width: typeof width === 'number' ? toAdaptedPx(width) : width,
        height: typeof height === 'number' ? toAdaptedPx(height) : height,
      }}
      className={styles.EChart}
    />
  );
}
