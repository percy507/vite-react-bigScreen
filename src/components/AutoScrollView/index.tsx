import anime from 'animejs';
import React, { useEffect, useRef } from 'react';

import { toAdaptedPx } from '@/utils';

import styles from './style.module.less';

type AutoScrollViewProps = {
  mode?: 'full' | 'step'; // 滚动模式
  height: number; // 滚动容器的高度
  stepHeight?: number; // mode 为 step 时，stepHeight为每次滚动的高度
  children: React.ReactNode;
};

export default function AutoScrollView(props: AutoScrollViewProps) {
  const { mode = 'full', height, stepHeight = 40, children } = props;

  const viewHeight = toAdaptedPx(height);
  const _stepHeight = toAdaptedPx(stepHeight);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current !== null) {
      const { height: containerHeight } = containerRef.current.getBoundingClientRect();

      if (containerHeight <= viewHeight) return;

      const baseOptions = {
        targets: containerRef.current,
        loop: true,
        duration: Math.round(30 * (containerHeight - viewHeight)),
        delay: 1000,
        endDelay: 1200,
      };

      if (mode === 'full') {
        anime({
          ...baseOptions,
          translateY: viewHeight - containerHeight,
          easing: 'linear',
        });
      } else if (mode === 'step') {
        const steps = Math.floor((containerHeight - viewHeight) / _stepHeight) + 1;
        const keyframes = new Array(steps).fill(0).map((_, index) => {
          return { translateY: -_stepHeight * (index + 1), delay: 1000 };
        });

        anime({
          ...baseOptions,
          easing: 'easeOutCirc',
          keyframes,
        });
      }
    }
  }, [containerRef]);

  return (
    <div className={styles.AutoScrollView} style={{ height: viewHeight }}>
      <div className={styles.asv__container} ref={containerRef}>
        {children}
      </div>
    </div>
  );
}
