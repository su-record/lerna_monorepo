import { createI18n } from 'vue-i18n';

// function loadLocaleMessages(): LocaleMessages<VueMessageType> {
//   const locales = require.context('./locales', true, /[A-Za-z0-0-_,\s]+\.json$/i)
//   const messages: LocaleMessages<VueMessageType> = {}
//   locales.keys().forEach(key => {
//     const matched = key.match(/([A-Za-z0-9-_]+)\./i)
//     if (matched && matched.length > 1) {
//       const locale = matched[1]
//       messages[locale] = locales(key).default
//     }
//   })
//   return messages
// }

export const messages = {
  ko: require('./locales/ko.json'),
  en: require('./locales/en.json'),
  ja: require('./locales/ja.json'),
  zh: require('./locales/zh.json'),
};

const i18n = createI18n({
  legacy: false,
  locale: 'ko',
  fallbackLocale: 'ko',
  globalInjection: true,
  warnHtmlMessage: false,
  messages,
});

export const localeI18n = createI18n({
  legacy: false,
  locale: 'ko',
  fallbackLocale: 'ko',
  globalInjection: true,
  warnHtmlMessage: false,
  messages,
});

export default i18n;
