import type { ModalProps } from 'antd';
import { Modal } from 'antd';
import clsx from 'clsx';

import closeIconUrl from './assets/max-modal-close.svg';
import deco1Url from './assets/max-modal-header.svg';
import styles from './style.module.less';

export interface MaximizeModalProps extends ModalProps {
  title?: string;
  iconUrl?: string;
  setOpen?: (open: boolean) => void;
}

export function MaximizeModal(props: MaximizeModalProps) {
  const {
    children,
    title,
    iconUrl,
    open = false,
    setOpen = () => null,
    className,
    ...restProps
  } = props;

  return (
    <Modal
      {...restProps}
      open={open}
      title={null}
      footer={null}
      onCancel={() => setOpen(false)}
      className={clsx(styles.MaximizeModal, className)}>
      <img className={styles.deco1} src={deco1Url} alt="deco" />
      <img
        className={styles.closeIcon}
        src={closeIconUrl}
        alt="close"
        onClick={() => setOpen(false)}
      />
      <div className={styles.container}>
        <div className={styles.header}>
          {iconUrl && (
            <div className={styles.icon}>
              <img src={iconUrl} alt="icon" />
            </div>
          )}
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </Modal>
  );
}
