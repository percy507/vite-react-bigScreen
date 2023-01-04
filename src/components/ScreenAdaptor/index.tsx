import { debounce } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';

import styles from './style.module.less';

interface ScreenAdaptorProps {
  /** 设计稿参数 */
  uiConfig: UIConfig;
  children: React.ReactNode;
}

// 锁定UI稿比例，以便适配屏幕
// 动态计算html元素的font-size
// 动态设置内容容器的width和height
export function ScreenAdaptor(props: ScreenAdaptorProps) {
  const { uiConfig, children } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const forceUpdate: () => void = useState<any>()[1].bind(null, {});

  useEffect(() => {
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

    initAdaptScreen();
    return () => window.removeEventListener('resize', resizeHandler);
  }, [forceUpdate, uiConfig]);

  return (
    <div className={styles.screenAdaptor}>
      <div ref={containerRef}>{containerRef.current !== null ? children : null}</div>
    </div>
  );
}
