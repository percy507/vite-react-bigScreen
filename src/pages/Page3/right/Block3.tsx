import { Empty } from '@/components/Empty';
import { PrimaryCard } from '@/components/PrimaryCard';
import { toAdaptedPx } from '@/utils';

// import styles from './Block3.module.less'

export default function Block3() {
  return (
    <PrimaryCard title="模块6">
      <Empty style={{ height: toAdaptedPx(250) }} />
    </PrimaryCard>
  );
}
