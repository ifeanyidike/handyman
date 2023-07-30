export const getFormattedTime = (date: Date, locale = 'en-US'): string => {
  if (!(date instanceof Date)) return '';

  if (isToday(date)) return getTime(date);

  if (isYesterday(date)) return 'Yesterday';
  return getDateTag(date);
};

export function getDateTag(date: Date, locale = 'en-US'): string {
  if (isDateInThisWeek(date)) {
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  }
  let options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };
  return new Intl.DateTimeFormat(locale, options).format(date) as string;
}

export function getTime(date: Date, delimiter = '.'): string {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}${delimiter}${minutes}`;
}

function isYesterday(date: Date): boolean {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  return (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  );
}

function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

export const truncateText = (
  text: string,
  length: number,
  addEllipsis = true
): string => {
  if (text.length <= length) {
    return text;
  }
  const strArr = [text.slice(0, length)];
  if (addEllipsis) {
    strArr.push('...');
  }
  return strArr.join('');
};

const isDateInThisWeek = (date: Date) => {
  const today = new Date();

  //Get the first day of the current week (Sunday)
  const firstDayOfWeek = new Date(
    today.setDate(today.getDate() - today.getDay())
  );

  //Get the last day of the current week (Saturday)
  const lastDayOfWeek = new Date(
    today.setDate(today.getDate() - today.getDay() + 6)
  );

  //check if my value is between a minimum date and a maximum date
  if (date >= firstDayOfWeek && date <= lastDayOfWeek) {
    return true;
  } else {
    return false;
  }
};
