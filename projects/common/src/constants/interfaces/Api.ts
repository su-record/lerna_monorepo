import { LocaleCode } from '../types';
import { ObjectKeyString } from '../interfaces';

export interface PageInfo {
  lang: LocaleCode;
  original?: ObjectKeyString;
}
