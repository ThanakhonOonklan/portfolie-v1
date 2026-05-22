import { useLocaleContext } from '@/providers';
import en from '@/messages/en.json';
import th from '@/messages/th.json';

const translations = { en, th };

export function useTranslation() {
  const { locale } = useLocaleContext();

  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = translations[locale];

    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        // Fallback to English if key is missing in active locale
        let fallback: any = translations['en'];
        for (const fKey of keys) {
          if (fallback && typeof fallback === 'object' && fKey in fallback) {
            fallback = fallback[fKey];
          } else {
            return path; // If all else fails, return the path string
          }
        }
        return typeof fallback === 'string' ? fallback : path;
      }
    }

    return typeof current === 'string' ? current : path;
  };

  return { t, locale };
}
