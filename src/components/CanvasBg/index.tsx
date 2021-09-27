import React, { useEffect, useRef } from 'react';

import styles from './style.module.less';
import makeUniverse from './types/universe';

type CanvasBgProps = {
  type: 'universe';
};

export default function CanvasBg(props: CanvasBgProps) {
  const { type = 'universe' } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current !== null) {
      switch (type) {
        case 'universe':
          makeUniverse(canvasRef.current);
          break;
        default:
          break;
      }
    }
  }, [type]);

  return <canvas className={styles.CanvasBg} ref={canvasRef} />;
}
