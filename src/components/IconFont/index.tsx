import { createFromIconfontCN } from '@ant-design/icons';
import React from 'react';

type IconFontProps = {
  type: string;
  style?: React.CSSProperties;
};

const MyIcon = createFromIconfontCN({
  // ε¨ iconfont.cn δΈηζ
  scriptUrl: '//at.alicdn.com/t/font_2727509_r834k5c7k0h.js',
});

export default function IconFont(props: IconFontProps) {
  const { type, style } = props;
  return <MyIcon type={type} className="iconfont" style={style} />;
}
