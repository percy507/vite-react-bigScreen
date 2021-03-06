import React, { useEffect, useState } from 'react';
import { useCountUp } from 'react-countup';

import AutoScrollView from '@/components/AutoScrollView';
import EChart from '@/components/EChart';
import type { PrimaryCardProps } from '@/components/PrimaryCard';
import PrimaryCard from '@/components/PrimaryCard';
import ProgressBar1 from '@/components/ProgressBar1';
import ScrollTable from '@/components/ScrollTable';
import { toAdaptedPx } from '@/utils';

import { getCarouselChart, getComplexChart, getSimpleChart, list1, list2 } from './data';
import styles from './style.module.less';

const Block11 = () => {
  return (
    <AutoScrollView height={36 * 4} mode="step" stepHeight={36}>
      <div>
        {list1.map((el) => {
          return (
            <div className={styles.list1Item} key={el.title}>
              <div>{el.title}</div>
              <ProgressBar1 ratio={el.ratio} />
            </div>
          );
        })}
      </div>
    </AutoScrollView>
  );
};

const Block12 = () => {
  return (
    <AutoScrollView height={36 * 4}>
      <div>
        {list2.map((el) => {
          return (
            <div className={styles.list2Item} key={el}>
              {el}
            </div>
          );
        })}
      </div>
    </AutoScrollView>
  );
};

const Block13 = () => {
  const { countUp: value1, update: setValue1 } = useCountUp({ end: 0, separator: ',' });
  const { countUp: value2, update: setValue2 } = useCountUp({ end: 0, separator: ',' });
  const { countUp: value3, update: setValue3 } = useCountUp({ end: 0, separator: ',' });

  useEffect(() => {
    const changeData = () => {
      setValue1(~~(Math.random() * 80000 + 1000));
      setValue2(~~(Math.random() * 80000 + 1000));
      setValue3(~~(Math.random() * 80000 + 1000));
    };

    changeData();
    const timer = setInterval(changeData, 5000);
    return () => clearInterval(timer);
  }, [setValue1, setValue2, setValue3]);

  return (
    <div className={styles.block13}>
      <div className={styles.block13__title}>react-countup</div>
      <div className={styles.block13__list}>
        <div className={styles.block13__listItem}>{value1}</div>
        <div className={styles.block13__listItem}>{value2}</div>
        <div className={styles.block13__listItem}>{value3}</div>
      </div>
    </div>
  );
};

const Block14 = () => {
  const tableConfig = {
    headerBGC: 'rgba(111,233,111,0.1)',
    header: ['????????????', '??????', '??????'],
    columnWidth: [toAdaptedPx(180), toAdaptedPx(140)],
    data: new Array(12).fill(0).map(() => {
      return [
        `??????${~~(Math.random() * 80000)}??????`,
        `??????${~~(Math.random() * 80000)}`,
        `${~~(Math.random() * 80000)}??????`,
      ];
    }),
  };

  return <ScrollTable config={tableConfig} />;
};

const Block21 = () => {
  const [data, setData] = useState<any>([]);
  const changeData = () => {
    setData(new Array(6).fill(0).map(() => ~~(Math.random() * 450 + 50)));
  };

  useEffect(() => {
    changeData();
    const timer = setInterval(changeData, 3000);
    return () => clearInterval(timer);
  }, []);

  return <EChart height={200} options={getSimpleChart(data)} />;
};

const Block22 = () => {
  const [data, setData] = useState<any>([]);
  const changeData = () => {
    setData([
      {
        value: ~~(Math.random() * 80 + 10),
      },
    ]);
  };

  useEffect(() => {
    changeData();
    const timer = setInterval(changeData, 3000);
    return () => clearInterval(timer);
  }, []);

  return <EChart height={200} options={getComplexChart(data)} />;
};

const Block23 = () => {
  return (
    <EChart
      height={200}
      options={getCarouselChart()}
      autoAction={{
        type: 'highlight',
        interval: 2000,
        timerFlag: 'test1',
      }}
    />
  );
};

export default function Left() {
  const leftList: PrimaryCardProps[] = [
    {
      title: '??????1',
      tabs: [
        {
          tab: '?????????[step]',
          children: <Block11 />,
        },
        {
          tab: '?????????[full]',
          children: <Block12 />,
        },
        {
          tab: '????????????',
          children: <Block13 />,
        },
        {
          tab: '????????????',
          children: <Block14 />,
        },
      ],
    },
    {
      title: '??????2',
      tabs: [
        {
          tab: '????????????',
          children: <Block21 />,
        },
        {
          tab: '????????????',
          children: <Block22 />,
        },
        {
          tab: '????????????',
          children: <Block23 />,
        },
      ],
    },
    {
      title: '??????3',
      children: (
        <div
          style={{
            height: toAdaptedPx(220),
            textAlign: 'center',
            lineHeight: toAdaptedPx(220) + 'px',
            color: '#fff',
            fontSize: toAdaptedPx(18),
          }}
        >
          ????????????
        </div>
      ),
    },
  ];

  return (
    <div className={styles.Left}>
      {leftList.map((item, index) => {
        return <PrimaryCard key={index} {...item} />;
      })}
    </div>
  );
}
