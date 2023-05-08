export type Locale = keyof typeof dictionaries;

const dictionaries = {
    en: () => import('@/dictionaries/en.json').then((module) => module.default),
    ko: () => import('@/dictionaries/ko.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
export const getLocale = () => Object.keys(dictionaries) as Locale[];
