import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { defaultContainer } from '../../utils/general';
import { colors } from '../../utils/generalUtils';
import BackButton from '../../components/BackButton';
import { RootStackParamsList } from '../../types/basic';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ToggleBookingCount from '../../components/Prebooking/ToggleBookingCount';
import NavButton from '../../components/NavButton';
import CustomInput from '../../components/CustomInput';
import PlusIcon from '../../assets/icons/PlusIcon';
import Button from '../../components/Button';
import CalendarComponent from '../../components/CalendarComponent';

type BookingDetailsProps = NativeStackScreenProps<
  RootStackParamsList,
  'BookingDetails'
>;

const startTimes = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '13:00 PM',
  '14:00 PM',
  '15:00 PM',
  '16:00 PM',
  '17:00 PM',
  '18:00 PM',
];

const BookingDetails = (props: BookingDetailsProps) => {
  const { navigation, route } = props;
  const [selected, setSelected] = useState('');
  const [workingHours, setWorkingHours] = useState(0);
  const [timeClicked, toggleTimeClicked] = useState<{ index: number | null }>({
    index: null,
  });

  const decrementCount = () => {
    if (workingHours === 0) return;
    setWorkingHours(workingHours - 1);
  };

  const incrementCount = () => {
    setWorkingHours(workingHours + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackButton navigation={navigation} title="Booking Details" />
      <ScrollView style={styles.content}>
        <Text style={styles.dateTitle}>Select Date</Text>
        <CalendarComponent selected={selected} setSelected={setSelected} />
        <ToggleBookingCount
          count={workingHours}
          decrementCount={decrementCount}
          incrementCount={incrementCount}
          verticalPadding={15}
        >
          <View style={styles.hours}>
            <Text style={styles.hoursHeader}>Working Hours</Text>
            <Text style={styles.hoursText}>
              Cost increase after {workingHours} hr{workingHours > 1 && 's'} of
              work
            </Text>
          </View>
        </ToggleBookingCount>

        <View style={styles.startTime}>
          <Text style={styles.hoursHeader}>Choose Start Time</Text>
          <FlatList
            style={{ marginVertical: 10 }}
            data={startTimes}
            renderItem={({ item, index }) => {
              const isClicked = index === timeClicked.index;
              return (
                <NavButton
                  hasBackground={isClicked}
                  index={index}
                  toggleNavClicked={toggleTimeClicked}
                >
                  {item}
                </NavButton>
              );
            }}
            horizontal
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View>
          <Text style={styles.hoursHeader}>Promo Code</Text>
          <View style={styles.promo}>
            <View style={styles.promoInput}>
              <CustomInput placeholder="Enter Promo Code" height={45} />
            </View>
            <PlusIcon size="40" />
          </View>
        </View>
      </ScrollView>
      <Button
        onPress={() => navigation.navigate('BookingLocation')}
        text="Continue"
      />
    </SafeAreaView>
  );
};

export default BookingDetails;

const styles = StyleSheet.create({
  container: {
    ...defaultContainer,
    backgroundColor: colors.nearWhite,
    flex: 1,
  },
  content: {
    marginHorizontal: 20,
    flex: 1,
  },
  dateTitle: {
    marginVertical: 20,
    fontFamily: 'Urbanist_600SemiBold',
    fontSize: 18,
  },
  hours: {},
  hoursHeader: {
    fontFamily: 'Urbanist_600SemiBold',
    fontSize: 16,
    marginVertical: 8,
  },
  hoursText: {
    fontFamily: 'Urbanist_400Regular',
    fontSize: 10,
  },
  startTime: {
    marginVertical: 5,
  },
  promo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  promoInput: {
    flex: 0.96,
  },
});
