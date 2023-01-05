import { Empty } from '@/components/Empty';
import { PrimaryCard } from '@/components/PrimaryCard';
import { toAdaptedPx } from '@/utils';

// import styles from './Block1.module.less'

export default function Block1() {
  return (
    <PrimaryCard title="模块1">
      <Empty style={{ height: toAdaptedPx(250) }} />
    </PrimaryCard>
  );
}
