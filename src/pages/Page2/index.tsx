import { CanvasBg } from '@/components/CanvasBg';

import styles from './style.module.less';

export default function Page2() {
  return (
    <div className={styles.Page2}>
      <CanvasBg type="universe" />
      <div className={styles.placeholder}>占位页</div>
    </div>
  );
}
