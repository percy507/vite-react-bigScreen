declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module '*.json';
declare module '*.css';
declare module '*.less';

declare module '@jiaminghi/data-view-react';
declare module 'postcss-pxtorem';

declare module 'echarts-gl/charts';
declare module 'echarts-gl/components';

interface Window {
  __adaptorWidth: number;
  __adaptorHeight: number;
}

/** vite 打包环境变量 */
declare const VITE_MODE: 'local' | 'dev' | 'test' | 'prod';

interface UIConfig {
  width: number; // UI稿宽度
  height: number; // UI稿高度
  base_num: number; // 换算基数
}
