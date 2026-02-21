export const SUPPORTED_LOCALES = ['ja', 'en'] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'ja';

export const isLocale = (value: string): value is Locale => {
	return SUPPORTED_LOCALES.includes(value as Locale);
};
