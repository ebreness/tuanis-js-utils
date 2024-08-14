import {defaultLang, Languages, TimeUnit, translations} from "./i18n";

/**
 * Returns a string (e.g '8 days ago') representing the time difference between the current time and the provided date in milliseconds.
 *
 * @example
 * timeAgo(new Date().getTime() - 10000);
 * @param {number} dateInMillis The date in milliseconds since the epoch.
 * @param {Languages} [lang] The language to use. Defaults to 'en' (English).
 * @returns {string} The time difference as a string.
 */
export const timeAgo = (dateInMillis: number, lang: Languages = defaultLang): string => {
    const currentDate = new Date();
    const inputDate = new Date(dateInMillis);
    const timeDifference = currentDate.getTime() - inputDate.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const t = translations[lang] || translations[defaultLang];

    const format = (unit: TimeUnit, value: number) => {
        return value === 1 ? t[unit][0] : t[unit][1].replace('%d', String(value));
    };

    if (days > 0) {
        return format('day', days);
    } else if (hours > 0) {
        return format('hour', hours);
    } else if (minutes > 0) {
        return format('minute', minutes);
    } else {
        return format('second', seconds);
    }
};
