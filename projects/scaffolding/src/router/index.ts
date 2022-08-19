import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
} from 'vue-router';
import routes from './routes';
import { store } from '@/store';
import { COMMON_MUTATION_KEYS } from 'projects-common/src/constants/enums/StoreKeys';
import { replacePath } from 'projects-common/src/utils';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
  ) => {
    console.log('#### to: ', to);
    store.commit(COMMON_MUTATION_KEYS.PAGE_ID, replacePath(to.path));
    next();
  },
);

export default router;
