import { cloneDeep, merge } from 'lodash';

import { toAdaptedPx } from '@/utils/index';

import type { ECOption } from './index';

// 直角坐标系样式
const getAxisStyle = () => {
  const axisStyle = {
    // 坐标轴名称
    nameTextStyle: {
      color: 'rgba(255,255,255,0.65)',
      fontSize: toAdaptedPx(12),
    },
    // 坐标轴轴线
    axisLine: {
      lineStyle: {
        color: 'rgba(79, 133, 149, 0.4)',
        width: toAdaptedPx(2),
      },
    },
    // 坐标轴刻度标签
    axisLabel: {
      color: 'rgba(255,255,255,0.65)',
      margin: toAdaptedPx(8),
      fontSize: toAdaptedPx(12),
      lineHeight: toAdaptedPx(14),
    },
    // 坐标轴在 grid 区域中的分隔线
    splitLine: {
      show: false,
      lineStyle: { color: 'rgba(255, 255, 255, 0.15)' },
    },
  };

  return {
    xAxisStyle: merge(cloneDeep(axisStyle), {
      axisLabel: {
        // 默认会采用标签不重叠的策略间隔显示标签，设置成 0 强制显示所有标签
        interval: 'auto',
        color: 'rgba(255,255,255,0.85)',
      },
    }),
    yAxisStyle: cloneDeep(axisStyle),
  };
};

// 图例样式
const getLegendStyle = () => {
  return {
    selectedMode: false,
    padding: toAdaptedPx(5),
    itemGap: toAdaptedPx(10),
    itemWidth: toAdaptedPx(17),
    itemHeight: toAdaptedPx(17),
    textStyle: {
      color: 'rgba(255, 255, 255, 1)',
      fontSize: toAdaptedPx(20),
      overflow: 'truncate',
    },
  };
};

// 图标样式
const getChartStyle = () => {
  const { xAxisStyle, yAxisStyle } = getAxisStyle();
  const legendStyle = getLegendStyle();

  return {
    line: {
      legend: legendStyle,
      xAxis: cloneDeep(xAxisStyle),
      yAxis: cloneDeep(yAxisStyle),
    },
    bar: {
      legend: merge(legendStyle, {
        itemWidth: toAdaptedPx(10),
        itemHeight: toAdaptedPx(10),
        textStyle: {
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: toAdaptedPx(14),
          overflow: 'truncate',
        },
      }),
      xAxis: cloneDeep(xAxisStyle),
      yAxis: cloneDeep(yAxisStyle),
    },
    pie: {
      legend: legendStyle,
      tooltip: {
        show: false,
        className: 'echarts-tooltip',
        padding: toAdaptedPx(6),
        textStyle: {
          fontSize: toAdaptedPx(14),
        },
      },
    },
  };
};

const customMerge = (defaultOptions: ECOption, options: ECOption) => {
  const { xAxisStyle, yAxisStyle } = getAxisStyle();

  if (Array.isArray(options.xAxis)) {
    options.xAxis = options.xAxis.map((el) => merge(cloneDeep(xAxisStyle), el));
  }

  if (Array.isArray(options.yAxis)) {
    options.yAxis = options.yAxis.map((el) => merge(cloneDeep(yAxisStyle), el));
  }

  return merge(defaultOptions, options);
};

export default {
  merge: (options: ECOption) => {
    const { series } = options;

    if (Array.isArray(series) && series.length !== 0) {
      const chartType = series[0].type!;

      if (chartType === 'line') {
        return customMerge(getChartStyle().line as ECOption, options);
      } else if (['bar', 'pictorialBar'].includes(chartType)) {
        return customMerge(getChartStyle().bar as ECOption, options);
      } else if (chartType === 'pie') {
        return customMerge(getChartStyle().pie as ECOption, options);
      }
    }

    return options;
  },
};
