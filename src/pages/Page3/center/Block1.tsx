import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

import type { EChartInstance, ECOption } from '@/components/SuperEChart';
import { SuperEChart } from '@/components/SuperEChart';
import { atomCurrentArea } from '@/store/page3';
import uiConfig from '@/ui.config.json';
import { toAdaptedPx } from '@/utils';

import textureImg from './assets/texture.jpg';
import {
  codeMap,
  getHangZhouCenter,
  getNameByCenter,
  getOtherCityCenterList,
} from './register-map';
import styles from './style.module.less';

export default function Block1() {
  const [chart, setChart] = useState<EChartInstance>();
  const [mapCode, setMapCode] = useState<string>('330000');
  const [, setCurrentArea] = useAtom(atomCurrentArea);

  useEffect(() => {
    if (!chart) return;
    let clickInMap = false;

    chart.on('click', (e) => {
      if (codeMap[e.name]) {
        setMapCode(codeMap[e.name]);
        setCurrentArea(e.name);
      }
      setTimeout(() => (clickInMap = true));
    });

    const zrClickHandler = (e: MouseEvent) => {
      if (e.target) clickInMap = true;
      else clickInMap = false;
      setTimeout(() => {
        if (!clickInMap) {
          setMapCode('330000');
          setCurrentArea('浙江省');
        }
      }, 100);
    };
    zrClickHandler.zrEventfulCallAtLast = true;
    chart.getZr().on('click', zrClickHandler);
  }, [chart, setCurrentArea]);

  return (
    <div>
      <SuperEChart
        width={uiConfig.width}
        height={uiConfig.height}
        options={getChart(mapCode)}
        setInstance={setChart}
        mergeOptions={false}
      />
    </div>
  );
}

function getChart(code: string): ECOption {
  const isMainMap = code === '330000';

  const viewControl = {
    // animation 必须设置为false, 否则在切换地图时，渲染有时会异常（频率较高）
    animation: false,
    rotateMouseButton: 'left',
    distance: 85,
    center: [-3, 15, 30],
    alpha: 50,
  };
  const series: ECOption['series'] = [
    {
      show: true,
      // @ts-ignore
      type: 'map3D',
      map: code,
      bottom: toAdaptedPx(0),
      shading: 'color',
      colorMaterial: { detailTexture: textureImg, textureTiling: 2 },
      label: {
        show: true,
        color: '#adebfc',
        fontSize: toAdaptedPx(20),
      },
      itemStyle: {
        color: '#ffff',
        borderWidth: isMainMap ? 1 : 0,
        borderColor: '#3984e4',
      },
      emphasis: { itemStyle: { color: '#fffa' } },
      viewControl,
    },
  ];

  if (isMainMap) {
    const hz = getHangZhouCenter();
    const others = getOtherCityCenterList();
    // @ts-ignore
    series.push(
      {
        // @ts-ignore
        type: 'scatter3D',
        coordinateSystem: 'geo3D',
        blendMode: 'source-over',
        zlevel: -8,
        symbol: 'circle',
        symbolSize: toAdaptedPx(10),
        opacity: 1,
        label: { show: false },
        emphasis: { label: { show: false } },
        itemStyle: { color: '#bbdffcaa' },
        data: [hz, ...others],
      },
      {
        // @ts-ignore
        type: 'lines3D',
        coordinateSystem: 'geo3D',
        blendMode: 'source-over',
        zlevel: -8,
        effect: {
          show: true,
          trailColor: '#bbdffccc',
          trailLength: 0.7,
          trailWidth: toAdaptedPx(3),
          constantSpeed: 24,
        },
        lineStyle: {
          width: 1,
          color: '#bbdffc00',
          opacity: 1,
        },
        data: [...others.map((el) => [hz, el])],
      },
    );
  }

  const tooltipData: any = {};

  Object.keys(codeMap).forEach((key) => {
    return (tooltipData[key] = [
      ~~(Math.random() * 30000 + 10000),
      ~~(Math.random() * 30000 + 10000),
      +(Math.random() * 300 + 10).toFixed(2),
      (50 - Math.random() * 100).toFixed(2),
    ]);
  });

  return {
    tooltip: {
      trigger: 'item',
      className: styles.mapTooltip,
      appendToBody: true,
      position: (point) => {
        return [point[0], point[1] - toAdaptedPx(78)];
      },
      padding: toAdaptedPx(0),
      formatter(params) {
        let { name, data } = params as any;
        if (!name) name = getNameByCenter(data);

        const dd = tooltipData[name];

        return `<div>
            <div class="${styles.tooltipTitle}">${name}</div>
            <div class="${styles.tooltipItemList}">
              <div class="${styles.tooltipItem}">
                <div class="${styles.tooltipItemTitle}">成交金额</div>
                <div class="${styles.tooltipItemContent}">
                  <span class="${styles.tooltipItemContentValue}">${dd[0]}</span>
                  <span class="${styles.tooltipItemContentUnit}">万元</span>
                </div>
              </div>
              <div class="${styles.tooltipItem}">
                <div class="${styles.tooltipItemTitle}">成交笔数</div>
                <div class="${styles.tooltipItemContent}">
                  <span class="${styles.tooltipItemContentValue}">${dd[1]}</span>
                  <span class="${styles.tooltipItemContentUnit}">笔</span>
                </div>
              </div>
              <div class="${styles.tooltipItem}">
                <div class="${styles.tooltipItemTitle}">成交数量</div>
                <div class="${styles.tooltipItemContent}">
                  <span class="${styles.tooltipItemContentValue}">${dd[2]}</span>
                  <span class="${styles.tooltipItemContentUnit}">万斤</span>
                </div>
              </div>
              <div class="${styles.tooltipItem}">
                <div class="${styles.tooltipItemTitle}">同比增长</div>
                <div class="${styles.tooltipItemContent}">
                  <span class="${styles.tooltipItemContentValue} ${
          dd[3] < 0
            ? styles.tooltipItemContentValue__nag
            : styles.tooltipItemContentValue__pov
        }">${dd[3] > 0 ? '+' : ''}${dd[3]}</span>
                  <span class="${styles.tooltipItemContentUnit}">%</span>
                </div>
              </div>
            </div>
          </div>`;
      },
    },
    geo3D: {
      show: false,
      type: 'map3D',
      map: code, // 地图类型
      bottom: toAdaptedPx(0),
      viewControl,
    },
    series,
  };
}
