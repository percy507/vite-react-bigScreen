import { useEffect, useRef } from 'react';

import makeUniverse from './kinds/universe';
import styles from './style.module.less';

interface CanvasBgProps {
  type: 'universe';
}

export function CanvasBg(props: CanvasBgProps) {
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
