import { useLocaleContext } from '@/providers';

export function useLocale() {
  const { locale, setLocale } = useLocaleContext();

  return {
    locale,
    setLocale,
    isEN: locale === 'en',
    isTH: locale === 'th',
  };
}
