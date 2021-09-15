declare namespace AMap {
  type EventCallback = (...args: any[]) => void;

  abstract class EventBindable {
    on(eventName: string, callback: EventCallback): void;
    off(eventName: string, callback: EventCallback): void;
  }

  interface MarkerClustererOptions {
    gridSize?: number;
    maxZoom?: number;
    averageCenter?: boolean;
    /** 地图缩放过程中是否聚合。默认值 false。 */
    clusterByZoomChange?: boolean;
    styles?: any[];
    /**
     * 该方法用来实现聚合点的自定义绘制，由开发者自己实现，API 将在绘制每个聚合点的时候调用这个方法，可以实现聚合点样式的灵活设定，指定了 renderClusterMarker 后 styles 无效。
     * 该函数的入参为一个Object，包含如下属性：
     * 1. count: 当前聚合点下聚合的 Marker 的数量
     * 2. marker: 当前聚合点显示的 Marker
     */
    renderClusterMarker?: (obj: any) => void;
    /**
     * 该方法用来实现非聚合点的自定义绘制，由开发者自己实现，API 将在绘制每个非聚合点的时候调用这个方法
     * 该函数的入参为一个Object，包含如下属性：
     * marker: 非聚合点 Marker 对象
     */
    renderMarker?: (obj: any) => void;
  }

  /**
   * 用于地图上加载大量点标记，提高地图的绘制和显示性能。
   */
  class MarkerClusterer extends EventBindable {
    constructor(map: AMap.Map, markers: Marker[], opt?: MarkerClustererOptions);

    /**
     * 添加一个需进行聚合的点标记
     * @param marker
     */
    addMarker(marker: Marker): void;

    /**
     * 删除一个聚合的点标记
     * @param marker 点标记
     */
    removeMarker(marker: Marker): void;

    /**
     * 获取聚合点的总数量
     */
    getClustersCount(): number;

    /**
     * 获取聚合网格的像素大小
     */
    getGridSize(): number;

    /**
     * 获取地图中点标记的最大聚合级别
     */
    getMaxZoom(): number;

    /**
     * 获取单个聚合的最小数量
     */
    getMinClusterSize(): number;

    /**
     * 获取聚合的样式风格集合
     */
    getStyles(): any[];

    /**
     * 设置聚合网格的像素大小
     * @param size
     */
    setGridSize(size: number): void;

    /**
     * 设置地图中点标记的最大聚合级别
     * @param zoom
     */
    setMaxZoom(zoom: number): void;

    /**
     * 设置单个聚合的最小数量
     * @param size
     */
    setMinClusterSize(size: number): void;

    /**
     * 设置聚合的样式风格
     * @param styles
     */
    setStyles(styles: any[]): void;

    /**
     * 从地图上彻底清除所有聚合点标记
     */
    clearMarkers(): void;

    /**
     * 设置将进行点聚合的地图对象
     * @param map
     */
    setMap(map: AMap.Map | null): void;

    /**
     * 设置将进行点聚合显示的点标记集合
     * @param markers
     */
    setMarkers(markers: Marker[]): void;

    /**
     * 获取该点聚合的地图对象
     */
    getMap(): AMap.Map;

    /**
     * 获取该点聚合中的点标记集合
     */
    getMarkers(): Marker[];

    /**
     * 添加一组需进行聚合的点标记
     */
    addMarkers(markers: Marker[]): void;

    /**
     * 删除一组聚合的点标记
     * @param markers
     */
    removeMarkers(markers: Marker[]): void;

    /**
     * 获取单个聚合点位置是否是聚合内所有标记的平均中心
     */
    isAverageCenter(): boolean;

    /**
     * 设置单个聚合点位置是否是聚合内所有标记的平均中心
     * @param averageCenter
     */
    setAverageCenter(averageCenter: boolean): void;
  }

  interface GeoJSONOptions {
    geoJSON: GeoJSON.GeoJSON;
    /** 指定点要素的绘制方式，缺省时为Marker的默认样式 */
    getMarker?: (geojson: any, lnglat: any) => any;
    /** 指定线要素的绘制方式，缺省时为Marker的默认样式 */
    getPolyline?: (geojson: any, lnglat: any) => any;
    /** 指定面要素的绘制方式，缺省时为Marker的默认样式 */
    getPolygon?: (geojson: any, lnglat: any) => any;
  }

  /**
   * GeoJSON类, 用于加载geoJSON数据
   */
  class GeoJSON extends OverlayGroup {
    constructor(opts: GeoJSONOptions);

    /** 加载新的GeoJSON对象，转化为覆盖物，旧的覆盖物将移除 */
    importData(geoJSON: GeoJSON.GeoJSON): void;

    /** 将当前对象包含的覆盖物转换为GeoJSON对象 */
    toGeoJSON(): GeoJSON.GeoJSON;
  }
}
