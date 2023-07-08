import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { defaultContainer } from '../../styles/general';
import { colors } from '../../utils/generalUtils';
import BackButton from '../../components/BackButton';
import { RootStackParamsList } from '../../types/basic';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Calendar } from 'react-native-calendars';

type BookingDetailsProps = NativeStackScreenProps<
  RootStackParamsList,
  'BookingDetails'
>;
const BookingDetails = (props: BookingDetailsProps) => {
  const { navigation, route } = props;
  const [selected, setSelected] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <BackButton navigation={navigation} title="Booking Details" />
      <View style={styles.content}>
        <Text>BookingDetails</Text>
        <Calendar
          style={{
            borderRadius: 10,
          }}
          theme={{
            calendarBackground: '#7210FF14',
          }}
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: colors.buttonPrimaryColor,
              selectedTextColor: colors.white,
            },
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default BookingDetails;

const styles = StyleSheet.create({
  container: {
    ...defaultContainer,
    height: defaultContainer.height,
    backgroundColor: colors.lineFainterColor,
  },
  content: {
    marginHorizontal: 20,
  },
});
