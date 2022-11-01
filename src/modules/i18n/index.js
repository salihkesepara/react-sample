import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import XHR from 'i18next-xhr-backend'

i18n.use(XHR)
  .use(LanguageDetector)
  .init({
    debug: false,
    lng: localStorage.getItem('i18nextLng') || 'tr',
    fallbackLng: 'en', // use en if detected lng is not available
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    defaultNS: 'translation',
    // auto load all translation files
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
  })

export default i18n
