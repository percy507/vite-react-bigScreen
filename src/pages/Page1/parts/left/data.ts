import labelBg from '@/assets/labelBg.svg';
import pieBg from '@/assets/pieBg.svg';
import { echartsGraphic } from '@/components/EChart';
import type { ECOption } from '@/components/EChart/type';
import { toAdaptedPx } from '@/utils';

export const list1 = [
  { title: '类目111' },
  { title: '类目22' },
  { title: '类目333' },
  { title: '类目444' },
  { title: '类目5' },
  { title: '类目6666' },
].map((el) => ({ ...el, ratio: Math.random() * 0.8 + 0.2 }));

export const list2 = [
  '俗话说:兔子不吃窝边草;',
  '可俗话又说:近水楼台先得月!',
  '俗话说:宰相肚里能撑船;',
  '可俗话又说:有仇不报非君子!',
  '俗话说:人不犯我，我不犯人;',
  '可俗话又说:先下手为强，后下手遭殃!',
  '俗话说:男子汉大丈夫，宁死不屈:',
  '可俗话又说:男子汉大丈夫，能屈能伸!',
  '俗话说:量小非君子;',
  '可俗话又说:无毒不丈夫!',
  '俗话说:嫁鸡随鸡，嫁狗随狗;',
  '可俗话又说:男怕选错行，女怕嫁错郎!',
];

export const getSimpleChart = (data: any): ECOption => {
  return {
    grid: {
      top: toAdaptedPx(50),
      bottom: toAdaptedPx(5),
      right: toAdaptedPx(60),
      left: toAdaptedPx(20),
      containLabel: true,
    },
    xAxis: {
      name: '年份',
      type: 'category',
      data: ['2016', '2017', '2018', '2019', '2020', '2021'],
    },
    yAxis: {
      name: '常驻人口/人',
      type: 'value',
      splitNumber: 3,
      axisLine: { show: true },
      splitLine: { show: true },
    },
    series: [
      {
        data,
        type: 'bar',
        barWidth: toAdaptedPx(12),
        label: { show: true, position: 'top', color: '#FFF' },
        itemStyle: {
          color: new echartsGraphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(81,91,212,0.2)' },
            { offset: 1, color: 'rgba(81,91,212,1)' },
          ]),
        },
      },
    ],
  };
};

export const getComplexChart = (data: any): ECOption => {
  // 获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
  // 角度从左侧水平半径为0度，顺时针开始
  const getCirlPoint = ({
    x,
    y,
    r,
    angle,
  }: {
    x: number;
    y: number;
    r: number;
    angle: number;
  }) => {
    return {
      x: x - r * Math.cos((angle * Math.PI) / 180),
      y: y - r * Math.sin((angle * Math.PI) / 180),
    };
  };

  const maxValue = 100;

  const gaugeCommonOption = {
    center: ['50%', '90%'],
    startAngle: 180,
    endAngle: 0,
    min: 0,
    max: maxValue,
    pointer: { show: false },
    axisLine: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    anchor: { show: false },
    title: { show: false },
    axisLabel: { show: false },
    data,
  };

  return {
    title: {
      text: '2个guage+1个custom',
      left: 'center',
      textStyle: { color: '#ade', fontSize: toAdaptedPx(18) },
    },
    polar: {
      center: ['50%', '90%'],
      radius: toAdaptedPx(93),
    },
    angleAxis: {
      type: 'value',
      startAngle: 180,
      min: 0,
      max: maxValue * 2,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      splitLine: { show: false },
    },
    radiusAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      splitLine: { show: false },
    },
    series: [
      {
        // 内环
        ...gaugeCommonOption,
        type: 'gauge',
        radius: toAdaptedPx(80),
        progress: {
          show: true,
          width: toAdaptedPx(10),
          roundCap: true,
          itemStyle: {
            color: '#4AEAAE',
          },
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
            width: toAdaptedPx(10),
          },
        },
        detail: {
          valueAnimation: true,
          fontSize: toAdaptedPx(28),
          color: '#4AEAAE',
          offsetCenter: [0, -toAdaptedPx(10)],
          formatter: '{value}人',
        },
      },
      {
        // 外环
        ...gaugeCommonOption,
        type: 'gauge',
        radius: toAdaptedPx(93),
        progress: {
          show: true,
          width: toAdaptedPx(0),
          roundCap: true,
          itemStyle: {
            borderColor: '#4AEAAE',
            borderType: [toAdaptedPx(2)],
            borderWidth: toAdaptedPx(2),
          },
        },
        axisTick: {
          show: true,
          distance: toAdaptedPx(-16),
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.1)',
            width: toAdaptedPx(2),
          },
          length: toAdaptedPx(2),
        },
      },
      {
        // 点
        type: 'custom',
        coordinateSystem: 'polar',
        renderItem(_, api) {
          // console.log(api.value(0), api.coord(api.value(0)));
          // const [x, y, radius, angle] = api.coord(api.value(0));
          const angle = ((api.value(0) as number) / maxValue) * 180;
          const computeShape = (angle: number) => {
            const point = getCirlPoint({
              x: api.getWidth() / 2,
              y: api.getHeight() * 0.9,
              r: toAdaptedPx(93),
              angle,
            });

            return {
              cx: point.x,
              cy: point.y,
              r: toAdaptedPx(3),
            };
          };

          return {
            type: 'circle',
            shape: computeShape(angle),
            style: {
              stroke: '',
              fill: 'rgba(180, 255, 229, 1)',
              shadowBlur: toAdaptedPx(8),
              shadowColor: 'rgba(180, 255, 229, 1)',
            },
            extra: {
              degree: angle,
            },
            transition: 'extra',
            // 让圆形以弧度的形式进行过渡
            during(duringAPI) {
              const currentDegree = duringAPI.getExtra('degree') as number;
              duringAPI.setShape('cx', computeShape(currentDegree).cx);
              duringAPI.setShape('cy', computeShape(currentDegree).cy);
            },
            silent: true,
          };
        },
        data,
      },
    ],
  };
};

export const getCarouselChart = (): ECOption => {
  const data = new Array(4).fill(0).map(() => {
    return {
      name: `公司-${~~(Math.random() * 80 + 10)}`,
      value: ~~(Math.random() * 80 + 10),
      key1: `标签${~~(Math.random() * 80 + 10)}`,
      key2: new Date().toISOString().replace(/\..+/g, ''),
    };
  });

  return {
    legend: {
      top: 'bottom',
      right: toAdaptedPx(0),
    },
    graphic: [
      {
        type: 'image',
        top: toAdaptedPx(4),
        left: toAdaptedPx(4),
        z: -10,
        bounding: 'raw',
        style: {
          image: pieBg,
          width: toAdaptedPx(150),
          height: toAdaptedPx(150),
        },
      },
    ],
    series: [
      {
        type: 'pie',
        right: toAdaptedPx(0),
        center: [toAdaptedPx(80), toAdaptedPx(80)],
        radius: ['20%', '60%'],
        avoidLabelOverlap: false,
        label: { show: false },
        labelLayout() {
          return {
            x: toAdaptedPx(200),
            y: toAdaptedPx(50),
            align: 'left',
          };
        },
        itemStyle: {
          shadowColor: '#00345F',
          shadowOffsetX: 0,
          shadowOffsetY: toAdaptedPx(2),
          shadowBlur: toAdaptedPx(6),
        },
        emphasis: {
          scaleSize: toAdaptedPx(14),
          labelLine: {
            showAbove: true,
            lineStyle: { color: '#fff' },
          },
          label: {
            show: true,
            backgroundColor: { image: labelBg },
            padding: [toAdaptedPx(10), toAdaptedPx(14)],
            formatter: (params) => {
              const tempData = params.data as typeof data[0];
              return [
                `{title|${tempData.name} (${tempData.value}%)}`,
                `{key1|key1: ${tempData.key1}}`,
                `{key2|key2: ${tempData.key2}}`,
              ].join('\n');
            },
            rich: {
              title: {
                align: 'left',
                color: '#fff',
                fontSize: toAdaptedPx(18),
                padding: [0, 0, toAdaptedPx(6), 0],
              },
              key1: {
                align: 'left',
                color: '#adf',
                fontSize: toAdaptedPx(16),
                height: toAdaptedPx(20),
              },
              key2: {
                align: 'left',
                color: '#adf',
                fontSize: toAdaptedPx(16),
                height: toAdaptedPx(20),
              },
            },
          },
        },
        data,
      },
    ],
  };
};
