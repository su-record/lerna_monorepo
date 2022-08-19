import router from '@/router';
import { store } from '@/store';
import {
  COMMON_MUTATION_KEYS,
  COMMON_STATE_KEYS,
} from 'projects-common/src/constants/enums/StoreKeys';

export const useDevelopment = async (params: any): Promise<boolean> => {
  if (!store.state[COMMON_STATE_KEYS.PRODUCTION]) {
    store.commit(COMMON_MUTATION_KEYS.PAGE_VO, params);
    if (params?.option?.toPath) {
      await router.push({ path: params.option.toPath });
    }
    return true;
  } else return false;
};
