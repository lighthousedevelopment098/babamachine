import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import JSON files directly
import enTranslation from '../locales/en.json';
import jpTranslation from '../locales/jp.json';

i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation, // Use the imported translation
      },
      jp: {
        translation: jpTranslation, // Use the imported translation
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // use 'en' if detected lng is not available
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
