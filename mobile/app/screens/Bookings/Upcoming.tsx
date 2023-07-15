import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../utils/generalUtils';
import BookingCard from '../../components/Bookings/BookingCard';

const Upcoming = () => {
  return (
    <View style={styles.container}>
      <BookingCard />
    </View>
  );
};

export default Upcoming;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
