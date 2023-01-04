import { Checkbox } from 'antd';
import { useEffect, useMemo, useRef, useState } from 'react';

import { IconFont } from '@/components/IconFont';
import { toAdaptedPx } from '@/utils';

import type { LayerSelectBoxGroupOption, ValueModel } from './index';
import styles from './style.module.less';

const CheckboxGroup = Checkbox.Group;

type CheckboxTreeProps = {
  treeKey: number;
  singleMode?: boolean;
  item: LayerSelectBoxGroupOption;
  value: ValueModel;
  onChange: (val: ValueModel) => void;
};

export default function CheckboxTree(props: CheckboxTreeProps) {
  const { treeKey, singleMode = false, item, value, onChange } = props;

  const [checkedList, setCheckedList] = useState<number[]>(value.checkedList);
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const checkedListRef = useRef(checkedList);

  checkedListRef.current = checkedList;

  const subList = useMemo(() => item.children || [], [item.children]);
  const indeterminate = useMemo(() => {
    return subList.length
      ? !!checkedList.length && checkedList.length < subList.length
      : false;
  }, [subList, checkedList]);
  const checkAll = useMemo(() => {
    return subList.length ? checkedList.length === subList.length : !!checkedList.length;
  }, [subList, checkedList]);

  const __onGroupChange = (val: number[]) => {
    setCheckedList((oldVal) => {
      let targetVal = val;

      if (singleMode && val.length > 1) {
        targetVal = val.filter((el) => !oldVal.includes(el));
      }

      onChange({ treeKey, checkedList: targetVal });
      return targetVal;
    });
  };

  const __onCheckAllChange = (e: any) => {
    const val = e.target.checked
      ? subList.length
        ? subList.map((el) => el.value)
        : [item.value as number]
      : [];
    __onGroupChange(val);
  };

  const renderCustomCheckbox = (el: any) => {
    return (
      <div className={styles.customCheckbox}>
        {el.iconType ? <IconFont type={el.iconType} style={el.iconStyle || {}} /> : null}
        <span>{el.label}</span>
      </div>
    );
  };

  const renderTreeHeader = () => {
    return (
      <div className={styles.tree__header}>
        <Checkbox
          indeterminate={indeterminate}
          onChange={__onCheckAllChange}
          checked={checkAll}>
          {renderCustomCheckbox(item)}
        </Checkbox>

        {subList.length ? (
          <div className={styles.expand_icon} onClick={() => setIsExpand(!isExpand)}>
            {isExpand ? (
              <IconFont type="icon-arrow-up-filling" />
            ) : (
              <IconFont type="icon-arrow-down-filling" />
            )}
          </div>
        ) : null}
      </div>
    );
  };

  const renderTreeContent = () => {
    if (subList.length === 0) return null;

    const className = `${styles.tree__content} ${
      isExpand ? styles.tree__content__expand : ''
    }`;
    const contentStyle = {
      height: isExpand ? toAdaptedPx(subList.length * 40 + 12) : 0,
      paddingTop: isExpand ? toAdaptedPx(6) : 0,
      paddingBottom: isExpand ? toAdaptedPx(6) : 0,
    };
    const reOptions = subList.map((el) => {
      return {
        label: renderCustomCheckbox(el),
        value: el.value,
      };
    });

    return (
      <div className={className} style={contentStyle}>
        <CheckboxGroup
          options={reOptions}
          value={checkedList}
          onChange={(val) => __onGroupChange(val as number[])}
        />
      </div>
    );
  };

  useEffect(() => {
    if (value.treeKey === treeKey) {
      if (value.checkedList.toString() !== checkedListRef.current.toString()) {
        setCheckedList(value.checkedList);
      }
    } else {
      setCheckedList([]);
    }
  }, [value, treeKey]);

  return (
    <div className={styles.CheckboxTree}>
      {renderTreeHeader()}
      {renderTreeContent()}
    </div>
  );
}
