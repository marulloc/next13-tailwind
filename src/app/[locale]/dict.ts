import 'server-only';

const dictionaries = {
    en: () => import('@/locale/en.json').then((module) => module.default),
    ko: () => import('@/locale/ko.json').then((module) => module.default),
};

export const getDict = async (locale: keyof typeof dictionaries) => dictionaries[locale]();
