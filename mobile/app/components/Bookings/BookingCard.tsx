import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../utils/generalUtils';

const BookingCard = () => {
  return (
    <View style={styles.container}>
      <Text>BookingCard</Text>
    </View>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
});
