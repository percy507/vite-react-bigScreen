import React, { useEffect, useRef } from 'react';

import { toAdaptedPx } from '@/utils';
import { getColorFromGradientByPercent } from '@/utils/convert';

import styles from './style.module.less';

type LinearGradientColor = {
  startColor: string;
  endColor: string;
};

export type ProgressBar1Props = {
  ratio?: number;
  mainBg?: LinearGradientColor;
  rectBg?: LinearGradientColor;
};

export default function ProgressBar1(props: ProgressBar1Props) {
  const {
    ratio = 0.5,
    mainBg = {
      startColor: 'rgba(225,231,235,0)',
      endColor: 'rgba(225,231,235,0.1)',
    },
    rectBg = {
      startColor: '#FFFFFF',
      endColor: 'rgba(255,103,104,1)',
    },
  } = props;
  const rectContainerRef = useRef<HTMLDivElement>(null);
  const width = `${ratio * 100}%`;

  const renderRects = () => {
    const rootEl = rectContainerRef.current;

    if (rootEl) {
      const rootElWidth = rootEl.getBoundingClientRect().width;
      const rectWidth = toAdaptedPx(4);
      const rectGapWidth = toAdaptedPx(3);
      const maxWidth = rootElWidth - rectWidth;
      let rectStr = ``;

      for (let i = 1; i * (rectWidth + rectGapWidth) < maxWidth; i++) {
        rectStr += `
          <rect
            x="${(i - 1) * (rectWidth + rectGapWidth)}"
            width="${rectWidth}"
            height="100%"
            fill="${getColorFromGradientByPercent(
              rectBg.startColor,
              rectBg.endColor,
              (i * (rectWidth + rectGapWidth)) / rootElWidth,
            )}" />
          <rect
            x="${(i - 1) * (rectWidth + rectGapWidth) + rectWidth}"
            width="${rectGapWidth}"
            height="100%"
            fill="transparent" />
        `;
      }

      rootEl.innerHTML = `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">${rectStr}</svg>`;
    }
  };

  useEffect(() => {
    if (rectContainerRef.current !== null) {
      renderRects();
    }
  }, [rectContainerRef]);

  return (
    <div className={styles.ProgressBar1}>
      <div
        className={styles.bgContainer}
        style={{
          width,
          background: `linear-gradient(90deg, ${mainBg.startColor} 0%, ${mainBg.endColor} 100%)`,
        }}
      ></div>
      <div
        className={styles.rectContainer}
        style={{ width }}
        ref={rectContainerRef}
      ></div>
    </div>
  );
}
