import { Dimensions } from 'react-native';
import { colors } from './generalUtils';
const { width, height } = Dimensions.get('window');

export const defaultContainer = {
  width,
  height,
  paddingTop: 30,
  fontFamily: 'Urbanist_800ExtraBold',
  backgroundColor: colors.backgroundColor,
};

export const shadowElevation = {
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 1,
  elevation: 1,
  borderColor: colors.secondaryColor,
  borderWidth: 1,
};

export const getFormattedTime = (date: Date): string => {
  if (!(date instanceof Date)) {
    return '';
  }

  const currentDate = new Date();

  if (isToday(date)) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}.${minutes}`;
  }

  if (isYesterday(date)) {
    return 'Yesterday';
  }

  let options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };
  return new Intl.DateTimeFormat('en-US', options).format(date) as string;
};

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
