import { createFromIconfontCN } from '@ant-design/icons';
import React from 'react';

type IconFontProps = {
  type: string;
  style?: React.CSSProperties;
};

const MyIcon = createFromIconfontCN({
  // 在 iconfont.cn 上生成
  scriptUrl: '//at.alicdn.com/t/font_2727509_r834k5c7k0h.js',
});

export default function IconFont(props: IconFontProps) {
  const { type, style } = props;
  return <MyIcon type={type} style={style} />;
}
