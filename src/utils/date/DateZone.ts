import { getLocales } from 'expo-localization';
const locale = getLocales();
export const DateZone = (dateTime: Date) => {
  const date = new Date(dateTime.toString());
  return new Intl.DateTimeFormat(locale[0].languageTag, {
    timeZone: 'UTC',
  }).format(date);
};
