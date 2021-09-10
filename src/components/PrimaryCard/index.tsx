import type { TabPaneProps } from 'antd';
import { Tabs } from 'antd';
import React, { useState } from 'react';

import styles from './style.module.less';

export type PrimaryCardProps = {
  title: string;
  tabs?: TabPaneProps[];
  children?: React.ReactNode;
};

const { TabPane } = Tabs;

export default function PrimaryCard(props: PrimaryCardProps) {
  const { title, tabs = [], children = null } = props;
  const hasTabs = tabs.length > 0;

  const [currentTab, setCurrentTab] = useState<number>(0);

  const onTabChange = (key: string) => {
    setCurrentTab(+key);
  };

  return (
    <div className={styles.PrimaryCard}>
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
          <Tabs destroyInactiveTabPane onChange={onTabChange}>
            {tabs.map((el, index) => {
              return (
                <TabPane key={index} tab={el.tab} tabKey={`${index}`}>
                  {el.children}
                </TabPane>
              );
            })}
          </Tabs>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
