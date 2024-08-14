export type TimeUnit = 'day' | 'hour' | 'minute' | 'second';
export type Languages = 'en' | 'es';

type TranslationStrings = {
    [key in TimeUnit]: [string, string];
};

type Translations = {
    [lang in Languages]: TranslationStrings;
};

export const translations: Translations = {
    en: {
        day: ['1 day ago', '%d days ago'],
        hour: ['1 hour ago', '%d hours ago'],
        minute: ['1 minute ago', '%d minutes ago'],
        second: ['1 second ago', '%d seconds ago'],
    },
    es: {
        day: ['hace 1 día', 'hace %d días'],
        hour: ['hace 1 hora', 'hace %d horas'],
        minute: ['hace 1 minuto', 'hace %d minutos'],
        second: ['hace 1 segundo', 'hace %d segundos'],
    },
};

export const defaultLang = 'en';
