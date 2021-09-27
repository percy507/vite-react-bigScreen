import '@amap/amap-jsapi-types';

import AMapLoader from '@amap/amap-jsapi-loader';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import {
  atomMapBlockData,
  atomMapDataConfig,
  atomMapOptions,
  atomMarkerRenderType,
  useRecoilValue,
} from '@/recoil/map';
import { toAdaptedPx } from '@/utils/index';

import type { IconBg, MapPoint } from './@types/mapData';
import geoJsonData from './geojson/hang_zhou.json';
import iconMap from './mapIcon';
import styles from './style.module.less';

export default function BigMap() {
  const [mapInstance, setMapInstance] = useState<AMap.Map>();
  const markerGroupRef = useRef<AMap.OverlayGroup>();
  const markerClusterRef = useRef<AMap.MarkerClusterer>();
  const geoJSONOverlayRef = useRef<AMap.GeoJSON>();

  const markerRenderType = useRecoilValue(atomMarkerRenderType);
  const mapOptions = useRecoilValue(atomMapOptions);
  const mapBlockData = useRecoilValue(atomMapBlockData);
  const mapDataConfig = useRecoilValue(atomMapDataConfig);

  const bindMapEvent = useCallback((map: AMap.Map) => {
    map.on('click', (e) => {
      console.log(e.lnglat.toArray());
    });

    map.on('mousemove', (e) => {
      const currentPoint = e.lnglat.toArray();

      if (!geoJSONOverlayRef.current) return;

      geoJSONOverlayRef.current.eachOverlay((el: AMap.Polygon) => {
        if (el.contains(currentPoint)) {
          el.setOptions({
            fillOpacity: 0.5,
            strokeColor: '#FFF',
            zIndex: 11,
          });
        } else {
          el.setOptions({
            fillOpacity: 0.25,
            strokeColor: '#6798C6',
            zIndex: 10,
          });
        }
      });
    });
  }, []);

  const initMap = useCallback(() => {
    AMapLoader.load({
      key: 'e1ce4157cdfb9f1b6ccee5ab457a410a',
      version: '2.0',
      plugins: ['AMap.GeoJSON', 'AMap.MarkerClusterer'],
      AMapUI: undefined,
      Loca: undefined,
    })
      .then(() => {
        const AMap = window.AMap;
        const map = new AMap.Map(styles.mapContainer, {
          viewMode: '3D',
          // pitch: 50,
          zoom: mapOptions.zoom,
          center: mapOptions.center,
          // mapStyle: 'amap://styles/b558e2100f9c29ea830edb185d19938e',
          features: [],
        });

        setMapInstance(map);
        bindMapEvent(map);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [mapOptions, bindMapEvent]);

  const showPolygonInfoWindow = useCallback(
    (properties: any, data: any, pos: AMap.Vector2) => {
      if (!mapInstance) return;
      if (!mapDataConfig.blockInfoWindowRenderFunc) return;

      const iw = new AMap.InfoWindow({
        isCustom: true,
        autoMove: true,
        content: mapDataConfig.blockInfoWindowRenderFunc(properties, data),
        offset: new AMap.Pixel(toAdaptedPx(0), toAdaptedPx(-20)),
      });

      iw.open(mapInstance, pos, 0);
    },
    [mapInstance, mapDataConfig],
  );

  const showMarkerInfoWindow = useCallback(
    (point: MapPoint) => {
      if (!mapInstance) return;
      if (!point.infoWindow) return;

      const iw = new AMap.InfoWindow({
        isCustom: true,
        autoMove: true,
        anchor: 'middle-left',
        content: point.infoWindow.render(point.infoWindow.data),
        offset: new AMap.Pixel(toAdaptedPx(30), toAdaptedPx(0)),
      });

      iw.open(mapInstance, point.pos, 0);
    },
    [mapInstance],
  );

  const generateMarkerContent = useCallback((point: MapPoint) => {
    const { iconData, extendData = [] } = point;
    const [iconBg, iconClass] = iconData;
    const [bg, iconColor] = iconMap[iconBg];
    const extendBg = null;
    const renderExtendData = (list: string[][]) => {
      return list
        .map((l1) => `<div>${l1.map((l2) => `<span>${l2}</span>`).join('')}</div>`)
        .join('');
    };

    return `<div class="clusterFinalMarker">
              <img class="clusterFinalMarker__bg" src="${bg}" />
              <div class="clusterFinalMarker__icon iconfont ${iconClass}" style="color: ${iconColor};"></div>
              <div
                class="clusterFinalMarker__extend row__${extendData.length}"
                style="
                  display: ${extendData.length ? 'flex' : 'none'};
                  backdrop-filter: blur(8px);
                  background-color: #39a89022;
                  background-image:url(${extendBg});">
                ${renderExtendData(extendData)}
              </div>
            </div>`;
  }, []);

  const bindMarkerEvent = useCallback(
    (marker: AMap.Marker, point: MapPoint) => {
      marker.on('click', () => {
        if (!point.infoWindow) {
          // this.$modal.show(point.modalName, { id: point.id });
        }
      });

      marker.on('mouseover', () => {
        if (point.infoWindow) {
          showMarkerInfoWindow(point);
        }
      });

      marker.on('mouseout', () => {
        if (point.infoWindow) {
          // this.hideInfoWindow();
        }
      });
    },
    [showMarkerInfoWindow],
  );

  const createIconMarker = useCallback(
    (point: MapPoint) => {
      let marker = new AMap.Marker({
        position: point.pos,
        offset: new AMap.Pixel(-toAdaptedPx(47.5), -toAdaptedPx(90)),
        content: generateMarkerContent(point),
      });

      bindMarkerEvent(marker, point);

      return marker;
    },
    [bindMarkerEvent, generateMarkerContent],
  );

  const setClusterCountMarker = useCallback(
    (context: any) => {
      if (!mapInstance) return;

      const { marker, count, clusterData } = context;

      let clusterWeight;
      let clusterIcon: { iconClass: string; iconBg: IconBg } = {
        iconClass: '',
        iconBg: 'red',
      };

      for (let i = 0; i < clusterData.length; i++) {
        const el = clusterData[i] as MapPoint;
        const [iconBg, iconClass] = el.iconData;

        if (
          clusterWeight === undefined ||
          (el.clusterWeight !== undefined && el.clusterWeight > clusterWeight)
        ) {
          clusterWeight = el.clusterWeight;
          clusterIcon = { iconClass, iconBg };
        }
      }

      const { iconBg: iconBgName, iconClass } = clusterIcon;
      const [iconBg, iconColor] = iconMap[iconBgName];
      const content = `
      <div class="clusterCountMarker bg__${iconBgName}">
        <img class="clusterCountMarker__bg" src="${iconBg}" />
        <div class="clusterCountMarker__icon iconfont ${iconClass}" style="color: ${iconColor};"></div>
        <div class="clusterCountMarker__count ${count > 99 ? 'count99Plus' : ''}">
          ${count > 99 ? '99+' : count}
        </div>
      </div>`;

      marker.setContent(content);
      marker.setOffset(new AMap.Pixel(-toAdaptedPx(47.5), -toAdaptedPx(90)));
      marker.on('click', () => {
        mapInstance.setZoomAndCenter(
          mapInstance.getZoom() + 1.5,
          marker.getPosition(),
          false,
        );
      });
    },
    [mapInstance],
  );

  const setClusterFinalMarker = useCallback(
    (context: any) => {
      const [marker, data] = [context.marker as AMap.Marker, context.data[0] as MapPoint];
      const content = generateMarkerContent(data);

      marker.setContent(content);
      marker.setOffset(new AMap.Pixel(-toAdaptedPx(47.5), -toAdaptedPx(90)));

      bindMarkerEvent(marker, data);
    },
    [bindMarkerEvent, generateMarkerContent],
  );

  const refreshSubBoundary = useCallback(() => {
    const map = mapInstance;

    if (!window.AMap || !map) return;
    if (geoJSONOverlayRef.current) map.remove(geoJSONOverlayRef.current as any);
    if (markerGroupRef.current) map.remove(markerGroupRef.current as any);
    if (markerClusterRef.current) markerClusterRef.current.setMap(null);

    const __geoJSONOverlay = new AMap.GeoJSON({
      geoJSON: geoJsonData as GeoJSON.GeoJSON,
      getPolygon(geojson, lnglats) {
        const props = geojson?.properties || {};
        return new AMap.Polygon({
          bubble: true,
          cursor: 'pointer',
          path: lnglats,
          fillOpacity: 0.25,
          fillColor: 'rgba(58, 165, 255, 1)',
          strokeWeight: 1,
          strokeOpacity: 1,
          strokeColor: '#6798C6',
          extData: {
            ...props,
          },
        });
      },
    });

    __geoJSONOverlay.on('click', (e: any) => {
      const properties = e.target.getExtData();
      const id = properties.adcode;

      console.log('click polygon', e, properties, mapDataConfig.blockClickModal);

      if (mapDataConfig.blockClickModal) {
        // 弹窗展示
      } else if (mapDataConfig.blockInfoWindowRenderFunc) {
        // 浮动窗口
        const obj = (mapBlockData || []).find((l) => l.id === id);

        if (!obj) return console.log('无数据，无法弹窗');

        showPolygonInfoWindow(properties, obj.data, e.lnglat.toArray());
      }
    });

    __geoJSONOverlay.on('mouseout', () => {
      map.clearInfoWindow();

      __geoJSONOverlay.eachOverlay((el: AMap.Polygon) => {
        el.setOptions({
          fillOpacity: 0.25,
          strokeColor: '#6798C6',
        });
      });
    });

    geoJSONOverlayRef.current = __geoJSONOverlay;
    map.add(__geoJSONOverlay as any);

    if (
      Array.isArray(mapDataConfig.pointGroups) &&
      mapDataConfig.pointGroups.length !== 0
    ) {
      const markers: AMap.Marker[] = [];
      const points: any[] = [];

      mapDataConfig.pointGroups.forEach((el) => {
        if (Array.isArray(el.points)) {
          if (markerRenderType === 'full') {
            el.points.forEach((el2) => {
              markers.push(createIconMarker(el2));
            });
          } else {
            points.push(
              ...el.points.map((el2) => ({
                ...el2,
                lnglat: el2.pos,
              })),
            );
          }
        }
      });

      if (markerRenderType === 'full') {
        const __markerGroup = new AMap.OverlayGroup(markers);

        markerGroupRef.current = __markerGroup;
        map.add(__markerGroup as any);
      } else {
        const __markerCluster = new AMap.MarkerClusterer(map, points, {
          clusterByZoomChange: false,
          gridSize: 50,
          renderClusterMarker: (context) => setClusterCountMarker(context),
          renderMarker: (context) => setClusterFinalMarker(context),
        });

        markerClusterRef.current = __markerCluster;
      }
    }
  }, [
    createIconMarker,
    mapBlockData,
    mapDataConfig.blockClickModal,
    mapDataConfig.blockInfoWindowRenderFunc,
    mapDataConfig.pointGroups,
    mapInstance,
    markerRenderType,
    setClusterCountMarker,
    setClusterFinalMarker,
    showPolygonInfoWindow,
  ]);

  useEffect(() => initMap(), [initMap]);
  useEffect(() => refreshSubBoundary(), [refreshSubBoundary]);

  return (
    <div className={styles.BigMap}>
      <div id={styles.mapContainer}></div>
    </div>
  );
}
