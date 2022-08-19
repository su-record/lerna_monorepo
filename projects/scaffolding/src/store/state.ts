import { AbstractState } from 'projects-common/src/composables/vo/AbstractState';
import { PageVo } from '@/composable/vo/PageVo';
import { COMMON_STATE_KEYS } from 'projects-common/src/constants/enums/StoreKeys';

class StateVo extends AbstractState {
  constructor() {
    super(new PageVo());
    this[COMMON_STATE_KEYS.PRODUCTION] = process.env.NODE_ENV === 'production';
  }
}

export const state = new StateVo();

export type RootState = typeof state;
