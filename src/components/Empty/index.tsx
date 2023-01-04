import clsx from 'clsx';

import { toAdaptedPx } from '@/utils';

import styles from './style.module.less';

export interface EmptyProps extends React.ComponentPropsWithRef<'div'> {
  imageWidth?: number;
}

export function Empty(props: EmptyProps) {
  const { className, imageWidth = toAdaptedPx(160), ...restProps } = props;

  return (
    <div className={clsx(styles.empty, className)} {...restProps}>
      <div style={{ width: imageWidth, height: imageWidth / 1.333 }} />
    </div>
  );
}
