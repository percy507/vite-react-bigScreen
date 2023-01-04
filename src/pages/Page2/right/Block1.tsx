import { Empty } from '@/components/Empty';
import { PrimaryCard } from '@/components/PrimaryCard';
import { toAdaptedPx } from '@/utils';

export default function Block1() {
  return (
    <PrimaryCard title="模块4">
      <Empty style={{ height: toAdaptedPx(250) }} />
    </PrimaryCard>
  );
}
