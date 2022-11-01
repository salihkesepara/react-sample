export const isProduction = process.env.REACT_APP_CUSTOM_NODE_ENV === 'production'
export const isPreProduction = process.env.REACT_APP_CUSTOM_NODE_ENV === 'preproduction'
export const isDevelopment = process.env.REACT_APP_CUSTOM_NODE_ENV === 'development'
export const baseURL = process.env.REACT_APP_BASE_URL
export const appVersion = process.env.REACT_APP_VERSION || '1.0.0'
export const appDefaultLanguage = process.env.REACT_APP_DEFAULT_LANGUAGE
export const i18n = {
  languages: [
    {
      key: 'tr',
      flag: 'tr-TR',
      title: 'Türkçe'
    },
    {
      key: 'en',
      flag: 'en-US',
      title: 'English'
    }
  ],
  defaultLanguage: 'tr'
}
