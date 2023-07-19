import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { defaultContainer } from '../../utils/general';
import LogoTitle from '../../components/LogoTitle';
import CalendarComponent from '../../components/CalendarComponent';
import SectionTitle from '../../components/SectionTitle';
import { Navigation, bookingStatus } from '../../types/basic';
import { testBookings } from '../../utils/generalUtils';
import ListItems from './ListItems';

const data: any = testBookings; //testBookings
const Calendar = ({ navigation }: Navigation) => {
  const [selected, setSelected] = useState('');
  const bookingLength = data.length;
  return (
    <View>
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <LogoTitle title="My Calendar" />
          <CalendarComponent selected={selected} setSelected={setSelected} />
          <View style={styles.caption}>
            <SectionTitle
              caption={`Service Booking (${bookingLength})`}
              onPress={() => navigation.navigate('AllServices')}
              action={bookingLength ? 'See All' : undefined}
            />
          </View>
          <ListItems data={data} status={bookingStatus.upcoming} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    ...defaultContainer,
    paddingHorizontal: 20,
  },
  caption: {
    marginTop: 30,
  },
});
