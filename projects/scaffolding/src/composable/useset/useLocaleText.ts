import { Composer } from 'vue-i18n';
import { localeI18n } from '@/i18n';
import { LocaleCode } from 'projects-common/src/constants/types';

export const useLocaleText = (lang: LocaleCode, tail: string) => {
  const i18n: Composer = localeI18n.global;
  i18n.locale.value = lang;
  return i18n.t(tail);
};
