/**
 * consts, enums의 상수를 type으로 사용할 때도 여기에 작성
 * export type 상수타입 = typeof 상수[keyof typeof 상수]
 * */
import { SVG_PATH } from '@/constants/enums';
import { ROUTE_PATH } from '@/constants/enums/RoutePath';

export type SvgPath = typeof SVG_PATH[keyof typeof SVG_PATH];
export type RoutePath = typeof ROUTE_PATH[keyof typeof ROUTE_PATH];
