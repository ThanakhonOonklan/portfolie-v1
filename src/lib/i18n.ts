import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/messages/en.json';
import th from '@/messages/th.json';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      th: { translation: th },
    },
    lng: 'en', // Initialize with 'en' to match server-rendered HTML and prevent hydration mismatch
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
    react: {
      useSuspense: false, // Prevents SSR/CSR hydration mismatches in Next.js App Router
    },
  });

export default i18n;
