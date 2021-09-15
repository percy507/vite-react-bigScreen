import greenBg from './icons/marker-green.png';
import redBg from './icons/marker-red.png';
import yellowBg from './icons/marker-yellow.png';

const iconMap = {
  // marker 图标为复合图标
  // 底部背景图 + 中心小图标（iconClass从iconfont获取）
  // [背景动图, 中心icon颜色],
  red: [redBg, 'rgba(255,103,104,1)'],
  green: [greenBg, 'rgba(132,207,150,1)'],
  yellow: [yellowBg, 'rgba(255, 196, 0,1)'],
};

export default iconMap;
