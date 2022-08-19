import { MutationTree } from 'vuex';
import { RootState } from '@/store/state';
import {
  COMMON_STATE_KEYS,
  COMMON_MUTATION_KEYS,
} from 'projects-common/src/constants/enums/StoreKeys';
import { PageVo } from '@/composable/vo/PageVo';

export const mutations: MutationTree<RootState> = {
  [COMMON_MUTATION_KEYS.PROGRESS]: (state: RootState, payload: boolean): void => {
    if (payload) state[COMMON_STATE_KEYS.PROGRESS].show();
    else state[COMMON_STATE_KEYS.PROGRESS].hide();
  },
  [COMMON_MUTATION_KEYS.LANG]: (state: RootState, payload: string): void => {
    state[COMMON_STATE_KEYS.LANG] = payload;
  },
  [COMMON_MUTATION_KEYS.PAGE_ID]: (state: RootState, payload: string): void => {
    state[COMMON_STATE_KEYS.PAGE_ID] = payload;
  },
  [COMMON_MUTATION_KEYS.PAGE_VO]: (state: RootState, payload: PageVo): void => {
    state[COMMON_STATE_KEYS.PAGE_VO]?.update(payload);
  },
};
