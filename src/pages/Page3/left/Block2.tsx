import { Empty } from '@/components/Empty';
import { PrimaryCard } from '@/components/PrimaryCard';
import { toAdaptedPx } from '@/utils';

// import styles from './Block2.module.less'

export default function Block2() {
  return (
    <PrimaryCard title="模块2">
      <Empty style={{ height: toAdaptedPx(250) }} />
    </PrimaryCard>
  );
}
