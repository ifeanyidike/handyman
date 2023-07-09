import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { defaultContainer } from '../../styles/general';
import { colors } from '../../utils/generalUtils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamsList } from '../../types/basic';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BackButton from '../../components/BackButton';
import * as Location from 'expo-location';

type BookingDetailsProps = NativeStackScreenProps<
  RootStackParamsList,
  'BookingLocation'
>;
const BookingLocation = (props: BookingDetailsProps) => {
  const { navigation } = props;

  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <SafeAreaView style={styles.container}>
      <BackButton navigation={navigation} title="Booking Details" />
    </SafeAreaView>
  );
};

export default BookingLocation;

const styles = StyleSheet.create({
  container: {
    ...defaultContainer,
    backgroundColor: colors.nearWhite,
    flex: 1,
  },
});
