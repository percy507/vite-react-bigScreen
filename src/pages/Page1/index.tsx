import { CanvasBg } from '@/components/CanvasBg';

import Center from './center';
import Left from './left';
import styles from './style.module.less';

export default function Page1() {
  return (
    <div className={styles.Page1}>
      <CanvasBg type="universe" />

      <div className={styles.header}>
        <div className={styles.headerTitle}>宇宙大屏</div>
      </div>

      <Left />
      <Center />
    </div>
  );
}
