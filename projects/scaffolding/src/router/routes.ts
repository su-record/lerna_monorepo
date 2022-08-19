import { RouteRecordRaw } from 'vue-router';
import { ROUTE_PATH } from '@/constants/enums/RoutePath';

const componentLoad = (name: string) => () =>
  import(/* webpackChunkName: "[request]" */ `../views/${name}View.vue`);

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: ROUTE_PATH.홈,
  },
  {
    path: ROUTE_PATH.홈,
    component: componentLoad('Home'),
  },
  {
    path: ROUTE_PATH.어바웃,
    component: componentLoad('About'),
  },
  {
    path: '/:catchAll(.*)*',
    component: componentLoad('Error404View'),
  },
];

export default routes;
