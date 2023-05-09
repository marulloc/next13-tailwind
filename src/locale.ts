export type Locale = keyof typeof dictionaries;

const dictionaries = {
    en: () => import('@/dictionaries/en.json').then((module) => module.default),
    ko: () => import('@/dictionaries/ko.json').then((module) => module.default),
    'zh-CN': () => import('@/dictionaries/zh-CN.json').then((module) => module.default),
    'zh-TW': () => import('@/dictionaries/zh-TW.json').then((module) => module.default),
    'zh-HK': () => import('@/dictionaries/zh-TW.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
export const getLocale = () => Object.keys(dictionaries) as Locale[];
