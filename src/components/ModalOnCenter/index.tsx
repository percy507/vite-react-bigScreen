import type { ModalProps } from 'antd';
import { Modal } from 'antd';
import clsx from 'clsx';
import { useEffect } from 'react';

import { toAdaptedPx } from '@/utils';

import styles from './style.module.less';

export interface ModalOnCenterProps extends ModalProps {
  pos?: { left: string; top: string };
}

export function ModalOnCenter(props: ModalOnCenterProps) {
  const { pos, wrapClassName, children, ...restProps } = props;

  useEffect(() => {
    if (!restProps.open) return;
    let wrapper = document.querySelector(`.${styles.modal}`) as HTMLElement | null;
    if (wrapper) {
      wrapper.style.left = pos?.left || '0px';
      wrapper.style.top = pos?.top || '0px';
    }
  }, [pos, restProps.open]);

  return (
    <Modal
      mask={false}
      width={toAdaptedPx(322)}
      wrapClassName={clsx(styles.modal, wrapClassName)}
      {...restProps}>
      {children}
    </Modal>
  );
}
