import { ScrollBoard } from '@jiaminghi/data-view-react';
import { merge } from 'lodash';

import { Empty } from '@/components/Empty';
import { toAdaptedPx } from '@/utils/index';

import styles from './style.module.less';

export interface ScrollTableConfig {
  /** 表头数据 */
  header?: string[];
  /** 表头高度，默认值 40px */
  headerHeight?: number;
  /** 列宽度 */
  columnWidth?: number[];
  /** 列对齐方式，默认全部左对齐 */
  align?: ('left' | 'center' | 'right')[];
  /** 表数据 */
  data: (string | number)[][];
  /** 表行数，默认 4 行 */
  rowNum?: number;
  /** 表头背景色，默认 transparent */
  headerBGC?: string;
  /** 奇数行背景色，默认 #121c2a */
  oddRowBGC?: string;
  /** 偶数行背景色，默认 #1f313c */
  evenRowBGC?: string;
  /** 轮播时间间隔(ms)，默认 2000 */
  waitTime?: number;
  /** 是否显示行号，默认 false */
  index?: boolean;
  /** 行号表头，默认 `#` */
  indexHeader?: string;
  /** 轮播方式，默认 single */
  carousel?: 'single' | 'page';
  /** 悬浮暂停轮播，默认 true */
  hoverPause?: boolean;
}

export interface ScrollTableProps {
  config: ScrollTableConfig;
}

export function ScrollTable(props: ScrollTableProps) {
  const { config } = props;

  const defaultConfig = {
    header: [],
    columnWidth: [],
    data: [],
    align: new Array(100).fill('left'),
    headerHeight: toAdaptedPx(40),
    headerBGC: 'transparent',
    oddRowBGC: '#121c2a',
    evenRowBGC: '#1f313c',
    rowNum: 4,
  };

  const tableConfig: ScrollTableConfig = merge(defaultConfig, config);

  tableConfig.data = (tableConfig.data || []).map((row) =>
    row.map((el) => {
      let frag = document
        .createRange()
        .createContextualFragment(`${el !== null ? el : ''}`);
      return `<span title="${frag.textContent}">${el}</span>`;
    }),
  );

  const computeHeight = () => {
    const rowHeight = toAdaptedPx(40);
    const headerHeight = tableConfig.headerHeight || defaultConfig.headerHeight;
    const contentHeight = (tableConfig.rowNum || defaultConfig.rowNum) * rowHeight;

    return { headerHeight, contentHeight, tableHeight: headerHeight + contentHeight };
  };

  const { headerHeight, contentHeight, tableHeight } = computeHeight();
  const empty = config.data.length === 0;

  return (
    <div className={styles.scrollTable}>
      <ScrollBoard
        config={tableConfig}
        style={{ height: empty ? headerHeight : tableHeight }}
      />
      {empty && <Empty imageWidth={toAdaptedPx(120)} style={{ height: contentHeight }} />}
    </div>
  );
}
