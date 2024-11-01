
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import { homeTranslations as homeEn } from '../locales/translations/home/en'; // English translations
import { homeTranslations as homeJp } from '../locales/translations/home/jp'; // Japanese translations
import { membersTranslations as membersEn } from '../locales/translations/members/en' // English Members translations
import { membersTranslations as membersJp } from '../locales/translations/members/jp'; // Japanese Members translations

import { stockTranslations as stockEn } from '../locales/translations/stock/en'; // English Stock translations
import { stockTranslations as stockJp } from '../locales/translations/stock/jp'; // Japanese Stock translations
import { myPageTranslations as myPageEn } from '../locales/translations/myPage/en'; // English My Page translations
import { myPageTranslations as myPageJp } from '../locales/translations/myPage/jp'; // Japanese My Page translations
import { vendingMachineTranslations as vendingEn } from '../locales/translations/vendingMachine/en'; // English Vending Machine translations
import { vendingMachineTranslations as vendingJp } from '../locales/translations/vendingMachine/jp'; // Japanese Vending Machine translations

import { loginTranslations as loginEn } from '../locales/translations/login/en'; // English Login translations
import { loginTranslations as loginJp } from '../locales/translations/login/jp'; // Japanese Login translations



i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...homeEn,
          ...stockEn,
          ...vendingEn,
          ...membersEn,
          ...myPageEn,
          ...loginEn
        },
      },
      jp: {
        translation: {
          ...homeJp,
          ...stockJp,
          ...vendingJp,
          ...membersJp,
          ...myPageJp,
          ...loginJp
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
