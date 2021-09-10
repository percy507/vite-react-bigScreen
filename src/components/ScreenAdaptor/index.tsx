import { debounce } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';

import styles from './style.module.less';

type Props = {
  uiConfig: UIConfig; // 设计稿参数
  children: React.ReactNode; // children
};

// 锁定UI稿比例，以便适配屏幕
// 动态计算html元素的font-size
// 动态设置内容容器的width和height
export default function ScreenAdaptor(props: Props) {
  const { uiConfig, children } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const forceUpdate: () => void = useState<any>()[1].bind(null, {});

  const resizeHandler = debounce(() => {
    const htmlEle = document.documentElement;
    const layoutEle = containerRef.current as HTMLDivElement;
    const screenRatio = htmlEle.clientWidth / htmlEle.clientHeight;
    const screenRatioByDesign = uiConfig.width / uiConfig.height;
    const isScreenRatioBigger = screenRatio > screenRatioByDesign;
    const scale = isScreenRatioBigger ? screenRatioByDesign / screenRatio : 1;

    const rootFontSize = (scale * htmlEle.clientWidth) / uiConfig.base_num;
    const layoutWidth = isScreenRatioBigger
      ? scale * htmlEle.clientWidth
      : htmlEle.clientWidth;
    const layoutHeight = isScreenRatioBigger
      ? htmlEle.clientHeight
      : layoutWidth / screenRatioByDesign;

    if (layoutEle === null) return;

    htmlEle.style.fontSize = `${rootFontSize.toFixed(3)}px`;
    layoutEle.style.width = `${layoutWidth.toFixed(3)}px`;
    layoutEle.style.height = `${layoutHeight.toFixed(3)}px`;

    window.__adaptorWidth = layoutWidth;
    window.__adaptorHeight = layoutHeight;
    forceUpdate();
  }, 300);

  const initAdaptScreen = () => {
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
  };

  useEffect(() => {
    initAdaptScreen();
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return (
    <div className={styles.screenAdaptor}>
      <div ref={containerRef}>{containerRef.current !== null ? children : null}</div>
    </div>
  );
}
