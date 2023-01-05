import { Link } from 'react-router-dom';

import styles from './style.module.less';

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      <div>
        <Link to="/p1">大屏1（高德地图）</Link>
      </div>
      <div>
        <Link to="/p2">大屏2（echarts 3d地图）</Link>
      </div>
      <div>
        <Link to="/p3">大屏3（echarts 3d地图 + 下钻）</Link>
      </div>
    </div>
  );
}
