import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import NotFoundIcon from '../../assets/icons/NotFoundIcon';
import Button from '../../components/Button';
import { colors } from '../../utils/generalUtils';
import { bookingStatus } from '../../types/basic';

type Props = {
  status: bookingStatus;
};
const NotFound = ({ status }: Props) => {
  return (
    <View style={styles.container}>
      <NotFoundIcon />
      <Text style={styles.title}>
        You have no {status.toLowerCase()} booking
      </Text>
      <Text style={styles.text}>
        You do not have a {status.toLowerCase()} booking. Make a new booking by
        clicking the button below
      </Text>
      <Button
        text="Make New Booking"
        backgroundColor={colors.secondaryColor}
        textColor={colors.primaryColor}
        onPress={() => {}}
      />
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    gap: 15,
  },
  title: {
    fontFamily: 'Urbanist_700Bold',
    fontSize: 20,
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Urbanist_400Regular',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
});
