import { StyleSheet, View } from 'react-native';
import React from 'react';
import { colors, testBookings } from '../../utils/generalUtils';
import { bookingStatus } from '../../types/basic';
import ListItems from './ListItems';

const Upcoming = () => {
  return (
    <View style={styles.container}>
      <ListItems data={testBookings} status={bookingStatus.upcoming} />
    </View>
  );
};

export default Upcoming;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  contentContainer: {
    gap: 30,
    marginVertical: 30,
  },
});
