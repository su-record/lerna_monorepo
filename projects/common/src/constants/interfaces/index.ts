import { DialogActions } from '../types';

export interface ObjectKeyString {
  [key: string]: any | ObjectKeyString;
}

export interface ButtonProps {
  label?: string;
  value?: any;
  classname?: string;
  compId?: string;
  theme?: ObjectKeyString;
  option?: any;
}

export interface CreateObjProps {
  data: ObjectKeyString;
  startIndex?: number;
  indexTimes?: number;
  random?: number;
  options?: any[];
}

export interface PageTitleTheme {
  ts?: number;
  tlh?: number;
  tc?: string;
  ds?: number;
  dlh?: number;
  dc?: string;
}

export interface Dialog {
  type: DialogActions;
  title: string;
  desc: string;
  isError: boolean;
}
