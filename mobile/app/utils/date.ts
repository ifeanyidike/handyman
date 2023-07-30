export const getFormattedTime = (date: Date, locale = 'en-US'): string => {
  if (!(date instanceof Date)) return '';

  if (isToday(date)) return getTime(date);

  if (isYesterday(date)) return 'Yesterday';
  return getDateTag(date);
};

export function getDateTag(date: Date, locale = 'en-US'): string {
  if (isDateInThisWeek(date)) {
    const weekDate = date.toLocaleDateString('en-US', { weekday: 'long' });
    return weekDate.split(',')[0];
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

function getCurrentWeekDates() {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)
  const startOfWeek = new Date(currentDate); // Clone the current date
  startOfWeek.setDate(startOfWeek.getDate() - dayOfWeek); // Move to the start of the week (Sunday)
  startOfWeek.setHours(0, 0, 0, 0); // Set time to midnight

  const endOfWeek = new Date(currentDate); // Clone the current date
  endOfWeek.setDate(endOfWeek.getDate() + (6 - dayOfWeek)); // Move to the end of the week (Saturday)
  endOfWeek.setHours(23, 59, 59, 999); // Set time to the end of the day

  return {
    startOfWeek,
    endOfWeek,
  };
}

function isDateInThisWeek(date: Date) {
  const { startOfWeek, endOfWeek } = getCurrentWeekDates();
  return date >= startOfWeek && date <= endOfWeek;
}
