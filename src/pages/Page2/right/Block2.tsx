import { Empty } from '@/components/Empty';
import { PrimaryCard } from '@/components/PrimaryCard';
import { toAdaptedPx } from '@/utils';

export default function Block2() {
  return (
    <PrimaryCard title="模块5">
      <Empty style={{ height: toAdaptedPx(250) }} />
    </PrimaryCard>
  );
}
