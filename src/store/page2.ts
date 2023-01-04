import { atom } from 'jotai';

/** 左上角选中的筛选项 */
export const atomSelected = atom<any[]>([]);
export const atomSelectedParams = atom((get) => {
  let arrs = get(atomSelected);
  let obj: Record<string, any> = {};
  if (arrs[0]) obj.areaCode = arrs[0];
  if (arrs[1]) obj.streetCode = arrs[1];
  if (arrs[2]) obj.projectCode = arrs[2];
  return obj;
});
