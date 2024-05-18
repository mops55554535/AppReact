import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import {initReactI18next} from "react-i18next"
i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  
  .init({
    fallbackLng: 'ru',
    debug: __IS_DEV__,
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
  });
export default i18next;