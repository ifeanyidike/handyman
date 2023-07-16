import { StyleSheet, View } from 'react-native';
import React from 'react';
import { colors, testBookings } from '../../utils/generalUtils';
import { bookingStatus } from '../../types/basic';
import ListItems from './ListItems';

const Completed = () => {
  return (
    <View style={styles.container}>
      <ListItems data={testBookings} status={bookingStatus.completed} />
    </View>
  );
};

export default Completed;

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
