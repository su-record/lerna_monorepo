/***
 * @description const to array
 * */
import type { ButtonProps, CreateObjProps } from '../constants/interfaces';

export const objectToArray = <T extends object>(obj: T): T[] => {
  return Object.entries(obj).reduce((result: T[], [key, value]) => {
    if (Number.isNaN(Number(key))) {
      result.push({ label: key, value } as T);
    }
    return result;
  }, []);
};

/***
 * @description delay
 * */
export const msDelay = (ms = 100) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/***
 * @description handlePrefix
 * */
export const handlePrefix = (obj: object, prefix = 'res_', flag = true) => {
  if (flag)
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [`${prefix}${k}`, v]));
  else
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [`${k.replace(prefix, '')}`, v]),
    );
};

const setCamelCase = (key: string) =>
  key.replace(/([a-z])/g, (m, chr) => chr.toUpperCase());

/***
 * @description create uuid
 * */
export const createUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c: string) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/***
 * @description array divisions
 * */
export const arrayDivision = (arr: any[], l: number) =>
  new Array(Math.ceil(arr.length / l)).fill([]).map(() => arr.splice(0, l));

/***
 * @description deepMerge
 * */
export const deepMerge = (original: any, source: any, target?: any): object => {
  const originalData = { ...original };
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object) {
      Object.assign(
        source[key],
        deepMerge(originalData[key], source[key], target ? target[key] : undefined),
      );
    }
  }

  Object.assign(originalData || {}, source);

  if (target) {
    Object.assign(target, originalData);
    return target;
  } else {
    return originalData;
  }
};

/***
 * @description deps up
 * */
export const objDepsArrange = (obj: object, arr: any[] = []) => {
  const newArr: any[] = arr;

  Object.entries(obj).forEach(([key, value]) => {
    if (value instanceof Object) return objDepsArrange(value, newArr);
    newArr.push([key, value]);
  });

  return Object.fromEntries(newArr);
};

/***
 * @description 엘리먼트 비교하여 조건에 맞는 tag 찾기
 * */
export const compareElement = <T extends HTMLElement>(target: T, tag: string): T => {
  // console.log('### compareElement input ::', target);
  if (target.tagName === tag) return target;
  return compareElement(target.parentNode as T, tag);
};

export const joinId = (prefix: string, tail: string, isCompId = false): string => {
  if (isCompId) return `${prefix}_${tail}`;
  else return `${prefix}.${prefix}_${tail}`;
};

export const createButton = <O extends CreateObjProps>(
  obj: O,
  index: number,
): ButtonProps => {
  const sIdx = obj.random
    ? Math.floor(
        Math.random() * (obj.random - (obj.startIndex ?? 1)) + (obj.startIndex ?? 1),
      )
    : (obj.startIndex ?? 1) + index * (obj.indexTimes ?? 1);
  return {
    label: joinId(obj.data.prefix as string, `${obj.data.tail}${sIdx}`),
    compId: joinId(obj.data.prefix as string, `${obj.data.tail}${sIdx}`, true),
    option: obj.options ? obj.options[index] : undefined,
  };
};

export const createArrayInObj = <
  F extends Function,
  L extends number,
  O extends CreateObjProps,
>(
  fn: F,
  l: L,
  obj: O,
): Array<ButtonProps> =>
  new Array(l).fill({}).map((item, index) => {
    return {
      ...fn(obj, index),
    };
  });

/***
 * @description ROUTE_PATH to pageId
 * */
export const replacePath = (path: string) => path.replace('/', '');
