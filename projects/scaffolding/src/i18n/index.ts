import { createI18n } from "vue-i18n";
import { Config } from "@/config";

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

const messages = {
  ko: require("./locales/ko.json"),
  // en: require('./locales/en.json'),
  // jp: require('./locales/jp.json'),
  // cn: require('./locales/cn.json'),
} as const;

const i18n = createI18n({
  legacy: false,
  locale: "ko",
  fallbackLocale: "ko",
  globalInjection: true,
  warnHtmlMessage: false,
  messages,
});

// Config.i18n = i18n.global as any;

export default i18n;
