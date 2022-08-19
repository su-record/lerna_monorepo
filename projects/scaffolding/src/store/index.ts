import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { RootState, state } from '@/store/state';
import { actions } from '@/store/actions';
import { mutations } from '@/store/mutations';

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
  state,
  actions,
  mutations,
});

export function useStore() {
  return baseUseStore(key);
}
