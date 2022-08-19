/**
 * consts, enums의 상수를 type으로 사용할 때도 여기에 작성
 * export type 상수타입 = typeof 상수[keyof 상수]
 * */
import { DIALOG_ACTIONS, LOCALE_CODE } from '../enums';

export type Value = string | number;
export type Theme = { [key: string]: string | Theme };

export type LocaleCode = typeof LOCALE_CODE[keyof typeof LOCALE_CODE];
export type DialogActions = typeof DIALOG_ACTIONS[keyof typeof DIALOG_ACTIONS];
