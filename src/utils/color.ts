/**
 * convert number with assigned decimal precision (rounding)
 *
 * - rounding means 四舍五入
 * - Number.prototype.toFixed sometimes rounding incorrect
 * - 1.335.toFixed(2)  ==> 1.33
 * - 2.415.toFixed(2)	 ==> 2.42
 *
 * @export toFixedNum
 * @param {number} num
 * @param {number} [decimalPrecision=2]
 * @return {*}  {number}
 */
function toFixedNum(num: number, decimalPrecision: number = 2): number {
  const temp = Number(`1e${decimalPrecision}`);
  return Math.round(num * temp) / temp;
}

/** check if the `hex` color string is valid */
function isValidHexColor(hex: string): boolean {
  return /^([a-f\d]{3,4}|[a-f\d]{6}|[a-f\d]{8})$/i.test(hex);
}

/** check if the `rgb` color string is valid */
function isValidRGBColor(rgb: string): boolean {
  return /^rgb\((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)\)$/i.test(
    rgb,
  );
}

/** check if the `rgba` color string is valid */
function isValidRGBAColor(rgba: string): boolean {
  return /^rgba\((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|0?\.\d+|1(\.0)?)\)$/i.test(
    rgba,
  );
}

/**
 * convert color string: hex ==> rgb(a)
 *
 * @export colorHexToRGB
 * @param {string} hexCode support hex string with 3,4,6,8 degits (eg: #fff #fffa #ffffff #ffffffaa)
 * @param {boolean} [withAlpha=true] whether use alpha, default true
 * @return {*}  {string} Default return `rgba`. If not use alpha, then return `rgb`.
 * @example
 * - colorHexToRGB('#fff') ==> rgba(255,255,255,1)
 * - colorHexToRGB('#fff8') ==> rgba(255,255,255,0.5333)
 */
export function colorHexToRGB(hexCode: string, withAlpha: boolean = true): string {
  let hex = hexCode.replace(/\s/g, '').replace('#', '').toLowerCase();

  if (!isValidHexColor(hex)) {
    throw new Error('Invalid hex color code');
  }

  if (hex.length === 3 || hex.length === 4) {
    hex = hex.replace(/(.)/g, '$1$1');
  }

  const r = Number.parseInt(hex.substring(0, 2), 16);
  const g = Number.parseInt(hex.substring(2, 4), 16);
  const b = Number.parseInt(hex.substring(4, 6), 16);
  const a = Number.parseInt(hex.substring(6, 8) || 'ff', 16);

  return withAlpha
    ? `rgba(${r},${g},${b},${toFixedNum(a / 255, 4)})`
    : `rgb(${r},${g},${b})`;
}

/**
 * convert color string: rgb(a) ==> hex
 *
 * @export colorRGBToHex
 * @param {string} rgbCode support rgb or rgba (eg: rgb(255,255,255) rgba(255,255,255,1))
 * @return {*}  {string}
 * @example
 * - colorRGBToHex('rgb(175,205,255)') ==> #afcdff
 * - colorRGBToHex('rgba(175,205,255,0.789)') ==> #afcdffc9
 */
export function colorRGBToHex(rgbCode: string): string {
  const rgb = rgbCode.replace(/\s/g, '').toLowerCase();
  const isRGBA = rgb.startsWith('rgba');
  let result: string[] = [];

  if (isRGBA) {
    if (!isValidRGBAColor(rgb)) {
      throw new Error('Invalid rgba color code');
    }

    result = rgb
      .replace(/rgba\((.+?)\)/, '$1')
      .split(',')
      .map((v, index) => {
        return index === 3 ? Math.round(+v * 255).toString(16) : (+v).toString(16);
      })
      .map((v) => (v.length === 1 ? `0${v}` : v));
  } else {
    if (!isValidRGBColor(rgb)) {
      throw new Error('Invalid rgb color code');
    }

    result = rgb
      .replace(/rgb\((.+?)\)/, '$1')
      .split(',')
      .map((v) => (+v).toString(16))
      .map((v) => (v.length === 1 ? `0${v}` : v));
  }

  return `#${result.join('')}`;
}

/** convert color string: rgb ==> rgba */
export function colorRGBToRGBA(rgb: string): string {
  return rgb.replace(/\s/g, '').replace(/rgb\((.+?)\)/, 'rgba($1,1)');
}

/**
 * pick color from gradient by percentage
 *
 * @export getColorFromGradientByPercent
 * @param {string} startColor color string
 * @param {string} endColor color string
 * @param {number} percentage number between 0 and 1 [0,1]
 * @return {*}  {string} rgba string
 * @example
 * - getColorFromGradientByPercent('#FFF', '#000', 0.1) ==> rgba(230,230,230,1)
 * - getColorFromGradientByPercent('#FFF', '#000', 0.8) ==> rgba(51,51,51,1)
 */
export function getColorFromGradientByPercent(
  startColor: string,
  endColor: string,
  percentage: number, // [0,1]
): string {
  let color1 = startColor.replace(/\s/g, '');
  let color2 = endColor.replace(/\s/g, '');

  if (color1.startsWith('#')) color1 = colorHexToRGB(color1);
  if (color1.startsWith('rgb(')) color1 = colorRGBToRGBA(color1);
  if (color2.startsWith('#')) color2 = colorHexToRGB(color2);
  if (color2.startsWith('rgb(')) color2 = colorRGBToRGBA(color2);

  const color1Arr = color1
    .replace(/rgba\((.+?)\)/, '$1')
    .split(',')
    .map((v) => +v);
  const color2Arr = color2
    .replace(/rgba\((.+?)\)/, '$1')
    .split(',')
    .map((v) => +v);
  const resultColorArr = new Array(3).fill(0).map((_, index) => {
    return Math.round(
      color1Arr[index] + (color2Arr[index] - color1Arr[index]) * percentage,
    );
  });

  return percentage <= 0.5
    ? `rgba(${resultColorArr.join(',')},${color1Arr[3]})`
    : `rgba(${resultColorArr.join(',')},${color2Arr[3]})`;
}
