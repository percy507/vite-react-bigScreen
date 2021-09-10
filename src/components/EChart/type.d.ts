import type {
  BarSeriesOption,
  CustomSeriesOption,
  GaugeSeriesOption,
  LineSeriesOption,
  PieSeriesOption,
  ScatterSeriesOption,
} from 'echarts/charts';
import type {
  GraphicComponentOption,
  GridComponentOption,
  LegendComponentOption,
  PolarComponentOption,
  TitleComponentOption,
  TooltipComponentOption,
} from 'echarts/components';
import type * as echarts from 'echarts/core';

export type EChartInstance = echarts.ECharts;

// 系列类型的定义后缀都为 SeriesOption
// 组件类型的定义后缀都为 ComponentOption
// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | PieSeriesOption
  | GaugeSeriesOption
  | ScatterSeriesOption
  | CustomSeriesOption
  | TitleComponentOption
  | GridComponentOption
  | PolarComponentOption
  | TooltipComponentOption
  | GraphicComponentOption
  | LegendComponentOption
>;

type AutoAction = {
  type: 'select' | 'highlight';
  /** 轮播间隔，单位毫秒 */
  interval: number;
  /** 用来标记定时器，必须唯一 */
  timerFlag: string;
};

export type EChartProps = {
  /** 图表容器宽度 */
  width?: number;
  /** 图表容器高度 */
  height?: number;
  /** 图表配置 */
  options: ECOption;
  /** 图表自动轮播配置 */
  autoAction?: AutoAction;
};
