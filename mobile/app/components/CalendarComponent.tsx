import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Calendar as PrebuiltCalendar } from 'react-native-calendars';
import { colors } from '../utils/generalUtils';

type Props = {
  selected: string;
  setSelected: (e: string) => void;
};
const CalendarComponent = (props: Props) => {
  const { selected, setSelected } = props;
  return (
    <PrebuiltCalendar
      style={{
        borderRadius: 8,
        columnGap: 0,
      }}
      enableSwipeMonths={true}
      theme={{
        textMonthFontFamily: 'Urbanist_800ExtraBold',
        textMonthFontSize: 20,
        textDayHeaderFontFamily: 'Urbanist_800ExtraBold',
        textDayFontFamily: 'Urbanist_500Medium',
      }}
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedColor: colors.primaryColor,
          selectedTextColor: colors.white,
        },
      }}
    />
  );
};

export default CalendarComponent;

const styles = StyleSheet.create({});
