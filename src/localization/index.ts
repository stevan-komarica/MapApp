import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ENTranslation from './translation.en.json';
import DETranslation from './translation.de.json';

const resources = {
  en: {
    translation: ENTranslation,
  },
  de: {
    translation: DETranslation,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
