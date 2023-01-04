import { Link } from 'react-router-dom';

import styles from './style.module.less';

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      <div>
        <Link to="/p1">页面1</Link>
      </div>
      <div>
        <Link to="/p2">页面2</Link>
      </div>
    </div>
  );
}
