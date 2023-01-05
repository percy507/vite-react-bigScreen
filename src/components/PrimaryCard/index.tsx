import type { TabPaneProps } from 'antd';
import { Tabs } from 'antd';
import clsx from 'clsx';
import { useState } from 'react';

import styles from './style.module.less';

export interface PrimaryCardProps
  extends Omit<React.ComponentPropsWithRef<'div'>, 'title'> {
  title: React.ReactNode;
  tabs?: TabPaneProps[];
  children?: React.ReactNode;
}

export function PrimaryCard(props: PrimaryCardProps) {
  const { title, tabs = [], children = null, className, ...restProps } = props;
  const hasTabs = tabs.length > 0;

  const [currentTab, setCurrentTab] = useState<number>(0);

  const onTabChange = (key: string) => {
    setCurrentTab(+key);
  };

  return (
    <div className={clsx(styles.PrimaryCard, className)} {...restProps}>
      <div className={styles.pcard__header}>
        <div className={styles.pcard__headerLeft}>{title}</div>
        <div className={styles.pcard__headerRight}>
          <div className={styles.pcard__arrow}>
            {hasTabs ? (
              tabs.map((_, index) => {
                return (
                  <div
                    key={index}
                    className={`${styles.pcard__arrow__rect} ${
                      currentTab === index ? styles.active : ''
                    }`}
                  />
                );
              })
            ) : (
              <div className={`${styles.pcard__arrow__rect} ${styles.active}`} />
            )}
          </div>
        </div>
      </div>
      <div className={styles.pcard__content}>
        {hasTabs ? (
          <Tabs
            destroyInactiveTabPane
            onChange={onTabChange}
            items={tabs.map((el, index) => ({
              key: `${index}`,
              label: el.tab,
              children: el.children,
            }))}
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
}
