import uiConfig from '../ui.config.json';

/** 基于设计稿比例以及实际页面的宽度，转换像素。输入值为像素的数值，输出适配后的数值 */
export function toAdaptedPx(value: number) {
  return value / (uiConfig.width / window.__adaptorWidth);
}

/** 用千位分隔符格式化数字，不会格式化小数位，且仅支持三位小数 */
export function formatNumber(
  val: number | string,
  /** 有效数字的位数，默认2位 */
  decimal = 2,
  autoPadZero = true,
): string {
  let num = Number.parseFloat(`${val}`);
  if (Number.isNaN(num)) return '-';
  let str = num.toLocaleString('en-US');
  if (autoPadZero) {
    let [a, b = ''] = str.split('.');
    if (b.length < decimal) str = `${a}.${b}${'0'.repeat(decimal - b.length)}`;
  }
  return decimal === 0
    ? str.replace(/\.\d*$/, '')
    : str.replace(/\.\d*$/, (v) => v.slice(0, decimal + 1));
}
