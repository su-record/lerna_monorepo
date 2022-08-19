import { useStore } from '@/store';
import {
  COMMON_ACTION_KEYS,
  COMMON_STATE_KEYS,
} from 'projects-common/src/constants/enums/StoreKeys';
import { RoutePath } from '@/constants/types';
import { joinId } from 'projects-common/src/utils';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { ButtonProps } from 'projects-common/src/constants/interfaces';

export const usePages = () => {
  const store = useStore();
  const route = useRoute();
  const pageId = computed(() => store.state[COMMON_STATE_KEYS.PAGE_ID]);

  const changeRequest = async function (
    item: null | ButtonProps,
    tail?: string,
    toPath?: RoutePath,
  ): Promise<void> {
    await store.dispatch(
      COMMON_ACTION_KEYS.CHANGE_REQUEST,
      item ?? {
        compId: joinId(pageId.value, tail ?? '', true),
        option: {
          toPath,
        },
      },
    );
  };

  return {
    id: pageId,
    path: computed(() => route.path),
    changeRequest,
  };
};
