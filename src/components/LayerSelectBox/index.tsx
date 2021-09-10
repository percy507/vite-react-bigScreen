import { Checkbox } from 'antd';
import React, { useEffect, useState } from 'react';

import IconFont from '@/components/IconFont';

import styles from './style.module.less';

const CheckboxGroup = Checkbox.Group;

type LayerSelectBoxOption = {
  label: string;
  value: number;
  iconType?: string;
  iconStyle?: React.CSSProperties;
};

type LayerSelectBoxProps = {
  /** 是否是单选模式, 默认多选模式 */
  singleMode?: boolean;
  options: LayerSelectBoxOption[];
  value?: number[];
  onChange?: (val: number[]) => void;
  style?: React.CSSProperties;
};

export default function LayerSelectBox(props: LayerSelectBoxProps) {
  const {
    singleMode = false,
    options,
    value = [],
    onChange = () => {},
    style = {},
  } = props;

  if (!Array.isArray(options)) {
    throw new Error('LayerSelectBox: options must be an array');
  }

  const [checkedList, setCheckedList] = useState<number[]>(value);

  const reOptions = options.map((el) => {
    return {
      label: (
        <div className={styles.customCheckbox}>
          {el.iconType ? (
            <IconFont type={el.iconType} style={el.iconStyle || {}} />
          ) : null}
          <span>{el.label}</span>
        </div>
      ),
      value: el.value,
    };
  });

  const __onChange = (val: number[]) => {
    setCheckedList((oldVal) => {
      let targetVal = val;

      if (singleMode && val.length > 1) {
        targetVal = val.filter((el) => !oldVal.includes(el));
      }

      onChange(targetVal);
      return targetVal;
    });
  };

  useEffect(() => {
    if (value.toString() !== checkedList.toString()) {
      setCheckedList(value);
    }
  }, [value]);

  useEffect(() => {}, [checkedList]);

  return (
    <div className={styles.LayerSelectBox} style={style}>
      <CheckboxGroup
        options={reOptions}
        value={checkedList}
        onChange={(val) => __onChange(val as number[])}
      />
    </div>
  );
}
