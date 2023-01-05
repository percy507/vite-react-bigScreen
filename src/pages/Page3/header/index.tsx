import { Cascader } from 'antd';
import { useAtom } from 'jotai';
import moment from 'moment';
import { useEffect, useState } from 'react';

import { requestServerTime } from '@/services/page2';
import { requestLeftTopTreeData } from '@/services/page2';
import { atomSelected } from '@/store/page2';

import styles from './style.module.less';

export default function GlobalHeader({ justShow = false }) {
  const [selected, setSelected] = useAtom(atomSelected);
  const [options, setOptions] = useState<any[]>([]);

  useEffect(() => {
    if (!justShow) {
      requestLeftTopTreeData().then(({ data }) => {
        if (!Array.isArray(data) || !data.length) return;
        setOptions(data);
        setSelected([data[0].value]);
      });
    }
  }, [justShow, setSelected]);

  return (
    <div className={styles.GlobalHeader}>
      {justShow ? null : (
        <div className={styles.select}>
          <Cascader
            popupClassName={styles.selectPopup}
            bordered={false}
            changeOnSelect
            allowClear={false}
            placeholder="请选择"
            options={options}
            expandTrigger="hover"
            displayRender={(v) => v[v.length - 1]}
            value={selected}
            onChange={(v) => setSelected(v)}
          />
        </div>
      )}
      <div className={styles.title}>祖传大屏</div>
      <ServerDate />
    </div>
  );
}

function ServerDate() {
  const [currentDate, setCurrentDate] = useState<number>(0);

  useEffect(() => {
    let timer: number;
    requestServerTime().then(({ data }) => {
      let date = moment(data).valueOf();
      timer = window.setInterval(
        () => setCurrentDate((v) => (v === 0 ? date : v + 1000)),
        1000,
      );
    });

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.date}>
      {currentDate ? moment(currentDate).format('YYYY/MM/DD HH:mm:ss') : null}
    </div>
  );
}
