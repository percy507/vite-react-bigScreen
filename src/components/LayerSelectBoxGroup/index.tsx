import React from 'react';

import CheckboxTree from './CheckboxTree';
import styles from './style.module.less';

export interface BaseOption {
  label: string;
  value: number;
  iconType?: string;
  iconStyle?: React.CSSProperties;
}

export interface LayerSelectBoxGroupOption {
  label: string;
  value?: number;
  iconType?: string;
  iconStyle?: React.CSSProperties;
  children?: BaseOption[];
}

export interface ValueModel {
  treeKey: number;
  checkedList: number[];
}

interface LayerSelectBoxGroupProps {
  /** 子列表是否是单选模式, 默认多选模式 */
  singleMode?: boolean;
  options: LayerSelectBoxGroupOption[];
  value?: ValueModel;
  onChange?: (val: ValueModel) => void;
  style?: React.CSSProperties;
}

export function LayerSelectBoxGroup(props: LayerSelectBoxGroupProps) {
  const {
    singleMode = false,
    options,
    value = { treeKey: 0, checkedList: [] },
    onChange = () => {},
    style = {},
  } = props;

  if (!Array.isArray(options)) {
    throw new Error('LayerSelectBoxGroup: options must be an array');
  }

  return (
    <div className={styles.LayerSelectBoxGroup} style={style}>
      {options.map((option, index) => {
        return (
          <CheckboxTree
            key={index}
            treeKey={index}
            singleMode={singleMode}
            value={value}
            onChange={(val) => {
              if (typeof onChange !== 'function') return;
              onChange(val);
            }}
            item={option}
          />
        );
      })}
    </div>
  );
}
