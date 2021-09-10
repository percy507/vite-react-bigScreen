import uiConfig from '../ui.config.json';

/**
 *  基于设计稿比例以及实际页面的宽度，转换像素
 *
 * @export
 * @param {number} value  设计稿像素值
 * @return {string}
 */
export function toAdaptedPx(value: number): number {
  return value / (uiConfig.width / window.__adaptorWidth);
}
