import { ActionTree } from 'vuex';
import { RootState } from '@/store/state';
import router from '@/router';
import {
  COMMON_ACTION_KEYS,
  COMMON_MUTATION_KEYS,
  COMMON_STATE_KEYS,
} from 'projects-common/src/constants/enums/StoreKeys';
import { useDevelopment } from '@/composable/useset/useDevelopment';

export const actions: ActionTree<RootState, RootState> = {
  [COMMON_ACTION_KEYS.CHANGE_REQUEST]: async (
    { state, commit },
    params: any,
  ): Promise<void> => {
    console.log('##### ??', params);
    if (await useDevelopment(params)) return;
    console.log('#### CHANGE_REQUEST');
    commit(COMMON_MUTATION_KEYS.PAGE_VO, {});
    await router.push({ path: params.option.toPath });
  },
};
