import Center from './center';
import Header from './header';
import LeftBlock1 from './left/Block1';
import LeftBlock2 from './left/Block2';
import LeftBlock3 from './left/Block3';
import RightBlock1 from './right/Block1';
import RightBlock2 from './right/Block2';
import RightBlock3 from './right/Block3';
import styles from './style.module.less';

export default function Page2() {
  return (
    <div className={styles.page2}>
      <Header />
      <div className={styles.content}>
        <div className={styles.left}>
          <LeftBlock1 />
          <LeftBlock2 />
          <LeftBlock3 />
        </div>
        <Center />
        <div className={styles.right}>
          <RightBlock1 />
          <RightBlock2 />
          <RightBlock3 />
        </div>
      </div>
    </div>
  );
}
