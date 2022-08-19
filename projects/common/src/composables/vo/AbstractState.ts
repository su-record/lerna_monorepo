import { COMMON_STATE_KEYS } from '../../constants/enums/StoreKeys';
import { CommonLoading } from '../../components/CommonLoading';

export abstract class AbstractState {
  [COMMON_STATE_KEYS.PRODUCTION] = false;
  [COMMON_STATE_KEYS.PROGRESS] = new CommonLoading();
  [COMMON_STATE_KEYS.LANG] = 'ko';
  [COMMON_STATE_KEYS.PAGE_ID] = '';
  [COMMON_STATE_KEYS.PAGE_VO]: any;

  protected constructor(page: any) {
    this[COMMON_STATE_KEYS.PAGE_VO] = page;
  }
}
