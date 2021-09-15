export type MapOptions = {
  zoom: number;
  center: [number, number];
};

export type MarkerRenderType = 'cluster' | 'full';

export type MapBlockData = {
  /** ID, 用于与地图特定的区块进行数据绑定 */
  id: string;
  data: any;
}[];

export type IconBg = 'red' | 'green' | 'yellow';

export type MapPoint = {
  id: string;
  /** [经度, 纬度] */
  pos: [number, number];
  /** 额外数据, 只支持单行或双行 */
  extendData?: [label: string, value: string][];
  /** icon 名称，从 iconfont.com 获取 */
  iconData: [iconBg: IconBg, iconClass: string];
  /** 聚合点位icon权重，数字越大，权重越高，会使用权重最高的点位样式作为聚合icon的样式 */
  clusterWeight?: number;
  /** icon浮动弹窗的渲染逻辑与数据 */
  infoWindow?: {
    /** 弹窗渲染逻辑, 返回一个html字符串 */
    render: (data: any) => string;
    /**
     * 高德地图 InfoWindow 配置项
     * https://lbs.amap.com/api/jsapi-v2/documentation#infowindow
     */
    options?: AMap.InfoOptions;
    /** 弹窗数据, 格式自定义 */
    data: any;
  };
};

export type MapPointGroup = {
  /** 打点群组名称，必须唯一 */
  name: string;
  points: MapPoint[];
};

export type MapDataConfig = {
  /** 点击地图多边形区块时，触发的弹窗名称 */
  blockClickModal?: string;
  /** 点击地图多边形区块时，触发的浮动弹窗渲染函数 */
  blockInfoWindowRenderFunc?: (properties: any, data: any) => string;
  /** 自定义的聚合点位icon，权重最高，优先被使用 */
  // customClusterIcon?: {
  //   iconClass: 'icon-richangxunjian';
  //   iconBg: 'qing';
  // };
  /** 地图打点数据群组列表 */
  pointGroups?: MapPointGroup[];
};
