import anime from 'animejs';
import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';

import { toAdaptedPx } from '@/utils';

import styles from './style.module.less';

interface AutoScrollViewProps extends React.ComponentPropsWithRef<'div'> {
  /** 滚动模式 */
  mode?: 'full' | 'step';
  /** 滚动容器的高度 */
  height: number;
  /** mode 为 step 时，stepHeight为每次滚动的高度 */
  stepHeight?: number;
  children: React.ReactNode;
}

export function AutoScrollView(props: AutoScrollViewProps) {
  const {
    mode = 'full',
    height,
    stepHeight = 40,
    children,
    className,
    style,
    ...restProps
  } = props;

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
  }, [_stepHeight, viewHeight, mode, children]);

  return (
    <div
      className={clsx(styles.AutoScrollView, className)}
      style={{ ...style, height: viewHeight }}
      {...restProps}>
      <div className={styles.asv__container} ref={containerRef}>
        {children}
      </div>
    </div>
  );
}
