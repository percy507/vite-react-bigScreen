import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { IconFont } from '@/components/IconFont';
import { MaximizeModal } from '@/components/MaximizeModal';
import { PrimaryCard } from '@/components/PrimaryCard';
import type { ECOption } from '@/components/SuperEChart';
import { linearGradient, SuperEChart } from '@/components/SuperEChart';
import { formatNumber, toAdaptedPx } from '@/utils';

import styles from './Block2.module.less';

export default function Block2() {
  const [activeCard, setActiveCard] = useState<string>();
  const [data, setData] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const activeItem = data.find((el: any) => el.label === activeCard)?.chart || {};

  useEffect(() => {
    const list = [
      {
        num: ~~(Math.random() * 30000 + 1000),
        unit: '万元',
        label: '业务1',
        chart: {
          value1: ~~(Math.random() * 300 + 10),
          chart1: ~~(Math.random() * 90 + 10),
          value2: ~~(Math.random() * 300 + 10),
          chart2: ~~(Math.random() * 90 + 10),
          value3: ~~(Math.random() * 300 + 10),
          chart3: ~~(Math.random() * 90 + 10),
        },
      },
      {
        num: ~~(Math.random() * 30000 + 1000),
        unit: '万元',
        label: '业务2',
        chart: {
          value1: ~~(Math.random() * 300 + 10),
          chart1: ~~(Math.random() * 90 + 10),
          value2: ~~(Math.random() * 300 + 10),
          chart2: ~~(Math.random() * 90 + 10),
          value3: ~~(Math.random() * 300 + 10),
          chart3: ~~(Math.random() * 90 + 10),
        },
      },
      {
        num: ~~(Math.random() * 30000 + 1000),
        unit: '万元',
        label: '业务3',
        chart: {
          value1: ~~(Math.random() * 300 + 10),
          chart1: ~~(Math.random() * 90 + 10),
          value2: ~~(Math.random() * 300 + 10),
          chart2: ~~(Math.random() * 90 + 10),
          value3: ~~(Math.random() * 300 + 10),
          chart3: ~~(Math.random() * 90 + 10),
        },
      },
    ];

    setData(list);
    setActiveCard(list[0].label);
  }, []);

  const content = (
    <>
      <div className={styles.cardList}>
        {data.map((el: any) => {
          return (
            <MiniCard
              {...el}
              key={el.label}
              isActive={el.label === activeCard}
              onClick={() => setActiveCard(el.label)}
            />
          );
        })}
      </div>
      <div className={styles.chart}>
        <div className={styles.chartItem}>
          <SuperEChart width={134} height={100} options={getChart(activeItem.chart1)} />
          <div className={styles.chartTitle}>金额成本占比</div>
          <div>
            <span className={styles.chartItemValue}>{activeItem.value1}</span>
            <span className={styles.chartItemUnit}>万元</span>
          </div>
        </div>
        <div className={styles.chartItem}>
          <SuperEChart width={134} height={100} options={getChart(activeItem.chart2)} />
          <div className={styles.chartTitle}>业务数量占比</div>
          <div>
            <span className={styles.chartItemValue}>{activeItem.value2}</span>
            <span className={styles.chartItemUnit}>笔</span>
          </div>
        </div>
        <div className={styles.chartItem}>
          <SuperEChart width={150} height={100} options={getChart(activeItem.chart3)} />
          <div className={styles.chartTitle}>货物数量占比</div>
          <div>
            <span className={styles.chartItemValue}>{activeItem.value3}</span>
            <span className={styles.chartItemUnit}>万斤</span>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <PrimaryCard
      className={styles.block2}
      title={
        <div className={styles.title}>
          <span>模块5</span>
          <IconFont
            type="icon-maximize"
            className={styles.maxBtn}
            onClick={() => setOpen(true)}
          />
        </div>
      }>
      {content}
      <MaximizeModal width={toAdaptedPx(925)} open={open} setOpen={setOpen} title="模块5">
        <div className={styles.modalContentContainer}>
          <div className={styles.modalContent}>{content}</div>
        </div>
      </MaximizeModal>
    </PrimaryCard>
  );
}

function getChart(data: any, zoom: number = 1): ECOption {
  const currentAxisLineRatio: number = data / 100;
  return {
    series: [
      {
        type: 'gauge',
        center: ['50%', '60%'],
        startAngle: 210,
        endAngle: -30,
        min: 0,
        max: 100,
        radius: toAdaptedPx(zoom * 55),
        splitNumber: 30,
        axisLabel: { show: false },
        axisTick: { show: false },
        axisLine: {
          show: true,
          lineStyle: {
            width: toAdaptedPx(zoom * 12),

            color: [
              // @ts-ignore
              ...new Array(20).fill(0).map((_, i) => {
                return [
                  (currentAxisLineRatio / 20) * i,
                  `rgba(91, 176, 255, ${0.01 + 0.0495 * i})`,
                ];
              }),
              // @ts-ignore
              // ...new Array(11).fill(0).map((_, i) => {
              //   return [
              //     currentAxisLineRatio / 2 + (currentAxisLineRatio / 2 / 10) * i,
              //     `rgba(91, 176, 255, ${1 - 0.09 * i})`,
              //   ];
              // }),
              // @ts-ignore
              [1, 'rgba(0,0,0,0.15)'],
            ],
          },
        },
        splitLine: {
          show: true,
          length: toAdaptedPx(zoom * 12),
          distance: toAdaptedPx(zoom * -12),
          lineStyle: {
            width: toAdaptedPx(zoom * 2),
            color: '#121618',
          },
        },
        pointer: {
          width: toAdaptedPx(zoom * 6),
          itemStyle: {
            color: new linearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#fff' },
              { offset: 1, color: 'rgba(91, 176, 255, 1)' },
            ]),
          },
        },
        detail: {
          fontSize: toAdaptedPx(zoom * 14),
          lineHeight: toAdaptedPx(zoom * 20),
          color: '#fff',
          offsetCenter: [0, '35%'],
          formatter: `{value}%`,
        },
        data: [data],
      },
    ],
  };
}

function MiniCard(props: {
  num: number;
  unit: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}) {
  const { num, unit, label, isActive = false, onClick } = props;

  return (
    <div className={styles.miniCard} onClick={onClick}>
      <div className={styles.cardLine}></div>
      <div
        className={clsx({
          [styles.cardContent]: true,
          [styles.cardActive]: isActive,
        })}>
        <div>
          <div className={styles.cardNum}>{formatNumber(num, 0)}</div>
          <div className={styles.cardUnit}>{unit}</div>
        </div>
        <div>
          <div className={styles.cardLabel}>{label}</div>
        </div>
      </div>
    </div>
  );
}
