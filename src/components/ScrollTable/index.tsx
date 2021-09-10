import { ScrollBoard } from '@jiaminghi/data-view-react';
import { merge } from 'lodash';
import React from 'react';

import { toAdaptedPx } from '@/utils/index';

import styles from './style.module.less';

type AlignType = 'left' | 'center' | 'right';

type ScrollTableConfig = {
  header?: string[]; // 表头数据
  headerHeight?: number; // 表头高度
  columnWidth?: number[]; // 列宽度
  align?: AlignType[]; // 列对齐方式
  data: (string | number)[][]; // 表数据
  rowNum?: number; // 表行数
  headerBGC?: string; // 表头背景色
  oddRowBGC?: string; // 奇数行背景色
  evenRowBGC?: string; // 偶数行背景色
  waitTime?: number; // 轮播时间间隔(ms)
  index?: boolean; // 显示行号
  indexHeader?: string; // 行号表头
  carousel?: 'single' | 'page'; // 轮播方式
  hoverPause?: boolean; // 悬浮暂停轮播
};

type ScrollTableProps = {
  config: ScrollTableConfig;
};

export default function ScrollTable(props: ScrollTableProps) {
  const { config } = props;

  const defaultConfig = {
    header: [],
    columnWidth: [],
    data: [],
    align: new Array(100).fill('center'),
    headerHeight: toAdaptedPx(40),
    headerBGC: 'transparent',
    oddRowBGC: '#121c2a',
    evenRowBGC: '#1f313c',
    rowNum: 4,
  };

  const tableConfig: ScrollTableConfig = merge(defaultConfig, config);

  const computeHeight = () => {
    const rowHeight = toAdaptedPx(40);
    return (
      (tableConfig.rowNum || defaultConfig.rowNum) * rowHeight +
      (tableConfig.headerHeight || defaultConfig.headerHeight)
    );
  };

  return (
    <div className={styles.scrollTable}>
      <ScrollBoard config={tableConfig} style={{ height: computeHeight() }} />
    </div>
  );
}
