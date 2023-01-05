import { Tooltip } from 'antd';
import { registerMap } from 'echarts/core';
import { useAtomValue } from 'jotai';
import { useEffect, useRef, useState } from 'react';

import { ModalOnCenter } from '@/components/ModalOnCenter';
import type { EChartInstance, ECOption } from '@/components/SuperEChart';
import { SuperEChart } from '@/components/SuperEChart';
import { requestCenterBlock1 } from '@/services/page2';
import { atomSelectedParams } from '@/store/page2';
import uiConfig from '@/ui.config.json';
import { toAdaptedPx } from '@/utils';

import map330000 from './assets/330000_full.json';
import textureImg from './assets/texture.jpg';
import styles from './style.module.less';

registerMap('330000', map330000 as any);

export function Block1() {
  const [chart, setChart] = useState<EChartInstance>();
  const [data, setData] = useState<any[]>([]);
  const params = useAtomValue(atomSelectedParams);

  useEffect(() => {
    if (Object.keys(params).length === 0) return;
    requestCenterBlock1(params).then(({ data }) => {
      setData(data);
    });
  }, [params]);

  return (
    <div>
      <DataModal params={params} data={data} chart={chart} />
      <SuperEChart
        width={uiConfig.width}
        height={uiConfig.height}
        options={getChart(data)}
        setInstance={setChart}
        mergeOptions={false}
      />
    </div>
  );
}

function DataModal({
  params,
  data,
  chart,
}: {
  params;
  data: any[];
  chart?: EChartInstance;
}) {
  const [v1, setV1] = useState(false);
  const v1Ref = useRef(v1);
  v1Ref.current = v1;

  const [modalPos, setModalPos] = useState({
    left: `calc(50% - ${toAdaptedPx(160)}px)`,
    top: `calc(50% - ${toAdaptedPx(160)}px)`,
  });

  const [modalData, setModalData] = useState<Record<string, any>>({});
  const modalDataRef = useRef(modalData);
  modalDataRef.current = modalData;

  const paramsRef = useRef(params);
  paramsRef.current = params;

  useEffect(() => {
    let handler = () => setV1(false);
    document.body.addEventListener('click', handler);
    return () => {
      document.body.removeEventListener('click', handler);
    };
  }, []);

  useEffect(() => {
    setV1(false);
    if (params.projectCode) {
      const item = data.find((el: any) => el.projectCode == params.projectCode);
      if (!item) return;
      setModalData(item);
      setModalPos({
        left: `calc(50% - ${toAdaptedPx(160)}px)`,
        top: `calc(50% - ${toAdaptedPx(160)}px)`,
      });
      setV1(true);
    }
  }, [params, data]);

  useEffect(() => {
    if (!chart) return;
    let handler = (params) => {
      if (params.seriesType === 'scatter3D' && params.event) {
        const item = data.find((el: any) => el.id == (params.data as any).id);
        if (!item) return;
        if (modalDataRef.current?.id !== item.id || v1Ref.current === false) {
          setModalData(item);
          setModalPos({
            left: `${(params.event.event as MouseEvent).clientX}px`,
            top: `${(params.event.event as MouseEvent).clientY}px`,
          });
          setV1(true);
        }
      } else {
        if (paramsRef.current?.projectCode) return;
        setV1(false);
      }
    };
    chart.on('mousemove', handler);
    return () => {
      chart.off('mousemove', handler);
    };
  }, [chart, data]);

  return (
    <ModalOnCenter
      transitionName=""
      title={
        <Tooltip
          overlayClassName="normal-tooltip"
          arrowPointAtCenter
          title={modalData.projectName}>
          {modalData.projectName}
        </Tooltip>
      }
      pos={modalPos}
      open={v1}
      onCancel={() => setV1(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <p>内容</p>
        <p>{Date.now()}</p>
      </div>
    </ModalOnCenter>
  );
}

const randomColor = (index: number) => {
  return [
    '#0DDE93',
    '#F5B715',
    '#0A9EDD',
    '#FF985E',
    '#BAAFFF',
    '#EAAFFF',
    '#FFAFBE',
    '#ACFFF0',
    '#FDFF96',
  ][index % 9];
};

function getChart(data: any[]): ECOption {
  let points = data
    .filter((el) => el.longitude && el.latitude)
    .map((el, index) => {
      let point = [el.longitude, el.latitude, 0];
      return {
        id: el.id,
        name: el.projectName,
        value: point,
        itemStyle: { color: randomColor(index) },
      };
    });

  const viewControl = {
    // animation 必须设置为false，否则在切换地图时，渲染有时会异常（频率较高）
    animation: false,
    panMouseButton: 'left',
    rotateMouseButton: 'middle',
    distance: 85,
    center: [-3, 15, 30],
    alpha: 50,
  };
  const series: ECOption['series'] = [
    {
      show: true,
      // @ts-ignore
      type: 'map3D',
      map: '330000',
      bottom: toAdaptedPx(0),
      shading: 'color',
      colorMaterial: { detailTexture: textureImg, textureTiling: 1 },
      itemStyle: { opacity: 1, color: '#fff', borderWidth: 1, borderColor: '#47E0DA' },
      emphasis: { label: { show: false }, itemStyle: { opacity: 1, color: '#fff' } },
      viewControl,
    },
    {
      // @ts-ignore
      type: 'scatter3D',
      coordinateSystem: 'geo3D',
      blendMode: 'source-over',
      zlevel: -8,
      symbol: `path://M5.79629 0L0 2.09468L24.3294 11.92L48.4131 2.0032L42.8699 0L24.3331 5.59158L5.79629 0ZM16.5088 35.0756L0.430188 4.42535L24.3367 14.0799L48.2087 4.25026L32.0212 35.108C32.8222 35.2914 33.5974 35.502 34.3432 35.7378L33.4386 38.5982C32.5375 38.3133 31.5801 38.067 30.5746 37.8658L24.5108 49.4249V50.3296L24.2735 49.8772L24.0362 50.3296V49.4249L17.9575 37.837C16.8988 38.0434 15.8925 38.2996 14.948 38.5982L14.0435 35.7378C14.8336 35.488 15.6569 35.2664 16.5088 35.0756ZM41.4953 46.4874L44.3769 47.3216C44.5459 46.7378 44.6337 46.139 44.6337 45.5289C44.6337 44.9188 44.5459 44.3201 44.3769 43.7362L41.4953 44.5705C41.5883 44.8919 41.6337 45.21 41.6337 45.5289C41.6337 45.8478 41.5883 46.166 41.4953 46.4874ZM39.7088 41.9488L41.7413 39.7422C40.9096 38.9762 39.9178 38.2691 38.7914 37.6351L37.3199 40.2494C38.275 40.787 39.0719 41.3622 39.7088 41.9488ZM11.0668 40.2494L9.59532 37.6351C8.46889 38.2691 7.47707 38.9762 6.64538 39.7422L8.67786 41.9488C9.31476 41.3622 10.1117 40.787 11.0668 40.2494ZM3.75293 45.5289C3.75293 44.9188 3.84074 44.3201 4.00976 43.7362L6.89143 44.5705C6.79838 44.8919 6.75293 45.21 6.75293 45.5289C6.75293 45.8478 6.79838 46.166 6.89143 46.4874L4.00976 47.3216C3.84074 46.7378 3.75293 46.139 3.75293 45.5289ZM8.67786 49.1091L6.64538 51.3156C7.47707 52.0817 8.46889 52.7888 9.59532 53.4228L11.0668 50.8085C10.1117 50.2709 9.31476 49.6957 8.67786 49.1091ZM14.948 52.4596L14.0435 55.32C15.1565 55.672 16.3352 55.9678 17.5669 56.2006L18.124 53.2528C17.0042 53.0412 15.9419 52.7739 14.948 52.4596ZM22.5216 53.766L22.3759 56.7624C22.9747 56.7915 23.5809 56.8064 24.1933 56.8064C24.8058 56.8064 25.412 56.7915 26.0107 56.7624L25.8651 53.766C25.3149 53.7927 24.7573 53.8064 24.1933 53.8064C23.6294 53.8064 23.0718 53.7927 22.5216 53.766ZM30.2627 53.2528L30.8197 56.2006C32.0515 55.9678 33.2302 55.672 34.3432 55.32L33.4386 52.4596C32.4448 52.7739 31.3824 53.0412 30.2627 53.2528ZM41.7413 51.3156C40.9096 52.0817 39.9178 52.7888 38.7914 53.4228L37.3199 50.8085C38.275 50.2709 39.0719 49.6957 39.7088 49.1091L41.7413 51.3156Z`,
      symbolSize: [toAdaptedPx(32), toAdaptedPx(37)],
      itemStyle: { opacity: 1 },
      emphasis: { label: { show: true }, itemStyle: { opacity: 1 } },
      label: {
        show: true,
        formatter: (params) => {
          const name =
            params.name.length > 10 ? `${params.name.slice(0, 10)}...` : params.name;
          return `{a|${name}}`;
        },
        rich: {
          a: {
            color: '#fff',
            fontSize: toAdaptedPx(18),
            fontWeight: 600,
            padding: [toAdaptedPx(7), toAdaptedPx(12)],
            borderWidth: 1,
            borderColor: '#00829D',
            backgroundColor: '#004968',
            borderRadius: toAdaptedPx(4),
          },
        },
        position: 'bottom',
      },
      data:
        points.length === 1
          ? // 当数据只有一个点时，不知道为什么，echarts的事件捕获不到这条数据，
            // 所以我们加入一个临时透明数据来解决这个问题
            [{ name: 'temp', value: [0, 0, 30], itemStyle: { opacity: 0 } }, ...points]
          : points,
    },
  ];

  return {
    geo3D: {
      show: false,
      type: 'map3D',
      map: '330000', // 地图类型
      bottom: toAdaptedPx(0),
      viewControl,
    },
    series,
  };
}
